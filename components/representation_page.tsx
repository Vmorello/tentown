'use client';

import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import { v4 as uuidv4 } from 'uuid';

import { IconPlacement } from '@/components/IconPlacement'
import { Diary } from './diary_component'
import { CardSelect } from './options_component'
import { Debug } from './debug_'
import { get_icon_list, getRadius, getSize } from '@/classes/icons_utils'
import { noSelectionString } from "@/classes/constants"
import { MemoryListed } from './MemoryListed';
import useCanvas from './canvas/hook';
import Aligner from './wrappers/aligner';

interface repPage {
  icons: representation[]
  showCreative: boolean
  mapLocationToLoad?: string
  loaded: boolean
  mapId?: string
  userMaps: { id: any; name: any; }[]
  storageList: string[]
  height: number
  width: number
}

export type representation = {
  icon: string,
  x: number, y: number
  data: string[]
  id: string
  visible_name: string
  radius: number,
  link: string | null
  map_id: string
  hidden: boolean
  width: number
  height: number
  image_storage?: string[]
}

const iconList = get_icon_list()!

export function GotPage(props: repPage) {

  const { ref, canvasUtil } = useCanvas();

  const [mapId] = useState(props.mapId ? props.mapId : uuidv4())

  const [currentRepInfo, setCurrentRepInfo] = useState(props.icons);
  const [dimention, setDimention] = useState({ "height": props.height, "width": props.width })
  const [currentItem, setCurrentItem] = useState(noSelectionString);
  const [diary, setDiary] = useState({
    x: 0,
    y: 0,
    infoOnLocation: [] as representation[],
  });
  const [background, setBackground] = useState(undefined as HTMLImageElement | undefined)
  const [supabase] = useState(createClientComponentClient())
  const [deletedIcons, setDeletedIcons] = useState([] as string[]);



  useEffect(() => {
    getMapFileFromStorage(props.mapLocationToLoad)
  }, []);


  useEffect(() => {
    if (canvasUtil === undefined) { return } // Makes this safe to do canvas-util operations

    canvasUtil.setup(background!, currentItem)

  }, [background, currentItem])


  const router = useRouter()



  // console.log(`are you gonna see all the controls: ${props.showCreative}`)

  //================= Main Interaction with canvas with control card ==============

  const addRep = (x: number, y: number) => {
    //next to be replaced
    const radius = getRadius(currentItem)

    const size = getSize(currentItem)

    const info_copy = currentRepInfo.slice()
    info_copy.push({
      icon: currentItem,
      x: x - size.w / 2,
      y: y - size.h / 2,
      data: [],
      id: uuidv4(),
      visible_name: currentItem,
      radius: radius,
      map_id: mapId,
      link: null,
      hidden: false,
      height: size.h,
      width: size.w,
    })
    setCurrentRepInfo(info_copy)
  }

  const onCanvasPress = (event: React.MouseEvent<HTMLCanvasElement>) => {
    canvasOnclickSwitch(event.nativeEvent.offsetX, event.nativeEvent.offsetY, event.pageX, event.pageY,)
    canvasUtil?.addClickEffect(event.nativeEvent.offsetX, event.nativeEvent.offsetY)
  }


  const canvasOnclickSwitch = (xCanvas: number, yCanvas: number, xPage: number, yPage: number,) => {
    resetDiary()


    const infoOnLocation = currentRepInfo.filter((item) => {
      if (item.hidden && !props.showCreative) return
      // console.log(`${item.icon} is checking with x:${item.x}+-${item.width}  y:${item.y}+-${item.height} vs the click x:${selectX} y:${selectY} `);
      return item["x"] + (item.width) > xCanvas &&
        item["x"] < xCanvas &&
        item["y"] + (item.height) > yCanvas &&
        item["y"] < yCanvas
    })

    if (infoOnLocation.length > 0) {
      setDiary({
        x: xPage,
        y: yPage,
        infoOnLocation: infoOnLocation
      })
    }
    else if (currentItem != noSelectionString) {
      addRep(xCanvas, yCanvas)
      setCurrentItem(noSelectionString)
    }

    console.log(`clicked at x:${xCanvas} y:${yCanvas} in the canvas. clicked at x:${xPage} y:${yPage} in the page. The info at this location found is ${infoOnLocation}`)//offset set at x:${offsetX} y:${offsetY}.
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
      infoOnLocation: [],
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

  const getMapFileFromStorage = async (storageName?: string) => {
    if (!storageName) {
      return
    }
    const { data, error } = await supabase
      .storage
      .from('public/MapCollection')
      .download(storageName)

    console.log(data, error)

    const reader = new FileReader();
    reader.readAsText(data!);
    reader.onloadend = () => {
      // console.log(reader.result)
      updateBackgroundAndsSizeWithBase64(reader.result as string)
    };

  }

  const updateBackgroundAndsSizeWithBase64 = (base64image: string) => {

    var image = new Image();
    image.src = base64image;

    image.addEventListener("load", () => {
      console.log(`loaded image${image}`)
      setBackground(image)
      setDimention({ "height": image.naturalHeight, "width": image.naturalWidth })
    })
    image.src = base64image;

  }

  const updateBackgroundAndSize = (backgroundImage: Blob) => {
    const imageURL = URL.createObjectURL(backgroundImage)
    console.log(imageURL)
    const tempImage = new Image();

    tempImage.addEventListener("load", () => {
      console.log(`loading image${tempImage}`)
      setBackground(tempImage)
      setDimention({ "height": tempImage.naturalHeight, "width": tempImage.naturalWidth })
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
        .insert({
          id: mapId, owner: user!.id, name: backgroundName.split("/")[1],
          storage_name: backgroundName, width: dimention.width, height: dimention.height
        })
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
        {/* <MemoryListed memoryList={currentRepInfo} showCreative={props.showCreative} /> */}
        <Aligner canvasWidth={dimention.width}>
          <canvas ref={ref} onClick={onCanvasPress}
            width={dimention.width} height={dimention.height} className="border-dotted border-2 border-stone-400" />
          <IconPlacement repList={currentRepInfo} showCreative={props.showCreative} focusedReps={diary.infoOnLocation} />
        </Aligner>
        {props.showCreative ?
          <CardSelect setCurrentItem={setCurrentItem}
            currentItem={currentItem} pageRepList={iconList}
            backgroundButt={backgroundButt} bgList={props.storageList}
            loaded={props.loaded} newSaveButt={saveButt} loadedSaveButt={updateButt} />
          : <></>}
        <Diary diaryInfo={diary} removeRep={removeRep}
          userMaps={props.userMaps} userStorageImages={props.storageList} resetDiary={resetDiary}
          currentRepInfo={currentRepInfo} setCurrentRepInfo={setCurrentRepInfo}
          updateButt={updateButt} showCreative={props.showCreative} />

        {/* <Debug info={String(dimention.width)}  /> */}
      </div>
    </>
  )
}
