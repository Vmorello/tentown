"use client"

import { useState, useEffect } from 'react';

// import {BaseCanvas} from "@/components/canvas/base"
import Aligner from '@/components/wrappers/aligner';
import useCanvas from './canvas/hook';

type image_type = {}
 
export default function ImageImporter({}:image_type) {

    const { ref, canvasUtil } = useCanvas();

    const [image, setImage] = useState(undefined as HTMLImageElement |undefined)
    
    const [dimention, setDimention] = useState({"height":0,"width":0})
    const [dataSize,setDataSize] = useState(0)

    useEffect(() => {
        if ( image == undefined) { return } 

            canvasUtil!.setup(image)
      })


    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log("changing the input file")

        const inputFileObject = document.getElementById(`image_input`) as HTMLInputElement;
        if (inputFileObject.files === null) {
          return
        }

        setDataSize(inputFileObject.files[0].size)
        
        const imageURL = URL.createObjectURL(inputFileObject.files[0])
        const tempImage = new Image();
        tempImage.addEventListener("load", () => {
            setImage(tempImage)
            setDimention({"height":tempImage.naturalHeight,"width":tempImage.naturalWidth})

            URL.revokeObjectURL(imageURL)
        })
        tempImage.src = imageURL
          
        // console.log(inputFile)

        console.log("changed...")    
  
    }

    const saveButt = () => {
        console.log("will try to save it")
        console.log(canvasUtil?.saveAsBlob())
    }

    return (<div className="text-foreground">
        <Aligner canvasWidth={dimention.width}>
            <input  type="file" id={`image_input`} accept="image/*" onChange={onChange}/>
            {image ? 
                    <div>
                        <button onClick={saveButt}>Save Image </button>
                        <div>Original File Info -  w: {dimention.width} - h: {dimention.height} - size: {dataSize/1000} kilobytes</div>
                    </div>
            :<div>Add an image using the Imput above!</div>}
            <canvas ref={ref} 
                        width={dimention.width} height={dimention.height} className="border-dotted border-2 border-stone-400" />
         </Aligner> 
        </div>
    )
 }