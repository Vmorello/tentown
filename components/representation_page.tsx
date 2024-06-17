'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import Head from "next/head";

import {saveAs} from 'file-saver';
import JSZip from 'jszip';

import {CanvasComp} from './canvas_component'
import {Diary} from './diary_component'
import {CardSelect} from './options_component'
import {Debug} from './debug_'

interface repPage {
  height: number 
  width: number 
  startIcon: string
  title: string
  background?: string|Blob
  pageRepList: Array<string>
}

export type representation = {icon: string, 
  x: number, y: number
  data : Array<string>
  id :string
  visibleName  : string
  link: boolean
  radius: number
}

type fullPageRepresentation = {
  background?: string|Blob 
  repInfo: Array<representation>
  width:number 
  height:number
  repNumeration:string
  parentID?:string
}

type dict_fullPageRepresentation = {[key: string]: fullPageRepresentation}


export function GotPage(props:repPage) {

  const [currentRepInfo,setCurrentRepInfo] = useState([] as Array<representation>);
  const [allBGsPlusRepInfo, setAllBGsPlusRepInfo] = useState(
    {index:  
      { background: props.background, 
        repInfo:[] as Array<representation>, 
        width:props.width, 
        height:props.height,
        repNumeration:"index",
      }
    } as dict_fullPageRepresentation)
    
  const [currentPageID, setCurrentPageID] = useState("index")

  const [mode,setMode] = useState("place");
  //const [user,setUser] = useState(props.user);
  const [height,setHeight] = useState(props.height);
  const [width,setWidth] = useState(props.width);
  const [currentItem, setCurrentItem] = useState(props.startIcon);
  const [diary,setDiary] = useState({
    x: 0,
    y: 0,
    info_on_location: [] as Array<representation>,
  });
  const [background,setBackground] = useState(props.background)
  const [idNumeration,setidNumeration] = useState("0");


  //================= Main Interaction with canvas with control card ==============
  
  const addRep = (x:number, y:number) =>{

    const radius = getRadius(currentItem)

    const info_copy = currentRepInfo.slice()
    info_copy.push({
        icon: currentItem,
        x: x -radius,
        y: y -radius,
        data: [],
        id:idNumeration,
        visibleName : currentItem,
        radius:radius,
        link:false,
    })
    setidNumeration(String(Number(idNumeration)+1))
    setCurrentRepInfo(info_copy)
  }

  // this will be replaced in time, just not soon 
  const getRadius = (selectedItem:string) => {
    if (selectedItem === "cover"){
      return 127
    }
    return 14
  }

  const canvasOnclickSwitch = (x:number,y:number,offsetX:number,offsetY:number) =>{
    const selectX=x +offsetX
    const selectY=y +offsetY

      const info_on_location = currentRepInfo.filter((item) => {
        // console.log(`${item.icon} is checking with x:${item.x}+-${item.radius}  y:${item.y}+-${item.radius} vs the click x:${selectX} y:${selectY} `);
        return item["x"]+ (2*item["radius"]) > selectX && 
            item["x"] < selectX && 
            item["y"]+ (2*item["radius"]) > selectY && 
            item["y"] < selectY})
      
        if (info_on_location.length > 0){
          // console.log("i see something")
          setDiary({
            x:x, 
            y:y,
            info_on_location: info_on_location
          })
        }
        else{
          // console.log("i see nothing")
          addRep(selectX,selectY)
        }

        console.log(`clicked at x:${x} y:${y}. offset set at x:${offsetX} y:${offsetY}. The info at this location found is ${info_on_location}`)
  } 

  const removeRep = (id:string) =>  () => {

    let info_copy = currentRepInfo.slice()

    // see if you test this vs select 
    const notThisId = (listOut:Array<representation>,item:representation)=> {
      if ( ! (item["id"]=== id)){
          listOut.push(item)
        }
      return listOut
    }
    info_copy = info_copy.reduce(notThisId,[])
    resetDiary()
    setCurrentRepInfo(info_copy)
  }


  //================ Sub-map tranfers =====================


  const goToNestedLink = (childID:string, parentID:string) => () => {

    // console.log(allBGsPlusRepInfo)
    allBGsPlusRepInfo[parentID] = {width:width, height:height, background: background, 
      repInfo: currentRepInfo, repNumeration: idNumeration,}

    // console.log(allBGsPlusRepInfo)
    
    setCurrentRepInfo(allBGsPlusRepInfo[childID].repInfo) 
    setBackground(allBGsPlusRepInfo[childID].background)
    setHeight(allBGsPlusRepInfo[childID].height)
    setWidth(allBGsPlusRepInfo[childID].width)
    setidNumeration(allBGsPlusRepInfo[childID].repNumeration)

    setAllBGsPlusRepInfo(allBGsPlusRepInfo)
    setCurrentPageID(childID)

    resetDiary()
  } 

  const addNestedRep = (id:string) => () => {

    const info_copy = currentRepInfo.slice()
    const listIndex = info_copy.findIndex(indexOf => id === indexOf.id)
    info_copy[listIndex]["link"] = true
    setCurrentRepInfo(info_copy)

    allBGsPlusRepInfo[id] = {width:1000, height:920, background: undefined,repNumeration: "1",
      repInfo:[{icon:"back_button",x:20,y:20,data:[], id:"index", visibleName:"Go Back", link:true, radius:64}]
    }
    setAllBGsPlusRepInfo(allBGsPlusRepInfo)
  }


  //================ Diary functions =======================

  const resetDiary = () =>{
    setDiary({
      x: 0,
      y: 0,
      info_on_location: [],
    });
  }
  
  //==================Card button Actions =======================

  const  importButt = () => {
    let zipFile
      const inputFileObject = document.getElementById("jsonLoadInsert") as HTMLInputElement;
      if (inputFileObject.files === null) {
        return
      }
      zipFile = inputFileObject.files[0]
      buildFromZip(zipFile)
    }
    

  const buildFromZip = async(zipFile:Blob) =>{

    resetDiary()

    // console.log(zipFile)
    const newBGsPlusRepInfo = {} as dict_fullPageRepresentation

    const zip = await JSZip.loadAsync(zipFile)

    zip.forEach(async (relativePath, file) => {
      if (file.dir) { return; }

      //console.log("iterating on", file);
      const path = relativePath.split("/");

      const filename = path[1];
      const saveIndex = path[0];

      const loadFunction = getLoadFunction(filename);
      if (loadFunction === undefined) { return; }

      await loadFunction(file, newBGsPlusRepInfo, saveIndex);

      // console.log("saveIndex" , saveIndex )
      if (saveIndex === "index") {
        console.log(`placing ${(newBGsPlusRepInfo.index.repInfo[0].icon)} at x:${newBGsPlusRepInfo.index.repInfo[0].x} and y:${newBGsPlusRepInfo.index.repInfo[0].y} on load`);
        setCurrentRepInfo(newBGsPlusRepInfo.index.repInfo);
        setHeight(newBGsPlusRepInfo.index.height);
        setWidth(newBGsPlusRepInfo.index.width);
        setidNumeration(newBGsPlusRepInfo.index.repNumeration);

        setCurrentPageID("index");

        setBackground(newBGsPlusRepInfo.index.background);

      }

    })
    // console.log("newAllInfo" , newBGsPlusRepInfo)
    setAllBGsPlusRepInfo(newBGsPlusRepInfo) 
  }

  const importJsonRep = async (jsonFile:JSZip.JSZipObject, newBGsPlusRepInfo:dict_fullPageRepresentation, saveIndex:string)=> {
    // console.log('reading the JSON')
    const allRepInfoString = await jsonFile.async("string")
    const json:fullPageRepresentation =  await JSON.parse(allRepInfoString)
    newBGsPlusRepInfo[saveIndex] = json
  }

  const importMap = async (imageFile:JSZip.JSZipObject, newBGsPlusRepInfo:dict_fullPageRepresentation, saveIndex:string)=> {
    // console.log('reading the background')
    try {
      const mapblob:Blob = await imageFile.async("blob")
      newBGsPlusRepInfo[saveIndex].background = mapblob
    } catch (error) {
      alert(error)
      //console.log("Catching Error:" + error)
    }
  }

  const getLoadFunction = (fileString:string) =>{
    return importFileEvent[fileString]
  } 

  const importFileEvent:{[fileType:string]:(jsonFile: JSZip.JSZipObject, newBGsPlusRepInfo: dict_fullPageRepresentation, saveIndex: string) => void} = {
    "rep.json": importJsonRep,
    "map.png": importMap,
  }

  const exportButt = ()=> {

      allBGsPlusRepInfo[currentPageID] = {width:width, height:height, background: background, 
        repInfo: currentRepInfo, repNumeration: idNumeration,}
      setAllBGsPlusRepInfo(allBGsPlusRepInfo)

      let zip = new JSZip();
      let folder 

      Object.entries(allBGsPlusRepInfo).map((key_value)=> {
        const key= key_value[0]

        const valueObject = key_value[1]
        // console.log(key_value)
        folder = zip.folder(key)

        const valueString = JSON.stringify(valueObject)
        folder!.file("rep.json", valueString)
        
        try{
          console.log("file is coming together")
          folder!.file("map.png", valueObject.background as Blob)
        }catch (error) {
          console.log("Catching Error:" + error)
        }
        console.log("in the end I did nothing ;)")
      })
      saveZip(zip)
  }

  const saveZip = (zip:JSZip) => {
    zip.generateAsync({type:"blob"})
    .then((blob:Blob)=> {
        saveAs(blob, `${props.title}.zip`);
    });
  }

  const backgroundButt = ()=> {
      const inputFileObject = document.getElementById(`backgroundLoadInsert`) as HTMLInputElement;
      if (inputFileObject.files === null) {
        return
      }

      const inputFile = inputFileObject.files[0]
      
      setBackground(inputFile)

      const imageURL = URL.createObjectURL(inputFile)
      const tempImage = new Image();
      tempImage.addEventListener("load", ()=>{
        setHeight(tempImage.naturalHeight)
        setWidth(tempImage.naturalWidth)
      })
      tempImage.src = imageURL
  }









  return(
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <div>
        <CanvasComp repList={currentRepInfo} onPress={canvasOnclickSwitch} 
              width={width} height={height} currentItem={currentItem} mode={mode}
              background={background}/>
        
        <CardSelect setCurrentItem={setCurrentItem} 
                    currentItem={currentItem} pageRepList ={props.pageRepList}
                    inputButt={importButt} exportButt={exportButt} 
                    backgroundButt={backgroundButt}   />

      <Diary diaryInfo={diary} addLink={addNestedRep} goToNestedLink={goToNestedLink} deleteFunc ={removeRep}
            currentRepInfo={currentRepInfo} setCurrentRepInfo={setCurrentRepInfo} currentPageID={currentPageID}/>

      <Debug pageID={currentPageID}  />
    </div>
  </>
  )
}
