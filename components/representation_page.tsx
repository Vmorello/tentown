'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import Head from "next/head";

import {v4 as uuidv4} from 'uuid';

import {CanvasComp} from './canvas_component'
import {Diary} from './diary_component'
import {CardSelect} from './options_component'
import {Debug} from './debug_'
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';


interface repPage {
  icons:Array<representation>
  title: string
  storage_name: string
  loaded : boolean
  map_id:string
  full_map_list:{ id: any; name: any; }[]
}

export type representation = {icon: string, 
  x: number, y: number
  data : Array<string>
  id :string
  visible_name  : string
  radius: number,
  link: string|null
  map_id: string
}

const iconList = ["-none-","alter", "camp", "cave", "dock","dungeon","forge","fort","graveyard",
  "house","mine","ruines","sheild","stable","tavern","temple","town1","town2","village","cover","cover_s"]

const bgList =["bremen","bryn-shander","dougans-hole","caer-dineval","caer-konig","easthaven","fortunes-wheel",
   "good-mead","icewind-dale","lonelywood","mortuary-basement","sigil","targos","termalaine"]

export function GotPage(props:repPage) {

  const [currentRepInfo,setCurrentRepInfo] = useState(props.icons);
  const [height,setHeight] = useState(900);
  const [width,setWidth] = useState(1400);
  const [currentItem, setCurrentItem] = useState("-none-");
  const [diary,setDiary] = useState({
    x: 0,
    y: 0,
    info_on_location: [] as Array<representation>,
  });
  const [background,setBackground] = useState(undefined as Blob|undefined)

  const [supabase,_] = useState(createClientComponentClient())

  const [deletedIcons,setDeletedIcons] = useState([] as string[]);

  useEffect(() => {
    getMapFileFromStorage(props.storage_name)
    
  }, []);

  const router = useRouter()

  //================= Main Interaction with canvas with control card ==============
  
  const addRep = (x:number, y:number) =>{

    const radius = getRadius(currentItem)

    const info_copy = currentRepInfo.slice()
    info_copy.push({
        icon: currentItem,
        x: x -radius,
        y: y -radius,
        data: [],
        id:uuidv4(),
        visible_name : currentItem,
        radius:radius,
        map_id:props.map_id,
        link:null
    })
        
    // setidNumeration(String(Number(idNumeration)+1))
    setCurrentRepInfo(info_copy)
  }

  // this will be replaced in time, just not soon 
  const getRadius = (selectedItem:string) => {
    if (selectedItem === "cover"){
      return 127
    }
    else if (selectedItem === "cover_s"){
      return 64
    }
    return 14
  }

  const canvasOnclickSwitch = (x:number,y:number,offsetX:number,offsetY:number) =>{
    resetDiary()
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
        else if (currentItem != "-none-"){
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
    const deletedIcons_copy = deletedIcons.slice()
    deletedIcons_copy.push(id)
    setDeletedIcons(deletedIcons_copy)
  }

  //================ Diary functions =======================

  const resetDiary = () =>{
    setDiary({
      x: 0,
      y: 0,
      info_on_location: [],
    });
  }
  
  //===================================Card button Actions ========================================


   //================ background =======================

  const backgroundButt = ()=> {
      const inputFileObject = document.getElementById(`bgStorageSelect`) as HTMLInputElement;
      if (inputFileObject.value === null) {
        return
      }

      const inputFile = inputFileObject.value

      getMapFileFromStorage(inputFile)
     
  }

  const getMapFileFromStorage = async (storageName:string) => {  
      const { data, error } = await supabase
            .storage
            .from('public/MapCollection')
            .download(storageName)
      if (data) {
        updateBackgroundAndsSize(data)

      }
    }



  const updateBackgroundAndsSize = (backgroundImage:Blob) => {
      setBackground(backgroundImage)

      const imageURL = URL.createObjectURL(backgroundImage)
      const tempImage = new Image();
      tempImage.addEventListener("load", ()=>{
        setHeight(tempImage.naturalHeight)
        setWidth(tempImage.naturalWidth)
      })
      tempImage.src = imageURL
}

const newSaveButt = () => {
  const bgStorageSelect = document.getElementById(`bgStorageSelect`) as HTMLInputElement;
  console.log("Starting saving ")
  const backgroundName = bgStorageSelect.value

  const pushData = async() => {

    const { data:{user} } = await supabase.auth.getUser()
    console.log(user)
    const {data:mapSave, error:mapError } = await supabase
      .from('maps')
      .insert({id:props.map_id, owner: user!.id, name: backgroundName, storage_name: backgroundName })
      .select("id")
    
      updateButt()  
    
    
    router.push(`/${mapSave![0].id}/map`)
  }
  pushData()
  
}

const updateButt = () =>{
  const updateIcons = async() => {
    
    const {data:iconSaved, error:iconError } = await supabase
      .from('icons')
      .upsert(currentRepInfo)
    
    const {data:iconDeleted, error:iconDeleteError } = await supabase
      .from('icons')
      .delete()
      .in("id",deletedIcons)
    
    setDeletedIcons([])
    console.log("I am done updating the DB")
  }
  updateIcons()
}



  return(
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <div>
        <CanvasComp repList={currentRepInfo} onPress={canvasOnclickSwitch} 
              width={width} height={height} currentItem={currentItem} 
              background={background}/>
        
        <CardSelect setCurrentItem={setCurrentItem} 
                    currentItem={currentItem} pageRepList ={iconList} 
                    backgroundButt={backgroundButt}  bgList={bgList} 
                    loaded={props.loaded} newSaveButt={newSaveButt} loadedSaveButt={updateButt}/>

      <Diary diaryInfo={diary} deleteFunc ={removeRep} full_map_list={props.full_map_list} resetDiary={resetDiary}
            currentRepInfo={currentRepInfo} setCurrentRepInfo={setCurrentRepInfo} updateButt={updateButt}/>

      {/* <Debug pageID={props.map_id}  /> */}
    </div>
  </>
  )
}
