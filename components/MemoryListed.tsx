import { get_image } from "@/utils/icons_utils"
import { representation } from '@/utils/types';
import { CreatorEditPanel } from "./4creator/CreatorEditPanel"
import { settingIconSize } from "@/utils/constants"

export function MemoryListed({ memoryList, showCreative, openDiaryClick, userMaps, removeRep, setCurrentRepInfo, openIndex,setOpenIndex }: {
  memoryList: representation[]
  showCreative: boolean
  openDiaryClick: (reps: representation[], x: number, y: number) => void
  userMaps: { id: string, name: string }[],
  removeRep: (id: string) => () => void,
  setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
  openIndex?: number
  setOpenIndex: React.Dispatch<React.SetStateAction<number | undefined>>
},
) {


  const linkOptions = memoryList.map((rep: representation) => {
    // console.log(rep.icon)
    if (!rep.hidden || showCreative) {
      return <SingleMemory rep={rep} showCreative={showCreative} openDiaryClick={openDiaryClick} userMaps={userMaps}
        removeRep={removeRep} setCurrentRepInfo={setCurrentRepInfo} openIndex={openIndex} key={rep.id} setOpenIndex={setOpenIndex} />
    }
  })

  return (
    <div className=" flex flex-col">
      {linkOptions}
    </div>
  )
}


function SingleMemory({ rep, showCreative, openDiaryClick, userMaps, removeRep, setCurrentRepInfo, openIndex,setOpenIndex }: {
  rep: representation
  showCreative: boolean
  openDiaryClick: (reps: representation[], x: number, y: number) => void
  userMaps: { id: string, name: string }[],
  removeRep: (id: string) => () => void,
  setCurrentRepInfo: React.Dispatch<React.SetStateAction<representation[]>>
  openIndex?: number
  setOpenIndex: React.Dispatch<React.SetStateAction<number | undefined>>
},
) {



  return <div className="flex flex-col lg:border-b lg:last:border-b-0">
    <div className="flex items-center p-1.5 lg:p-3" onClick={() => {
      if (rep.order === openIndex) {
          setOpenIndex(undefined)
      }
      else{
        openDiaryClick([rep], rep.x + rep.width / 2, rep.y + rep.height / 2)
      }
    }}>
      <div className="hidden lg:block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800" />
      <div className="bg-gray-100 border-gray-400 shadow-md rounded-full p-2 lg:mx-2 flex items-center justify-center">
        <img src={get_image(rep.icon)} alt='settings' height={settingIconSize} width={settingIconSize} className="rounded-full max-w-none" />
      </div>
      <div className="hidden lg:block text-center">{rep.visible_name}</div>
    </div>
    {(showCreative && (rep.order === openIndex)) && <div className="hidden lg:block">
      <CreatorEditPanel rep={rep} setCurrentRepInfo={setCurrentRepInfo}
        removeRep={removeRep} linkableMaps={userMaps} />
    </div>}
  </div>
}
