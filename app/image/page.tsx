"use client"

import { FileVisibleItem } from '@/classes/drawableRep';
import Image from 'next/image';
import { useState } from 'react';

export default  function Index() {

    const [image, setImage] = useState(undefined as FileVisibleItem |undefined)
    const [dimentions, setDimentions] = useState({"height":0,"width":0})

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log("changing the input file")

        const inputFileObject = document.getElementById(`image_input`) as HTMLInputElement;
        if (inputFileObject.files === null) {
          return
        }

        const inputFile = new FileVisibleItem(inputFileObject.files[0])
  
        setImage(inputFile)
        console.log(inputFile)

        console.log("changed...")    
  
    }
    

    // if (!image) return null 

    return (<div className="text-foreground">

        
        <input type="file" id={`image_input`} accept="image/*" onChange={onChange}/>


        {image && image.pic ? <div>
            <Image
            src={image.pic.src}
            alt="I see that image, but you broke me!"

            height={300} // Set the desired height
            width={500} // Set the desired width
        />
        <div>Original File Info</div>
        {/* <div> w: {image.pic.width} h: {image.pic.height}  </div> */}
        <div> size: {image.dataSize/1000} kilobytes</div>
        
        </div> 
            : <div>Add an image using the Imput above!</div>}
        
        

        </div>
    )
}