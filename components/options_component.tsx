import React from 'react';

interface card_type extends background_function, select_class  {
    importButt: () => void, exportButt:() => void ,
    supaImportButt: () => void, supaExportButt:() => void ,
  }

  interface select_class{
    setCurrentItem:React.Dispatch<React.SetStateAction<string>>
    currentItem:string
    pageRepList:string[]
  }
  
  interface background_function{
    backgroundButt:()=>void
  }

export function CardSelect({
    setCurrentItem, 
    currentItem, pageRepList,
    importButt, exportButt ,
    supaImportButt , supaExportButt ,
    backgroundButt }:card_type
    ){

    return ( <div style={{ position: "fixed",
                        bottom: "10px",
                        left: "5px",
                        backgroundColor: "rgba(156, 153, 153, 0.75)"}}>
        <IconSelectDropdown setCurrentItem={setCurrentItem} 
            currentItem={currentItem} pageRepList ={pageRepList}/>
                        <hr style={{height:`5px`,backgroundColor:`black`}}/>
        <label>Changing the Background</label>
        <BackgroundCard backgroundButt={backgroundButt}/>
                        <hr style={{height:`5px`,backgroundColor:`black`}}/>
        <label>Save/load - File System</label>
        <SaveCard importButt={importButt} exportButt={exportButt}/>
                        <hr style={{height:`5px`,backgroundColor:`black`}}/>
        <button onClick={supaImportButt}>Import</button>
        <button onClick={supaExportButt}>Export</button>
        
    </div>
    )
}

function BackgroundCard({backgroundButt}:background_function){
    return <>
            <div>
                <input type={"file"} id={`backgroundLoadInsert`} accept={"image/*"}></input>
            </div>
            <button onClick={backgroundButt}>Change BG</button>
    </>
    
}

function SaveCard(props:{importButt: () => void, exportButt:() => void ,}){

    return <div>
        <input type={"file"} id={`jsonLoadInsert`} accept={".zip"}></input>
        <div>
            <button onClick={props.importButt}>Import</button>
            <button onClick={props.exportButt}>Export</button>
        </div>
</div>
}

function IconSelectDropdown({ setCurrentItem, 
                            currentItem, pageRepList,}:select_class)
    {  
    const listItems = pageRepList.map((element:string) => {
        return <option value= {element} key={element}>{element}</option>
    });
    
    return (
        <select onChange={(event)=> setCurrentItem(event.target.value)} defaultValue={currentItem}>
            {listItems}
        </select>
    )
}