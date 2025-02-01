import { get_image } from "@/classes/icons_utils"
import { representation } from "./representation_page"
// import { useState } from "react"
import { AdminOptions } from "./4creator/AdminComponents"
import { EditNameIconComponent } from "./4creator/EditNameIconComponent"
import { settingIconSize } from "@/classes/constants"
import { PhotoNotesComponent } from "./4creator/PhotoNotesComponent"

export function MemoryListed({ memoryList, showCreative, actingCanvasClick, setPreview, userStorageImages, userMaps, removeRep, setCurrentRepInfo, openIndex }: {
  memoryList: representation[]
  showCreative: boolean
  actingCanvasClick: (x: number, y: number) => void
  setPreview: React.Dispatch<React.SetStateAction<{
    item: representation
    file: File
  } | undefined>>
  userStorageImages: string[],
  userMaps: { id: string, name: string }[],
  removeRep: (id: string) => () => void,
  setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
  openIndex? : number
},
) {


  const linkOptions = memoryList.map((rep: representation) => {
    // console.log(rep.icon)
    if (!rep.hidden || showCreative) {
      return <div className="flex flex-col lg:border-b lg:last:border-b-0">
        <div className="flex items-center p-3" onClick={() => {
          actingCanvasClick(rep.x + rep.width / 2, rep.y + rep.height / 2)
        }}>
          <div className="hidden lg:block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"></div>
          <div className="bg-gray-100 border-gray-400 shadow-md  rounded-full p-2 mx-2 flex items-center justify-center">
            <img src={get_image(rep.icon)} alt='settings' height={settingIconSize} width={settingIconSize} className="rounded-full max-w-none" />
          </div>
          <div className="hidden lg:block text-center">{rep.visible_name}</div>
        </div>
        {(showCreative && (rep.order === openIndex)) && <div>
          <EditNameIconComponent id={rep.id} name={rep.visible_name} icon={rep.icon} setCurrentRepInfo={setCurrentRepInfo} />
          <PhotoNotesComponent item={rep} setCurrentRepInfo={setCurrentRepInfo} setPreview={setPreview} />
          <AdminOptions item={rep} userStorageImages={userStorageImages} userMaps={userMaps} removeRep={removeRep} currentRepInfo={memoryList} setCurrentRepInfo={setCurrentRepInfo} />
        </div>}
      </div>
    }
  })

  return (
    <div className=" flex lg:flex-col">
      {linkOptions}
    </div>
  )
}

