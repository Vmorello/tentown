import React from 'react';

export function CardSelect(props: {mode:string, setMode:(selected: string) => void, 
    setCurrentItem:React.Dispatch<React.SetStateAction<string>>, 
    currentItem:string, pageRepList:string[],
    inputButt: () => void, exportButt:() => void ,
    backgroundButt:() => void,  }
    ){

    return ( <div style={{ position: "fixed",
                        bottom: "10px",
                        left: "5px",
                        backgroundColor: "rgba(156, 153, 153, 0.75)"}}>
        {/* <DemoCard demo={props.demoButt}/> */}
        <label>Pick an Action</label>
        <ModeSelectCard mode={props.mode} setMode={props.setMode} setCurrentItem={props.setCurrentItem} 
            currentItem={props.currentItem} pageRepList ={props.pageRepList}/>
        <label>Changing the Background</label>
        <BackgroundCard backgroundButt={props.backgroundButt}/>
        <label>Save/load</label>
        <SaveCard inputButt={props.inputButt} exportButt={props.exportButt}/>
    </div>
    )
}

function DemoCard(props:{demo:()=>void}){
    return <div>
        <button onClick={props.demo}>Try a Demo</button>
    </div>
}

function BackgroundCard(props:{backgroundButt:()=>void}){
    return <div>
            <input type={"file"} id={`backgroundLoadInsert`} accept={"image/*"}></input>
            <button onClick={props.backgroundButt}>Change BG</button>
    </div>
}

function ModeSelectCard(props:{mode:string,setMode:(selected: string) => void,
        setCurrentItem:React.Dispatch<React.SetStateAction<string>>, 
        currentItem:string, pageRepList:string[],})
    {
        return (
        <div>
            <select id={"action_select"} value={props.mode} onChange={(event)=> props.setMode(event.target.value)}>
                <option value="select">Journal</option> 
                <option value="place">Place</option>
                <option  value="remove" >Remove</option>
            </select>
            {props.mode === "place" &&
                <IconDropdown setCurrentItem={props.setCurrentItem} 
                    currentItem={props.currentItem} pageRepList ={props.pageRepList}/>
            }
        </div>
        )
}

function SaveCard(props:{inputButt: () => void, exportButt:() => void ,}){

    return <div>
        <input type={"file"} id={`jsonLoadInsert`} accept={".zip"}></input>
        <div>
            <button onClick={props.inputButt}>Import</button>
            <button onClick={props.exportButt}>Export</button>
        </div>
</div>
}

function IconDropdown(props:{ setCurrentItem:React.Dispatch<React.SetStateAction<string>>, 
                            currentItem:string, pageRepList:string[],})
    {  
    
    // const setCurrentItem = (event:React.ChangeEvent<HTMLSelectElement>) => {
    //     props.setCurrentItem(event.target.value)
    // }

    const listItems = props.pageRepList.map((element:string) => {
        return <option value= {element} key={element}>{element}</option>
    });
    
    return (
        <select onChange={(event)=> props.setCurrentItem(event.target.value)} defaultValue={props.currentItem}>
            {listItems}
        </select>
    )
}