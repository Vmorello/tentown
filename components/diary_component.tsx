'use client'

import React from "react"
import { useRouter } from 'next/navigation'
import Image from 'next/image';

import { representation } from "./representation_page"
import { DisplayImageCanvas } from "./canvas/DisplayImage";

interface dairyType {
  diaryInfo: { x: number, y: number, info_on_location: Array<representation> },
  updateButt: () => void,
  currentRepInfo: Array<representation>,
  setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>,
  removeRep: (id: string) => () => void
  userMaps: { id: any; name: any; }[]
  userStorageImages: string[]
  resetDiary: () => void
  showCreative: boolean
}
interface repChangeType {
  x: (infoCopy: representation[], listIndex: number, value: any,) => void,
  y: (infoCopy: representation[], listIndex: number, value: any,) => void,
  height: (infoCopy: representation[], listIndex: number, value: any,) => void,
  width: (infoCopy: representation[], listIndex: number, value: any,) => void,
  title: (infoCopy: representation[], listIndex: number, value: any) => void,
  size: (infoCopy: representation[], listIndex: number, value: any) => void,
  visibility: (infoCopy: representation[], listIndex: number, value: any) => void,
}
interface repButtChangeType {
  newText: (infoCopy: representation[], listIndex: number) => void,
  linkAdded: (infoCopy: representation[], listIndex: number) => void,
  photoAdded: (infoCopy: representation[], listIndex: number) => void,
}

export function Diary({ diaryInfo, currentRepInfo, setCurrentRepInfo, userStorageImages,
  removeRep, userMaps, updateButt, resetDiary, showCreative, }: dairyType) {


  const router = useRouter()

  const mapTranfer = (link: string) => () => {
    updateButt()
    router.push(`/${link}/map`)
  }

  const setRepInfo: repChangeType = {
    x: (infoCopy, listIndex, value) => { infoCopy[listIndex].x = Number(value) },
    y: (infoCopy, listIndex, value) => { infoCopy[listIndex].y = Number(value) },
    title: (infoCopy, listIndex, value) => { infoCopy[listIndex].visible_name = value },
    height: (infoCopy, listIndex, value) => { infoCopy[listIndex].height = Number(value) },
    width: (infoCopy, listIndex, value) => { infoCopy[listIndex].width = Number(value) },
    size: (infoCopy, listIndex, value) => { infoCopy[listIndex].width = Number(value); infoCopy[listIndex].height = Number(value) },
    visibility: (infoCopy, listIndex) => { infoCopy[listIndex].hidden = !(infoCopy[listIndex].hidden) },
  }

  const inputEleRepChange = (infofunc: (infoCopy: representation[], listIndex: number, value?: any,) => void,
    repId: string) => ((event: React.ChangeEvent<HTMLInputElement>) => {
      const infoCopy = currentRepInfo.slice()
      const listIndex = infoCopy.findIndex(indexOf => repId === indexOf.id)

      infofunc(infoCopy, listIndex, event.target.value)

      setCurrentRepInfo(infoCopy)
    })


  const buttActions: repButtChangeType = {
    newText: (infoCopy, listIndex) => { infoCopy[listIndex].data.push("write here") },
    linkAdded: (infoCopy, listIndex) => { infoCopy[listIndex].link = (document.getElementById(`dairyLinkSelect`) as HTMLInputElement).value; },
    photoAdded: (infoCopy, listIndex) => { infoCopy[listIndex].image_storage = (document.getElementById(`photoSelect`) as HTMLInputElement).value; },
  }

  const buttEleRepChange = (infofunc: (infoCopy: representation[], listIndex: number, value?: any,) => void,
    repId: string) => (() => {
      const infoCopy = currentRepInfo.slice()
      const listIndex = infoCopy.findIndex(indexOf => repId === indexOf.id)

      infofunc(infoCopy, listIndex)

      setCurrentRepInfo(infoCopy)
    })


  const textChange = (repID: string, indexOfPara: number) => ((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const info_copy = currentRepInfo.slice()
    const listIndex = info_copy.findIndex(indexOf => repID === indexOf.id)
    info_copy[listIndex]["data"][indexOfPara] = event.target.value
    setCurrentRepInfo(info_copy)
  })


  if (diaryInfo.info_on_location.length == 0) {
    return <></>
  }

  const info_list = diaryInfo.info_on_location.map((item: representation) => {
    // console.log(item)
    return (
      <div key={`journalRep${item.id}`}>

        <input value={item.visible_name}
          onChange={inputEleRepChange(setRepInfo.title, item.id)}
          id={`journalRepTitle${item.id}`}
          className={"bg-transparent"} />

        {item.image_storage ? <div>
          <DisplayImageCanvas storagePath={item.image_storage} />
        </div> : <></>}

        <DataListofItem entries={item.data} repID={item.id} CatagoryOnChange={textChange} />

        {item.link ? <div>
          <TranferWithLink mapTranfer={mapTranfer(item.link!)} />
        </div> : <></>}

        {/* for the creator: */}
        {showCreative ? <>
          <div>
            <hr className={"h-2 bg-gray-500"} />
            <button onClick={buttEleRepChange(buttActions.newText, item.id)} >New Box to Write In</button>
          </div>

          {item.image_storage ? <></> : <>
            <hr className={"h-2 bg-gray-500"} />
            <AddPhoto userImages={userStorageImages} photoAdded={buttEleRepChange(buttActions.photoAdded, item.id)} />
          </>}



          <hr className={"h-2 bg-gray-500"} />
          <label>
            x: <input type="number" value={item.x} className={"w-12"} onChange={inputEleRepChange(setRepInfo.x, item.id)} />
          </label>
          <label className="px-4">
            y: <input type="number" value={item.y} className={"w-12"} onChange={inputEleRepChange(setRepInfo.y, item.id)} />
          </label>


          <hr className={"h-2 bg-gray-500"} />
          <label>
            Size - ~WIP~: <input type="number" value={item.width} className={"w-12"} onChange={inputEleRepChange(setRepInfo.size, item.id)} />
          </label>

          {item.link ? <></> : <>
            <hr className={"h-2 bg-gray-500"} />
            <AddLink userMaps={userMaps} linkedAdded={buttEleRepChange(buttActions.linkAdded, item.id)} />
          </>}


          <hr className={"h-2 bg-gray-500"} />
          <label>
            Hidden? <input type="checkbox" checked={item.hidden} onChange={inputEleRepChange(setRepInfo.visibility, item.id)} />
          </label>


          <hr className={"h-2 bg-gray-500"} />
          <button onClick={removeRep(item.id)}>❌Delete❌</button>
        </> : <></>}
      </div>
    )
  })


  return (<div style={{
    position: "absolute",
    left: `${diaryInfo.x}px`,
    top: `${diaryInfo.y}px`,
  }}>
    <div className="bg-fuchsia-400">
      <div className={"text-right"} ><button onClick={resetDiary}>Close - X</button></div>
      {info_list}
    </div>
  </div>
  )
}




function DataListofItem(props: {
  entries: Array<string>, repID: string,
  CatagoryOnChange: (repID: string, indexOfPara: number) => (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
  return <>
    {props.entries.map((entry, index: number) => {
      return <div key={`rep${props.repID}_div${index}`}>
        <textarea cols={35} rows={5} value={entry}
          onChange={props.CatagoryOnChange(props.repID, index)} />
      </div>
    })}
  </>

}

function TranferWithLink(props: { mapTranfer: () => void }) {
  return (<button onClick={props.mapTranfer}>
    Jump Into Icon 🌐
  </button>)
}

function AddLink(props: {
  userMaps: { id: string; name: string; }[],
  linkedAdded: () => void,
}) {
  const linkOptions = props.userMaps.map((json: { id: string; name: string; }) => {
    return <option value={json.id} key={json.id}>{json.name}</option>
  });

  return <>
    <button onClick={props.linkedAdded}>♻️Add link♻️</button>
    <div>
      {"to: "}
      <select id="dairyLinkSelect">
        {linkOptions}
      </select>
    </div>
  </>
}

function AddPhoto(props: {
  userImages: string[],
  photoAdded: () => void,
}) {
  const linkOptions = props.userImages.map((storageNames: string) => {
    return <option value={storageNames} key={storageNames}>{storageNames.split('/')[1]}</option>
  });

  return <>
    <button onClick={props.photoAdded}>📷 Add Photo 📷</button>
    <div>
      <select id="photoSelect">
        {linkOptions}
      </select>
    </div>
  </>
}





