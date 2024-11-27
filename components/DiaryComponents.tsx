'use client'

import React, {  useState } from "react"
import { useRouter } from 'next/navigation'


import { representation } from "./representation_page"
import { AdminOptions, TranferWithLink } from "./AdminDiaryComponents";
import { PhotoOverlay } from "./PhotoOverlay";

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
      <DisplayPieces item={item} mapTranfer={mapTranfer} resetDiary={resetDiary} />

      {/* creator: */}
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
      return <PhotoOverlay item={item} zIndex={focusedIndex === index ? 9 : 8 - index} photoIndex={index} setFocusedIndex={setFocusedIndex} closeFunc={resetDiary}/> 
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

