import { useEffect, useState } from "react";
import useCanvas from "./hook";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Aligner from "../wrappers/aligner";

interface DiaryImageType {
    storagePath: string
}


export function DisplayImageCanvas({storagePath}:DiaryImageType) {
    
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
            setDimention({ "height": image.naturalHeight, "width": image.naturalWidth })
        })
        image.src = base64image;
    }


    
    useEffect(() => {
        getMapFileFromStorage(storagePath)
    }, [storagePath]);


    useEffect(() => {
        if (background === undefined) { return }
        canvasUtil!.setBackground(background)
    }, [background])




    return <canvas ref={ref} width={dimention.width} height={dimention.height}/>

}


