import { get_image } from "@/classes/icons_utils"
import { representation } from "./representation_page"

const settingIconSize = 40

export function MemoryListed({ memoryList, showCreative }: { memoryList: representation[], showCreative: boolean }) {

  const linkOptions = memoryList.map((rep: representation) => {
    console.log(rep.icon)
    if (!rep.hidden || showCreative) {
      return <div className="flex items-center space-x-3 p-3 border-b last:border-b-0">
        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"></div>
        <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
          <img src={get_image(rep.icon)} alt='settings' height={settingIconSize} width={settingIconSize} className="rounded-full" />
        </div>
        <div className="text-center">{rep.visible_name}</div>
      </div>
    }
  })

  return (

    <div className={" bg-slate-400 "}>
      {linkOptions}
    </div>
  )
}