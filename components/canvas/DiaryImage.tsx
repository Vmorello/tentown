import { useEffect, useState } from "react";
import useCanvas from "./hook";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface DiaryImageType {
    storagePath: string
}


export function DiaryImage({storagePath}:DiaryImageType) {
    
    const [supabase] = useState(createClientComponentClient())

    const { ref, canvasUtil } = useCanvas();

    const [background, setBackground] = useState(undefined as HTMLImageElement | undefined)
    const [dimention, setDimention] = useState({ "height": 1000, "width": 1000 })

    const getMapFileFromStorage = async (storageName: string) => {
        const { data, error } = await supabase
            .storage
            .from('public/MapCollection')
            .download(storageName)

        console.log(data, error)

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
    }, []);


    useEffect(() => {
        if (background === undefined) { return }
        canvasUtil!.setup(background)
    }, [background])




    return <>
        <canvas ref={ref} width={dimention.width} height={dimention.height}/>
    </>
}


