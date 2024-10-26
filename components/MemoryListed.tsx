import { representation } from "./representation_page"

export function MemoryListed({memoryList}:{memoryList:representation[]}){



    return(

        <div className={"fixed  right-10 opacity-75 bg-slate-400"}>
            <div> 
                <label id={"info"}>{memoryList[0].visible_name}</label>
            </div>
        </div>
    )
}