import { get_image } from "@/classes/icons_utils"
import { representation } from "./representation_page"
import { useState } from "react"

const settingIconSize = 40

export function MemoryListed({ memoryList, showCreative, actingCanvasClick }: { memoryList: representation[], showCreative: boolean, actingCanvasClick: (x: number, y: number) => void }) {

  const linkOptions = memoryList.map((rep: representation) => {
    console.log(rep.icon)
    if (!rep.hidden || showCreative) {
      return <MemoryTab rep={rep} showCreative={showCreative} actingCanvasClick={actingCanvasClick} />
    }
  })

  return (
    <div className={" bg-slate-400 "}>
      {linkOptions}
    </div>
  )
}


function MemoryTab({ rep, showCreative, actingCanvasClick }: { rep: representation, showCreative: boolean, actingCanvasClick: (x: number, y: number) => void }) {

  const [opened, setOpened] = useState(false);

  const click = () => {
    setOpened(!opened)
    actingCanvasClick(rep.x + rep.width / 2, rep.y + rep.height / 2)
  }


  return <div className=" border-b last:border-b-0">
    <div className="flex items-center space-x-3 p-3" onClick={click}>
      <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"></div>
      <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
        <img src={get_image(rep.icon)} alt='settings' height={settingIconSize} width={settingIconSize} className="rounded-full" />
      </div>
      <div className="text-center">{rep.visible_name}</div>
    </div>
    {/* {showCreative && opened ? <div>
      <div> Snapshot</div>
      <input type="file" accept="image/*" id={`image_input_${rep.id}`} onChange={()=>""} className="w-full min-h-36 border-2 border-red-300"
      
      />
      
    </div>
     : <></>} */}
  </div>

}