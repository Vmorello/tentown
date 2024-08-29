"use client"

export function Debug(props:{info:string}){

    return(

        <div className={"fixed bottom-10 right-10 opacity-75 bg-slate-400"}>
            <div> 
                <label>width: </label>
                <label id={"info"}>{props.info}</label>
            </div>
            <div> 
                <label>window width: </label>
                <label id={"info"}>{window.innerWidth}</label>
            </div>
                       
                       

        </div>
    )
}