'use client'

import React from "react"

import {representation} from "./representation_page"

import {  useRouter } from 'next/navigation'

interface dairyType{
  diaryInfo:{x:number,y:number,info_on_location:Array<representation>}, 
  updateButt:()=>void, 
  currentRepInfo:Array<representation>,
  setCurrentRepInfo:React.Dispatch<React.SetStateAction<representation[]>>, 
  deleteFunc: (id:string)=>()=>void
  full_map_list:{ id: any; name: any; }[]
  resetDiary:()=> void
  showCreative:boolean
}

export function Diary({diaryInfo, 
                        currentRepInfo,
                        setCurrentRepInfo, 
                        deleteFunc,
                        full_map_list,
                        updateButt,
                        resetDiary,
                        showCreative,
                      }:dairyType)   
  {

  const router = useRouter()

  const mapTranfer = (link:string) => () => {

    updateButt()
    
    router.push(`/${link}/map`)
  }

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

  const LinkedAdded = (item:representation)=> ()=>{
    // console.log(item)
    const info_copy = currentRepInfo.slice()
    const listIndex = info_copy.findIndex(indexOf => item.id === indexOf.id)
    info_copy[listIndex].link= (document.getElementById(`dairyLinkSelect`) as HTMLInputElement).value ;

    setCurrentRepInfo(info_copy)
  }  

  if (diaryInfo.info_on_location.length == 0){
    return <></>
  }

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
          {item.link ? <div>
            <TranferWithLink mapTranfer={mapTranfer(item.link!)}/>
          </div>:<></> }
          {showCreative ? <>
              <div>
                  <button onClick={newTextBoxAdded(item)} >New Entry</button>
              </div>
              {item.link ? <></>:
              <AddLink full_map_list={full_map_list} LinkedAdded={LinkedAdded(item)}/>}
              <hr style={{height:`15px`,backgroundColor:`grey`}}/>
              <button onClick={deleteFunc(item.id)}>❌Delete❌</button>
            </>:<></> }
      </div>
      )
  })


  return (<div  style={{
              position: "absolute",
              left: `${diaryInfo.x}px`,
              top: `${diaryInfo.y}px`,
              backgroundColor: 'violet'
            }}>
              <div style={{textAlign: "right"}}><button onClick={resetDiary}>Close - X</button></div>
              {info_list}
            </div>
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

  function TranferWithLink(props:{ mapTranfer:()=> void}){
    return (<button onClick={props.mapTranfer}>
      Jump Into Icon 🌐 
  </button>) 
  }

  function AddLink(props:{
              full_map_list:{ id: any; name: any; }[],
              LinkedAdded:() => void,
            }) {

    

    const linkOptions = props.full_map_list.map((json:{ id: any; name: any; }) => {
      return <option value= {json.id} key={json.id}>{json.name}</option>
  });

    return <>
          <select id="dairyLinkSelect">
                {linkOptions}
            </select>
          <button onClick={props.LinkedAdded}>♻️Add link♻️</button>

      </>
  }

