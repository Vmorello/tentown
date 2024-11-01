'use client'

import React, { useEffect } from "react"
import { useRouter } from 'next/navigation'
import gsap from 'gsap';

import { representation } from "./representation_page"
import { DisplayImageCanvas } from "./canvas/DisplayImage";
import { AdminOptions, TranferWithLink } from "./AdminDiaryComponents";

interface dairyType {
  diaryInfo: { x: number, y: number, infoOnLocation: representation[] },
  updateButt: () => void,
  currentRepInfo: representation[],
  setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>,
  removeRep: (id: string) => () => void
  userMaps: { id: any; name: any; }[]
  userStorageImages: string[]
  resetDiary: () => void
  showCreative: boolean
}

export interface actionableType {
  setRepInfo: (infoCopy: representation[], listIndex: number, value?: any,) => void, 
  repId:string
}


export function Diary({ diaryInfo, currentRepInfo, setCurrentRepInfo, userStorageImages,
  removeRep, userMaps, updateButt, resetDiary, showCreative, }: dairyType) {

  const router = useRouter()

  //const [photoEnter] = useState(gsap.from("#movingPhoto", { x: 1000, y: 1000, rotate: -33, duration: .7 }))

  useEffect(() => {
    // console.log("Use Effect for diary images")
    if (diaryInfo.infoOnLocation[0] && diaryInfo.infoOnLocation[0].image_storage) {
      // console.log("applying slide")
      gsap.from("#movingPhoto", { x: 1000, y: 1000, rotate: -33, duration: .7 })
    }
  }, [diaryInfo.infoOnLocation[0]])


  const mapTranfer = (link: string) => () => {
    updateButt()
    router.push(`/${link}/map`)
  }

  if (diaryInfo.infoOnLocation.length == 0) {
    return <></>
  }

  const info_list = diaryInfo.infoOnLocation.map((item: representation) => {
    console.log(item)
    return (<>

      {/* this is the floating image(s) */}
      {item.image_storage ? <div id={`movingPhoto`} className="absolute bg-white p-4 pb-16 -left-4 -top-24 shadow-lg rounded-lg rotate-3">
        <div className={"text-right"} ><button onClick={resetDiary}>Close - X</button></div>
        <DisplayImageCanvas storagePath={item.image_storage[0]} />
        <div className="absolute py-4 left-0 right-0 text-center text-sm text-gray-600 font-semibold">
          {item.data[0]}
        </div>
      </div> : <></>}

      {/* had to seperate these 2 as the Not path would take some of the  */}
      {!item.image_storage ? <div className="relative max-w-56 bg-fuchsia-400 text-center py-1">
        {item.visible_name}
        {item.data[0] ? <div className=" font-semibold">{item.data[0]}</div> : <></>}
      </div> : <></>}

      {item.link ? <div className="relative max-w-56 bg-fuchsia-400 text-center py-1">
        <TranferWithLink mapTranfer={mapTranfer(item.link!)} />
      </div> : <></>}



      {/* for the creator: */}
      {showCreative ? <AdminOptions item={item}  userStorageImages= {userStorageImages}  
      userMaps={userMaps} removeRep={removeRep} currentRepInfo={currentRepInfo} setCurrentRepInfo={setCurrentRepInfo}/> 
      : <></>}

    </>)
  })


  return (<div className="absolute"
    style={{
      left: `${diaryInfo.x}px`,
      top: `${diaryInfo.y}px`,
    }}>
    {info_list}
  </div>
  )
}


