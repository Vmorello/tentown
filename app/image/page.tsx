"use client"

import { LoadedFileVisibleItem } from '@/classes/drawableRep';
import { useState } from 'react';

import {BaseCanvas} from "@/components/canvas/base"

export default  function Index() {

    const [image, setImage] = useState(undefined as HTMLImageElement |undefined)
    const [dimention, setDimention] = useState({"height":0,"width":0})
    const [dataSize,setDataSize] = useState(0)

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

    const canvasOnclickSwitch = (xCanvas: number, yCanvas: number, xPage: number, yPage: number,) => {}

    // if (!image) return null 

    return (<div className="text-foreground">

        
        <input type="file" id={`image_input`} accept="image/*" onChange={onChange}/>


        {image ? <>
        <div>
            <div>Original File Info -  w: {dimention.width} - h: {dimention.height} - size: {dataSize/1000} kilobytes</div>
        </div>
           
        <BaseCanvas background={image} height={dimention.height} width={dimention.width} 
        onPress={canvasOnclickSwitch} />
        
        </> 
            : <div>Add an image using the Imput above!</div>}
        
        
        </div>
    )
}