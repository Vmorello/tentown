'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { CanvasComp } from './canvas_component'
import { Diary } from './diary_component'
import { CardSelect } from './options_component'
import { Debug } from './debug_'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import { get_icon_list, getRadius } from '../classes/icons_utils'


interface repPage {
  icons: Array<representation>
  showCreative: boolean
  storage_name: string
  loaded: boolean
  map_id: string
  full_map_list: { id: any; name: any; }[]
  storage_list: string[]
}

export type representation = {
  icon: string,
  x: number, y: number
  data: Array<string>
  id: string
  visible_name: string
  radius: number,
  link: string | null
  map_id: string
  hidden: boolean
}

const iconList = get_icon_list()!

export function GotPage(props: repPage) {

  const [currentRepInfo, setCurrentRepInfo] = useState(props.icons);
  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(1400);
  const [currentItem, setCurrentItem] = useState("-none-");
  const [diary, setDiary] = useState({
    x: 0,
    y: 0,
    info_on_location: [] as Array<representation>,
  });
  const [background, setBackground] = useState(undefined as Blob | undefined)

  const [supabase] = useState(createClientComponentClient())

  const [deletedIcons, setDeletedIcons] = useState([] as string[]);



  useEffect(() => {
    getMapFileFromStorage(props.storage_name)
    //   if (typeof window !== 'undefined') {
    //     setWidth(window.innerWidth-10)
    //     setLength(window.innerHeight-100)
  }, []);

  const router = useRouter()



  // console.log(`are you gonna see all the controls: ${props.showCreative}`)

  //================= Main Interaction with canvas with control card ==============

  const addRep = (x: number, y: number) => {
    //next to be replaced
    const radius = getRadius(currentItem)

    const info_copy = currentRepInfo.slice()
    info_copy.push({
      icon: currentItem,
      x: x - radius,
      y: y - radius,
      data: [],
      id: uuidv4(),
      visible_name: currentItem,
      radius: radius,
      map_id: props.map_id,
      link: null,
      hidden: false
    })
    setCurrentRepInfo(info_copy)
  }


  const canvasOnclickSwitch = (x_canvas: number, y_canvas: number, x_page: number, y_page: number,) => {
    resetDiary()


    const info_on_location = currentRepInfo.filter((item) => {
      // console.log(`${item.icon} is checking with x:${item.x}+-${item.radius}  y:${item.y}+-${item.radius} vs the click x:${selectX} y:${selectY} `);
      return item["x"] + (2 * item["radius"]) > x_canvas &&
        item["x"] < x_canvas &&
        item["y"] + (2 * item["radius"]) > y_canvas &&
        item["y"] < y_canvas
    })

    if (info_on_location.length > 0) {
      setDiary({
        x: x_page,
        y: y_page,
        info_on_location: info_on_location
      })
    }
    else if (currentItem != "-none-") {
      addRep(x_canvas, y_canvas)
    }

    console.log(`clicked at x:${x_canvas} y:${y_canvas} in the canvas. clicked at x:${x_page} y:${y_page} in the page. The info at this location found is ${info_on_location}`)//offset set at x:${offsetX} y:${offsetY}.
  }

  const removeRep = (id: string) => () => {

    let info_copy = currentRepInfo.slice()

    // see if you test this vs select 
    const notThisId = (listOut: Array<representation>, item: representation) => {
      if (!(item["id"] === id)) {
        listOut.push(item)
      }
      return listOut
    }
    info_copy = info_copy.reduce(notThisId, [])
    resetDiary()
    setCurrentRepInfo(info_copy)
    const deletedIcons_copy = deletedIcons.slice()
    deletedIcons_copy.push(id)
    setDeletedIcons(deletedIcons_copy)
  }

  //================ Diary functions =======================

  const resetDiary = () => {
    setDiary({
      x: 0,
      y: 0,
      info_on_location: [],
    });
  }

  //===================================Card button Actions ========================================


  //================ background =======================

  const backgroundButt = () => {
    const inputFileObject = document.getElementById(`bgStorageSelect`) as HTMLInputElement;
    if (inputFileObject.value === null) {
      return
    }

    const inputFile = inputFileObject.value

    getMapFileFromStorage(inputFile)

  }

  const getMapFileFromStorage = async (storageName: string) => {
    const { data, error } = await supabase
      .storage
      .from('public/MapCollection')
      .download(storageName)
    if (data) {
      updateBackgroundAndsSize(data)
    }
  }

  const updateBackgroundAndsSize = (backgroundImage: Blob) => {
    setBackground(backgroundImage)

    const imageURL = URL.createObjectURL(backgroundImage)
    const tempImage = new Image();
    tempImage.addEventListener("load", () => {
      setHeight(tempImage.naturalHeight)
      setWidth(tempImage.naturalWidth)
      URL.revokeObjectURL(imageURL)
    })
    tempImage.src = imageURL
  }

  //================ Saving =======================
  const saveButt = () => {
    const bgStorageSelect = document.getElementById(`bgStorageSelect`) as HTMLInputElement;
    console.log("Starting saving ")
    const backgroundName = bgStorageSelect.value

    const pushData = async () => {

      const { data: { user } } = await supabase.auth.getUser()
      // console.log(user)
      const { data: mapSave, error: mapError } = await supabase
        .from('maps')
        .insert({ id: props.map_id, owner: user!.id, name: backgroundName, storage_name: backgroundName })
        .select("id")

      updateButt()
      router.push(`/${mapSave![0].id}/map`)
    }
    pushData()

  }

  const updateButt = () => {
    const updateIcons = async () => {
      const { data: iconSaved, error: iconError } = await supabase
        .from('icons')
        .upsert(currentRepInfo)

      const { data: iconDeleted, error: iconDeleteError } = await supabase
        .from('icons')
        .delete()
        .in("id", deletedIcons)

      setDeletedIcons([])
      console.log("I am done updating the DB")
    }

    console.log("I am about to update the DB")
    updateIcons()
  }


  //==================================================================

  return (
    <>
      <div>
        <CanvasComp repList={currentRepInfo} onPress={canvasOnclickSwitch}
          width={width} height={height} currentItem={currentItem}
          background={background} />
        {props.showCreative ?
          <CardSelect setCurrentItem={setCurrentItem}
            currentItem={currentItem} pageRepList={iconList}
            backgroundButt={backgroundButt} bgList={props.storage_list}
            loaded={props.loaded} newSaveButt={saveButt} loadedSaveButt={updateButt} />
          : <></>}
        <Diary diaryInfo={diary} deleteFunc={removeRep} full_map_list={props.full_map_list} resetDiary={resetDiary}
          currentRepInfo={currentRepInfo} setCurrentRepInfo={setCurrentRepInfo} updateButt={updateButt} showCreative={props.showCreative} />

        {/* <Debug pageID={props.map_id}  /> */}
      </div>
    </>
  )
}
