import { get_image } from "@/classes/icons_utils"
import { representation } from "./representation_page"
import { useState } from "react"

const settingIconSize = 40

export function MemoryListed({ memoryList, showCreative, actingCanvasClick, setPreview }: {
  memoryList: representation[],
  showCreative: boolean,
  actingCanvasClick: (x: number, y: number) => void,
  setPreview: React.Dispatch<React.SetStateAction<{
    item: representation;
    file: File;
  } | undefined>>
},
) {

  const [openedIndex, setOpenedIndex] = useState(undefined as number | undefined);

  const onClick = (index: number) => {
    if (index === openedIndex) {
      setOpenedIndex(undefined)
    } else {
      setOpenedIndex(index)
    }
  }


  const linkOptions = memoryList.map((rep: representation, index: number) => {
    console.log(rep.icon)
    if (!rep.hidden || showCreative) {
      return <div className=" border-b last:border-b-0">
        <div className="flex items-center space-x-3 p-3" onClick={() => {
                    onClick(index)
                    actingCanvasClick(rep.x + rep.width / 2, rep.y + rep.height / 2)}}>
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"></div>
          <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
            <img src={get_image(rep.icon)} alt='settings' height={settingIconSize} width={settingIconSize} className="rounded-full" />
          </div>
          <div className="text-center">{rep.visible_name}</div>
        </div>
        {showCreative && (index === openedIndex) ? <div>
          <div> Snapshot</div>
          <input type="file" accept="image/*" id={`image_input_${rep.id}`} className="w-full min-h-36 border-2 border-red-300"
            onChange={(event) => {
              console.log(`changing preview file to ${event.target.files![0].name}for ${rep} to `)
              setPreview({ item: rep, file: event.target.files![0] })
            }}
          />
        </div>
          : <></>}
      </div>
    }
  })

  return (
    <div className={" bg-slate-400 "}>
      {linkOptions}
    </div>
  )
}

