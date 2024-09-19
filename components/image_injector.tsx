"use client"

import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import Aligner from '@/components/wrappers/aligner'
import useCanvas from './canvas/hook'

interface image_type  {
    preloadedImage?: HTMLImageElement
}

export default function ImageImporter({preloadedImage}: image_type) {

    const { ref, canvasUtil } = useCanvas()

    const [supabase] = useState(createClientComponentClient())

    const [image, setImage] = useState(preloadedImage)

    const [dimention, setDimention] = useState({ "height": 0, "width": 0 })
    const [dataSize, setDataSize] = useState(0)
    const [fileName, setFileName] = useState("")

    const [saveStatus, setSaveStatus] = useState(false)



    useEffect(() => {
        if (image === undefined) { return }
        canvasUtil!.setup(image, "icon_frame")
    }, [image])


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log("changing the input file")

        const inputFileObject = document.getElementById(`image_input`) as HTMLInputElement;
        if (inputFileObject.files === null) {
            return
        }

        setSaveStatus(false)
        setDataSize(inputFileObject.files[0].size)

        const imageURL = URL.createObjectURL(inputFileObject.files[0])

        const tempImage = new Image();
        tempImage.addEventListener("load", () => {
            setImage(tempImage)
            setFileName(inputFileObject.files![0].name.split(".")[0])
            setDimention({ "height": tempImage.naturalHeight, "width": tempImage.naturalWidth })

            URL.revokeObjectURL(imageURL)
        })
        tempImage.src = imageURL

        // console.log(inputFile)

        // console.log("changed...")

    }

    const onCanvasPress = (event: React.MouseEvent<HTMLCanvasElement>) => {
        console.log(`clicked image at ${event.nativeEvent.offsetX}, ${event.nativeEvent.offsetY} & on page ${event.pageX}, ${event.pageY}`)
      }
    


    const saveButt = async () => {

        const { data: { user } } = await supabase.auth.getUser()
        // console.log(ref.current!.toDataURL())
        // console.log(image)
        console.log("will try to save it")
        const { data, error } = await supabase
            .storage
            .from('MapCollection')
            .upload(`${user!.id}/${fileName}`, ref.current!.toDataURL("image/png"), {
                upsert: true,
                contentType:"image/png"
            })
         console.log({ data, error })

         if(data){setSaveStatus(true)}



    }


    return (<div className="text-foreground">
        <Aligner canvasWidth={dimention.width}>
            <input type="file" id={`image_input`} accept="image/*" onChange={onChange} />
            {image ?
                <div>
                    <button onClick={saveButt}>Save Image </button>
                    {saveStatus ? "✅":"❌"}
                    <div>Original File Info -  w: {dimention.width} - h: {dimention.height} - size: {dataSize / 1000} kilobytes</div>
                </div>
                : <div>Add an image using the Imput above!</div>}
            <canvas ref={ref} onClick={onCanvasPress}
                width={dimention.width} height={dimention.height} className="border-dotted border-2 border-stone-400" />
        </Aligner>
    </div>
    )
}