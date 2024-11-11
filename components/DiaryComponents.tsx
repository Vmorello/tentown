'use client'

import React, { useEffect, useState } from "react"
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
  repId: string
}


export function Diary({ diaryInfo, currentRepInfo, setCurrentRepInfo, userStorageImages,
  removeRep, userMaps, updateButt, resetDiary, showCreative, }: dairyType) {

  const router = useRouter()

  //const [photoEnter] = useState(gsap.from("#movingPhoto", { x: 1000, y: 1000, rotate: -33, duration: .7 }))

  useEffect(() => {
    // console.log("Use Effect for diary images")
    if (diaryInfo.infoOnLocation[0] && diaryInfo.infoOnLocation[0].image_storage) {
      // console.log("applying slide")
      for (let i = 0; i < diaryInfo.infoOnLocation[0].image_storage.length; i++) {
        gsap.from(`#movingPhoto${i}`, { x: 1000, y: 1000, rotate: -33, duration: Math.random() + 1 })
      }
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
      <DisplayPieces item={item} mapTranfer={mapTranfer} resetDiary={resetDiary} />

      {/* for the creator: */}
      {showCreative ? <AdminOptions item={item} userStorageImages={userStorageImages}
        userMaps={userMaps} removeRep={removeRep} currentRepInfo={currentRepInfo} setCurrentRepInfo={setCurrentRepInfo} />
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


function DisplayPieces({ item, mapTranfer, resetDiary }: {
  item: representation
  mapTranfer: (id: string) => () => void
  resetDiary: () => void
}) {

  const [focusedIndex, setFocusedIndex] = useState(0)

  return <>{item.image_storage ? <>
    {item.image_storage.map((image, index) => {
      // the images that can slide in
      return <div id={`movingPhoto${index}`} className="absolute bg-white p-4 pb-16 -left-4 -top-24 shadow-lg rounded-lg rotate-3"
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
        <DisplayImageCanvas storagePath={image} size={"mid"} />
        <div className="absolute py-4 left-0 right-0 text-center text-sm text-gray-600 font-semibold">
          {item.data[index]}
        </div>
      </div>
    })}
  </> : <></>}

    <div className="relative" style={{ zIndex: 21 }}>
      {/* had to seperate these 2 as the Not path would take some of the  */}
      {!item.image_storage || item.image_storage.length === 0 ? <div className="relative max-w-56 bg-fuchsia-500 text-center py-1">
        {item.visible_name}
        {item.data[0] ? <div className=" font-semibold">{item.data[0]}</div> : <></>}
      </div> : <></>}

      {item.link ? <div className="relative max-w-56 bg-fuchsia-500 text-center py-1">
        <TranferWithLink mapTranfer={mapTranfer(item.link!)} />
      </div> : <></>}
    </div>
  </>

}

