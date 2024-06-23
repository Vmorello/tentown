import React from "react"

import {representation} from "./representation_page"

interface dairyType{
  diaryInfo:{x:number,y:number,info_on_location:Array<representation>}, 
  addLink:(id:string)=>()=>void, 
  goToNestedLink:(childID:string, parentID:string) => () => void ,
  currentRepInfo:Array<representation>,
  setCurrentRepInfo:React.Dispatch<React.SetStateAction<representation[]>>, 
  currentPageID:string,
  deleteFunc: (id:string)=>()=>void
}

export function Diary({diaryInfo, 
                        addLink, 
                        goToNestedLink,
                        currentRepInfo,
                        setCurrentRepInfo, 
                        currentPageID,
                        deleteFunc
                      }:dairyType)   
  {

  const newTextBoxAdded = (item:representation)=> ()=>{
    // console.log(item)
    const info_copy = currentRepInfo.slice()
    const listIndex = info_copy.findIndex(indexOf => item.id === indexOf.id)
    info_copy[listIndex]["data"].push("write here")

    setCurrentRepInfo(info_copy)
  }  

  const titleOnChange = (item:representation)=>((event:React.ChangeEvent<HTMLInputElement>) => {
    const info_copy = currentRepInfo.slice()
    const listIndex = info_copy.findIndex(indexOf => item.id === indexOf.id)
    info_copy[listIndex].visible_name = event.target.value
    setCurrentRepInfo(info_copy)
  })

  const CatagoryOnChange = (repID:string, indexOfPara:number)=>((event:React.ChangeEvent<HTMLTextAreaElement>) => {
    const info_copy = currentRepInfo.slice()
    const listIndex = info_copy.findIndex(indexOf => repID === indexOf.id)
    info_copy[listIndex]["data"][indexOfPara] = event.target.value
    setCurrentRepInfo(info_copy)
  })

  const info_list =  diaryInfo.info_on_location.map((item:representation) => {
    // console.log(item)
      return (
          <div key={`journalRep${item.id}`}>
          <input value={item.visible_name}
          onChange={titleOnChange(item)}
          id={`journalRepTitle${item.id}`}
          style={{
              background: "transparent",
              border: "none"
          }}/>
          <DataListofItem entries={item.data} repID={item.id} CatagoryOnChange={CatagoryOnChange}/>
          <div>
              <button onClick={newTextBoxAdded(item)} >New Entry</button>
          </div>
          <DairyLink link={item.link} goToNestedLink={goToNestedLink(item.id, currentPageID)} 
              addLink={addLink(item.id)} repID={item.id} currentPageID={currentPageID}/>
          <hr style={{height:`15px`,backgroundColor:`grey`}}/>
          <button onClick={deleteFunc(item.id)} >❌Delete❌</button>
      </div>
      )
  })

  return (<div  style={{
              position: "absolute",
              left: `${diaryInfo.x}px`,
              top: `${diaryInfo.y}px`,
              backgroundColor: 'violet'
            }}>{info_list}</div>
    )
  }
  
  function DataListofItem(props:{
    entries:Array<string>, repID:string, 
    CatagoryOnChange: (repID:string, indexOfPara:number)=>(event:React.ChangeEvent<HTMLTextAreaElement>) => void
  }){
    return <>
    {props.entries.map((entry,index:number) => {
        return <div key={`rep${props.repID}_div${index}`}>
          <textarea cols={35} rows={5} value = {entry}
          onChange={props.CatagoryOnChange(props.repID,index)}/>
        </div>
      })}
    </>
  
  }

  function DairyLink(props:{link:boolean,goToNestedLink:()=>void, addLink:()=>void, repID:string, currentPageID:string}) {
    
    if (props.link) {
      return (<div>
          <button id={`link_btn_${props.repID}`} onClick={props.goToNestedLink} >Jump In</button>
      </div>)
    }
    else if (props.currentPageID === "index") {
      return (<div>
                <button id={`link_btn_${props.repID}`} onClick={props.addLink} >Add Link</button>
            </div>)
    }
    return <></>
  }

