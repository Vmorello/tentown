import { useEffect, useState } from "react";
import { createClient } from '@/utils/supabase/client';
import useCanvas from "./hook";
import { v4 as uuidv4 } from 'uuid';
import { preview, representation } from '@/utils/types';
import { saveCanvasImage } from "@/utils/supabase/utils";
import { setDimentionWithSize } from "@/utils/canvas_utils";

interface ImageDisplayType {
    size: "sm" | "mid"
    setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
    setPreview: React.Dispatch<React.SetStateAction<preview | undefined>>
    preview: preview | undefined
}

const longSide = {
    sm: 520,
    mid: 690,
};



export function SavingFileImage({ size, setCurrentRepInfo, preview, setPreview }: ImageDisplayType) {

    const [supabase] = useState(createClient())

    const { ref, canvasUtil } = useCanvas();

    const [background, setBackground] = useState(undefined as HTMLImageElement | undefined)
    const [dimention, setDimention] = useState({ "height": 200, "width": 200 })



    useEffect(() => {
        if (preview?.file) {
            updateBackgroundAndSize(preview.file)
        }
    }, [preview]);


    useEffect(() => {
        console.log("use effect on hidden resizingCanvas")
        console.log(background)
        if (background === undefined) { return }
        canvasUtil!.setBackground(background, dimention.width, dimention.height)
        console.log("set image on resizingCanvas")
        pushPreview()
    }, [background])


    const updateBackgroundAndSize = (backgroundImage: Blob) => {
        const imageURL = URL.createObjectURL(backgroundImage)
        // console.log(imageURL)
        const tempImage = new Image();

        tempImage.addEventListener("load", () => {
            console.log(`loading image${tempImage}`)

            setBackground(tempImage)
            setDimentionWithSize(tempImage, setDimention, longSide.mid)

            URL.revokeObjectURL(imageURL)
        })
        tempImage.src = imageURL
    }


    const pushPreview = async () => {

        console.log("Started saving resizingCanvas")

        const { data: { user } } = await supabase.auth.getUser()

        const imagePath = `${user!.id}/${uuidv4()}`

        await saveCanvasImage(supabase, ref.current!, imagePath)

        const newItem = preview!.item
        newItem.image_storage.push(imagePath)

        setCurrentRepInfo((repInfo) => {
            const info_copy = repInfo.slice()
            const listIndex = info_copy.findIndex(indexOf => preview!.item.id === indexOf.id)

            info_copy[listIndex] = newItem

            return info_copy
        })


        // console.log(user)
        const { data: iconSave, error: iconError } = await supabase
            .from('icons')
            .upsert(newItem)
            .eq('id', preview!.item.id)

        console.log("finsihed saving resizingCanvas")

        setPreview(undefined)
        // ----- save

    }


    return <canvas ref={ref} width={dimention.width} height={dimention.height} />

}


