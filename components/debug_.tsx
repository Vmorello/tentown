export function Debug(props:{info:string}){
    return(

        <div className={"fixed bottom-10 right-10 opacity-75 bg-slate-500"}>
                        <label>current page ID: </label>
                        <label id={"info"}>{props.info}</label>
        </div>
    )
}