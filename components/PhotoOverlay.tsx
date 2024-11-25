import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import { DisplayImageCanvas } from "./canvas/DisplayImage"
import { representation } from "./representation_page"

export function PhotoOverlay({ item, index, focusedIndex, setFocusedIndex, resetDiary }: { 
    item:representation, 
    index: number,
    focusedIndex:number, 
    setFocusedIndex :React.Dispatch<React.SetStateAction<number>>,
    resetDiary: () => void
 }) {

    useGSAP(() => {
          gsap.fromTo(`.movingPhoto`, { x: 1000, y: 1000, rotate: -33 }, 
                                        { x: 0, y: 0, rotate: 3,  duration: Math.random() + 1})
      }, [item])
    

    return <div className="movingPhoto absolute bg-white p-4 pb-16 shadow-lg rounded-lg"
        style={{
            top: `${-136 - (10 * index)}px`,
            left: `${-16 + (150 * index)}px`,
            zIndex: focusedIndex === index ? 9 : 8 - index
        }}
        onClick={() => {
            setFocusedIndex(currentIndex => {
                if (currentIndex === index) {
                    return currentIndex + 1 == item.image_storage!.length ? 0 : currentIndex + 1
                }
                return index
            })
        }}>

        <div className={"text-right"} ><button onClick={resetDiary}>Close - X</button></div>
        <DisplayImageCanvas storagePath={item.image_storage![index]} size={"mid"} />
        <div className="absolute py-4 left-0 right-0 text-center text-sm text-gray-600 font-semibold">
            {item.data[index]}
        </div>
    </div>
}