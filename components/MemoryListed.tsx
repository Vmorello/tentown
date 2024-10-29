import { representation } from "./representation_page"

export function MemoryListed({memoryList, showCreative}:{memoryList:representation[], showCreative:boolean}){

    const linkOptions = memoryList.map((rep: representation) => {
        console.log(rep.icon)
        if (!rep.hidden || showCreative) {
          return <>
            <div>{rep.visible_name}</div>
            <div>{rep.data}</div>
          </>
        }
      })

    return(

        <div className={"fixed left-10 opacity-75 bg-slate-400 "}>
            {linkOptions}
        </div>
    )
}