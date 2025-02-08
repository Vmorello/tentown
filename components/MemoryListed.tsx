import { get_image } from "@/utils/icons_utils"
import { representation } from "./representation_page"
import { CreatorEditPanel } from "./4creator/creatorEditPanel"
import { settingIconSize } from "@/utils/constants"

export function MemoryListed({ memoryList, showCreative, actingCanvasClick, setPreview, userMaps, removeRep, setCurrentRepInfo, openIndex }: {
  memoryList: representation[]
  showCreative: boolean
  actingCanvasClick: (x: number, y: number) => void
  setPreview: React.Dispatch<React.SetStateAction<{
    item: representation
    file: File
  } | undefined>>
  userMaps: { id: string, name: string }[],
  removeRep: (id: string) => () => void,
  setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
  openIndex?: number
},
) {


  const linkOptions = memoryList.map((rep: representation) => {
    // console.log(rep.icon)
    if (!rep.hidden || showCreative) {
      return <div className="flex flex-col lg:border-b lg:last:border-b-0">
        <div className="flex items-center p-1.5 lg:p-3" onClick={() => {
          actingCanvasClick(rep.x + rep.width / 2, rep.y + rep.height / 2)
        }}>
          <div className="hidden lg:block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800" />
          <div className="bg-gray-100 border-gray-400 shadow-md rounded-full p-2 lg:mx-2 flex items-center justify-center">
            <img src={get_image(rep.icon)} alt='settings' height={settingIconSize} width={settingIconSize} className="rounded-full max-w-none" />
          </div>
          <div className="hidden lg:block text-center">{rep.visible_name}</div>
        </div>
        {(showCreative && (rep.order === openIndex)) && <div className="hidden lg:block">
          <CreatorEditPanel rep={rep} setCurrentRepInfo={setCurrentRepInfo} currentRepInfo={memoryList}
            setPreview={setPreview} removeRep={removeRep} linkableMaps={userMaps} />
        </div>}
      </div>
    }
  })

  return (
    <div className=" flex flex-col">
      {linkOptions}
    </div>
  )
}

