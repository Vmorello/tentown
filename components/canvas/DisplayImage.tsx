import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import useCanvas from "./hook";
import { CanvasControl } from "@/classes/canvas_utils";

interface ImageDisplayType {
    storagePath?: string
    previewfile?: File
    size?: "sm" | "mid"
    className?: string
    onClickInput?: (canvasX: number, canvasY: number) => void
}

const longSide = {
    sm: 520,
    mid: 690,
};


export function DisplayImageCanvas({ storagePath, previewfile, size, className, onClickInput }: ImageDisplayType) {

    const [supabase] = useState(createClientComponentClient())

    const { ref, canvasUtil } = useCanvas();

    const [background, setBackground] = useState(undefined as HTMLImageElement | undefined)
    const [dimention, setDimention] = useState({ "height": 200, "width": 200 })

    const getMapFileFromStorage = async (storageName: string) => {
        console.log(`trying to get ${storageName}`)
        if (!storageName) {
            return
        }

        const { data, error } = await supabase
            .storage
            .from('public/MapCollection')
            .download(storageName)

        // console.log(data, error)

        const reader = new FileReader();
        reader.readAsText(data!);
        reader.onloadend = () => {
            console.log(reader.result)
            updateBackgroundAndsSizeWithBase64(reader.result as string)
        };

    }
    const updateBackgroundAndsSizeWithBase64 = (base64image: string) => {

        var image = new Image();
        image.src = base64image;

        image.addEventListener("load", () => {
            // console.log(`loaded image${image}`)
            setBackground(image)
            setDimentionWithSize(image, size)
        })
        image.src = base64image;
    }

    const updateBackgroundAndSize = (backgroundImage: Blob) => {
        const imageURL = URL.createObjectURL(backgroundImage)
        // console.log(imageURL)
        const tempImage = new Image();

        tempImage.addEventListener("load", () => {
            console.log(`loading image${tempImage}`)
            setBackground(tempImage)
            setDimentionWithSize(tempImage, size)
            URL.revokeObjectURL(imageURL)
        })
        tempImage.src = imageURL
    }

    const setDimentionWithSize = (image: HTMLImageElement, size?: "sm" | "mid",) => {
        if (size) {
            if (image.naturalHeight > image.naturalWidth) {
                setDimention({ "height": longSide[size], "width": image.naturalWidth * longSide[size] / image.naturalHeight })
            } else {
                setDimention({ "height": longSide[size] * image.naturalHeight / image.naturalWidth, "width": longSide[size] })
            }
        } else {
            setDimention({ "height": image.naturalHeight, "width": image.naturalWidth })
        }

    }

    useEffect(() => {
        if (storagePath) {
            getMapFileFromStorage(storagePath)
        }
    }, [storagePath]);


    useEffect(() => {
        if (previewfile) {
            updateBackgroundAndSize(previewfile)
        }
    }, [previewfile]);


    useEffect(() => {
        console.log("use effect on background")
        console.log(background)
        if (background === undefined) { return }
        canvasUtil!.setBackground(background, dimention.width, dimention.height)
        console.log("set background")
    }, [background])


    const onClick = onClickInput ? (xCanvas: number, yCanvas: number) => {
        canvasUtil?.addClickEffect(xCanvas, yCanvas)
        onClickInput(xCanvas, yCanvas)
    } : (xCanvas: number, yCanvas: number) => {canvasUtil?.addClickEffect(xCanvas, yCanvas)}


    return <canvas ref={ref} width={dimention.width} height={dimention.height} className={className} onClick={(event) => onClick(event.nativeEvent.offsetX, event.nativeEvent.offsetY)} />

}


