import { useEffect, useState } from "react";
import useCanvas from "./hook";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Aligner from "../wrappers/aligner";

interface DiaryImageType {
    storagePath: string
    size?: "sm" | "mid"
}

const longSide = {
    sm: 520,
    mid: 690,
};


export function DisplayImageCanvas({ storagePath, size }: DiaryImageType) {

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
            console.log(`loaded image${image}`)
            setBackground(image)
            if (size) {
                if (image.naturalHeight > image.naturalWidth) {
                    setDimention({ "height": longSide[size], "width": image.naturalWidth * longSide[size] / image.naturalHeight })
                } else {
                    setDimention({ "height": longSide[size] * image.naturalHeight / image.naturalWidth, "width": longSide[size] })
                }
            } else {
                setDimention({ "height": image.naturalHeight, "width": image.naturalWidth })
            }
        })
        image.src = base64image;
    }


    useEffect(() => {
        getMapFileFromStorage(storagePath)
    }, [storagePath]);


    useEffect(() => {
        if (background === undefined) { return }
        canvasUtil!.setBackground(background, dimention.width, dimention.height)
    }, [background])




    return <canvas ref={ref} width={dimention.width} height={dimention.height} />

}


