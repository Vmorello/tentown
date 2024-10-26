"use client"

import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import Aligner from '@/components/wrappers/aligner'
import useCanvas from './canvas/hook'

interface imageFile {
    fileName: string
    image?: HTMLImageElement
    height: number
    width: number
    saved?: true
}

export default function ImageImporter() {

    const { ref, canvasUtil } = useCanvas()

    const [supabase] = useState(createClientComponentClient())

    const [imageFiles, setImageFiles] = useState([] as imageFile[])
    const [currentIndexShown, setIndexShown] = useState(0)


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log("changing the input file")

        const inputFileObject = document.getElementById(`image_input`) as HTMLInputElement;
        if (inputFileObject.files === null) {
            return
        }
        setIndexShown(0)

        let uploadedImages = [] as imageFile[]
        console.log(inputFileObject.files)
        for (let counter = 0; counter < inputFileObject.files.length; counter++) {
            uploadedImages.push({ fileName: inputFileObject.files[counter].name.split(".")[0], height: 0, width: 0 })

            const imageURL = URL.createObjectURL(inputFileObject.files[counter])
            const tempImage = new Image();
            tempImage.addEventListener("load", () => {
                setImageFiles(files => {
                    const fileCopy = files.slice()
                    fileCopy[counter] = { fileName: files[counter].fileName, image: tempImage, height: tempImage.naturalHeight, width: tempImage.naturalWidth}
                    if (counter == 0) {
                        setIndexShown(0)
                        canvasUtil?.setBackground(tempImage,tempImage.naturalWidth,tempImage.naturalHeight,)
                    }
                    return fileCopy
                })
                URL.revokeObjectURL(imageURL)
            })
            tempImage.src = imageURL

        }
        setImageFiles(uploadedImages)


        // console.log(inputFile)

        // console.log("changed...")

    }

    // const onCanvasPress = (event: React.MouseEvent<HTMLCanvasElement>) => {
    //     console.log(`clicked image at ${event.nativeEvent.offsetX}, ${event.nativeEvent.offsetY} & on page ${event.pageX}, ${event.pageY}`)
    //   }


    const changeView = (index: number) => () => {
        setIndexShown(index)
        canvasUtil?.setBackground(imageFiles[index].image, imageFiles[index].width,imageFiles[index].height)
    }

    const changeSize = (changeInRatio: number) => () => {


        const newWidth= imageFiles[currentIndexShown].width * changeInRatio
        const newHeight = imageFiles[currentIndexShown].height * changeInRatio

        setImageFiles(files => {
            const fileCopy = files.slice()
            fileCopy[currentIndexShown].width = newWidth
            fileCopy[currentIndexShown].height = newHeight
            return fileCopy
        })
        canvasUtil?.setBackground(imageFiles[currentIndexShown].image, newWidth, newHeight)
    }

    const fileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageFiles(files => {
            const fileCopy = files.slice()
            fileCopy[currentIndexShown].fileName = event.target.value
            return fileCopy
        })

       
    }


    const saveButt = (counter: number) => async () => {

        const { data: { user } } = await supabase.auth.getUser()
        // console.log(ref.current!.toDataURL())
        // console.log(image)
        const fileName = imageFiles[currentIndexShown].fileName
        if (!fileName){
            console.log(`filename input seems empty ${fileName}`)
            return
        }

        console.log(`will try to save it as ${fileName}`)

        const { data, error } = await supabase
            .storage
            .from('MapCollection')
            .upload(`${user!.id}/${fileName}`, ref.current!.toDataURL("image/jpeg", .7), {
                upsert: true,
                contentType: "image/jpeg"
            })
        console.log({ data, error })

        if (data) {
            setImageFiles(files => {
                const fileCopy = files.slice()
                fileCopy[counter].saved = true
                return fileCopy
            })
        }
    }

  


    const linkOptions = imageFiles.map((image: imageFile, index) => {
        return <div className='p-3' onClick={changeView(index)}>
            Click on this line to View:  {image.fileName} w {image.width} x h {image.height}
        </div>
    })

    const widthConditoned = imageFiles[currentIndexShown] ? imageFiles[currentIndexShown].width  : 0
    const heightConditoned = imageFiles[currentIndexShown] ? imageFiles[currentIndexShown].height : 0


    return (<div className="text-foreground">
        <input type="file" id={`image_input`} accept="image/*" onChange={onChange} multiple={true} />
        {imageFiles.length > 0 ? <div>
            {linkOptions}
            <div>
                <button className='p-3' onClick={changeSize(.80)}> make it smaller </button>
            </div>
            <div>
                <button className='p-3' onClick={saveButt(currentIndexShown)}>Save Image </button>
                {imageFiles[currentIndexShown].saved ? "✅" : "❌"} 
                as <input value={imageFiles[currentIndexShown].fileName} className="text-background" onChange={fileNameChange}/> 
            </div>
        </div>
            : <div>Add images using the Input above! </div>}

        <Aligner canvasWidth={widthConditoned}>
            <canvas ref={ref} //onClick={onCanvasPress}
                width={widthConditoned} height={heightConditoned} className="border-dotted border-2 border-stone-400" />
        </Aligner>
    </div>
    )
}