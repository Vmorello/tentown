import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import { DisplayImageCanvas } from "./canvas/DisplayImage"
import { representation } from "./representation_page"

export function PhotoOverlay({ item, zIndex, closeFunc,  photoIndex, setFocusedIndex, previewFile, savePreviewButt, canvasClassName }: {
    item: representation,
    zIndex:number
    closeFunc: () => void,
    canvasClassName?: string,

    photoIndex?: number,
    setFocusedIndex?: React.Dispatch<React.SetStateAction<number>>,
    
    previewFile?: File
    savePreviewButt?:() => void
}) {

    useGSAP(() => {
        gsap.fromTo(`.movingPhoto`, { x: 1000, y: 1000, rotate: -33 },
            { x: 0, y: 0, rotate: 3, duration: Math.random() + 1 })
    }, [item])


    if (setFocusedIndex) {

        return <div className="movingPhoto absolute bg-white p-4 pb-16 shadow-lg rounded-lg  text-gray-600"
            style={{
                top: `${-136 - (10 * photoIndex!)}px`,
                left: `${-16 + (150 * photoIndex!)}px`,
                zIndex: zIndex
            }}
            onClick={() => {
                setFocusedIndex(currentIndex => {
                    if (currentIndex === photoIndex) {
                        return currentIndex + 1 == item.image_storage!.length ? 0 : currentIndex + 1
                    }
                    return photoIndex!
                })
            }}>


            <div className={"text-right"} ><button onClick={closeFunc}>Close - X</button></div>
            <DisplayImageCanvas storagePath={item.image_storage![photoIndex!]} size={"mid"} />
            <div className="absolute py-4 left-0 right-0 text-center text-sm font-semibold">
                {item.data[photoIndex!]}
            </div>
        </div>
    }

    if(previewFile){
        return  <div className="movingPhoto absolute bg-white p-4 pb-16 shadow-lg rounded-lg text-red-900"
        style={{
            top: `${item.y}px`,
            left: `${item.x}px`,
            zIndex: zIndex
        }}>

        <div >Preview, Save below</div>
        <div className={"text-right"} ><button onClick={closeFunc}>Close - X</button></div>
        <DisplayImageCanvas previewfile={previewFile} size={"mid"} className={canvasClassName}/>
        <div className=" py-4 text-sm text-gray-600 font-semibold">
            {item.data[0]}
        </div>
        <button onClick={()=>{savePreviewButt!()}}>Add photo to Memory</button>
    </div>

    }
}