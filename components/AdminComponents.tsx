import { representation } from "./representation_page"
import { actionableType } from "./DiaryComponents"


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


export function AdminOptions({ item, userStorageImages, userMaps, removeRep, currentRepInfo, setCurrentRepInfo }: {
  item: representation,
  userStorageImages: string[],
  userMaps: { id: string, name: string }[],
  removeRep: (id: string) => () => void,
  currentRepInfo: representation[],
  setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
}) {



  const inputEleRepChange = (actionable: actionableType) =>
  ((event: React.ChangeEvent<HTMLInputElement>) => {
    const infoCopy = currentRepInfo.slice()
    const listIndex = infoCopy.findIndex(indexOf => actionable.repId === indexOf.id)

    actionable.setRepInfo(infoCopy, listIndex, event.target.value)

    setCurrentRepInfo(infoCopy)
  })


  const buttEleRepChange = (actionable: actionableType) =>
    () => {
      const infoCopy = currentRepInfo.slice()
      const listIndex = infoCopy.findIndex(indexOf => actionable.repId === indexOf.id)

      actionable.setRepInfo(infoCopy, listIndex)

      setCurrentRepInfo(infoCopy)
    }


  const textChange = (repID: string, indexOfPara: number) => ((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const info_copy = currentRepInfo.slice()
    const listIndex = info_copy.findIndex(indexOf => repID === indexOf.id)
    info_copy[listIndex]["data"][indexOfPara] = event.target.value
    setCurrentRepInfo(info_copy)
  })


  return <div key={`creatorRepOps${item.id}`} className="relative" style={{ zIndex: 10}}>
    <input value={item.visible_name}
      onChange={inputEleRepChange({ setRepInfo: setRepInfo.title, repId: item.id })}
      id={`journalRepTitle${item.id}`} />

    <div>
      <hr className={"h-2 bg-gray-500"} />
      <ListTextData entries={item.data} repID={item.id} CatagoryOnChange={textChange} />
      <button onClick={buttEleRepChange({ setRepInfo: buttActions.newText, repId: item.id })}>New Box to Write In</button>
    </div>

{/* 
    <hr className={"h-2 bg-gray-500"} />
    <AddPhoto userImages={userStorageImages} photoAdded={buttEleRepChange({ setRepInfo: buttActions.photoAdded, repId: item.id })} /> */}

    <hr className={"h-2 bg-gray-500"} />
    <label>
      x: <input type="number" value={item.x} className={"w-12"} onChange={inputEleRepChange({ setRepInfo: setRepInfo.x, repId: item.id })} />
    </label>
    <label className="px-4">
      y: <input type="number" value={item.y} className={"w-12"} onChange={inputEleRepChange({ setRepInfo: setRepInfo.y, repId: item.id })} />
    </label>
    <hr className={"h-2 bg-gray-500"} />
    <label>
      Size - ~WIP~: <input type="number" value={item.width} className={"w-12"} onChange={inputEleRepChange({ setRepInfo: setRepInfo.size, repId: item.id })} />
    </label>

    {item.link ? <></> : <>
      <hr className={"h-2 bg-gray-500"} />
      <AddLink userMaps={userMaps} linkedAdded={buttEleRepChange({ setRepInfo: buttActions.linkAdded, repId: item.id })} />
    </>}


    <hr className={"h-2 bg-gray-500"} />
    <label>
      Hidden? <input type="checkbox" checked={item.hidden} onChange={inputEleRepChange({ setRepInfo: setRepInfo.visibility, repId: item.id })} />
    </label>


    <hr className={"h-2 bg-gray-500"} />
    <button onClick={removeRep(item.id)}>❌Delete❌</button>
  </div>

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


const buttActions: repButtChangeType = {
  newText: (infoCopy, listIndex) => { infoCopy[listIndex].data.push("write here") },
  linkAdded: (infoCopy, listIndex) => { infoCopy[listIndex].link = (document.getElementById(`dairyLinkSelect`) as HTMLInputElement).value; },
  photoAdded: (infoCopy, listIndex) => {
    infoCopy[listIndex].image_storage ?
      infoCopy[listIndex].image_storage!.push((document.getElementById(`photoSelect`) as HTMLInputElement).value)
      : infoCopy[listIndex].image_storage = [(document.getElementById(`photoSelect`) as HTMLInputElement).value]
  },
}


export function ListTextData(props: {
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

export function TranferWithLink(props: { mapTranfer: () => void }) {
  return (<button onClick={props.mapTranfer}>
    🌐 Link to Page 🌐
  </button>)
}

export function AddLink(props: {
  userMaps: { id: string, name: string }[],
  linkedAdded: () => void,
}) {
  const linkOptions = props.userMaps.map((json: { id: string, name: string }) => {
    return <option value={json.id} key={json.id}>{json.name}</option>
  });

  return <>
    <button onClick={props.linkedAdded}>♻️Add link♻️</button>
    <div>
      to:
      <select id="dairyLinkSelect">
        {linkOptions}
      </select>
    </div>
  </>
}

// export function AddPhoto(props: {
//   userImages: string[],
//   photoAdded: () => void,
// }) {
//   const linkOptions = props.userImages.map((storageNames: string) => {
//     return <option value={storageNames} key={storageNames}>{storageNames.split('/')[1]}</option>
//   });

//   return <>
//     <button onClick={props.photoAdded}>📷 Add Photo 📷</button>
//     <div>
//       <select id="photoSelect">
//         {linkOptions}
//       </select>
//     </div>
//   </>
// }


