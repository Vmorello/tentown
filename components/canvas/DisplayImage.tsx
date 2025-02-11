import { useEffect, useState } from "react";
import { createClient } from '@/utils/supabase/client';
import useCanvas from "./hook";
import { setDimentionWithSize } from "@/utils/canvas_utils";

interface ImageDisplayType {
    storagePath: string
    size: "sm" | "mid"
}

const longSide = {
    sm: 520,
    mid: 690,
};


export function DisplayImageCanvas({ storagePath,  size }: ImageDisplayType) {

    const [supabase] = useState(createClient())

    const { ref, canvasUtil } = useCanvas();

    const [background, setBackground] = useState(undefined as HTMLImageElement | undefined)
    const [dimention, setDimention] = useState({ "height": 200, "width": 200 })

    const getMapFileFromStorage = async (storageName: string) => {
        // console.log(`trying to get ${storageName}`)
        if (!storageName) {
            return
        }

        const { data, error } = await supabase
            .storage
            .from('public/MapCollection')
            .download(storageName)

        // console.log(data, error)

        updateBackgroundAndSize(data!)

    }

    const updateBackgroundAndSize = (backgroundImage: Blob) => {
        const imageURL = URL.createObjectURL(backgroundImage)
        // console.log(imageURL)
        const tempImage = new Image();

        tempImage.addEventListener("load", () => {
            // console.log(`loading image${tempImage}`)

            setBackground(tempImage)
            setDimentionWithSize(tempImage,setDimention, longSide.mid)

            URL.revokeObjectURL(imageURL)
        })
        tempImage.src = imageURL
    }

    useEffect(() => {
        getMapFileFromStorage(storagePath)
    }, [storagePath]);



    useEffect(() => {
        // console.log("use effect on background")
        // console.log(background)
        if (background === undefined) { return }
        canvasUtil!.setBackground(background, dimention.width, dimention.height)
        // console.log("set background")
    }, [background])


    const onClick = (xCanvas: number, yCanvas: number) => {canvasUtil?.addClickEffect(xCanvas, yCanvas)}


    return <canvas ref={ref} width={dimention.width} height={dimention.height} onClick={(event) => onClick(event.nativeEvent.offsetX, event.nativeEvent.offsetY)} />

}


