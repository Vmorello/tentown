'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

import { v4 as uuidv4 } from 'uuid';

import { IconPlacement } from '@/components/IconPlacement'
import { Diary } from './DiaryComponents'
import { Debug } from './debug_'
import { get_icon_list, getSize } from '@/utils/icons_utils'
import { noSelectionString, padBlueHex, saveQuality, maxWidth, sideWidth, startingHeight } from "@/utils/constants"
import { MemoryListed } from './MemoryListed';
import useCanvas from './canvas/hook';
import { PhotoOverlay } from './PhotoOverlay';
import MapBanner from './MapBanner';
import { setDimentionWithSize } from '@/utils/canvas_utils'
import { BackgroundCard, CenteredBackground } from './4creator/BackgroundSelect';
import EmojiPicker from 'emoji-picker-react';
import PinButton from './PinButton';

interface repPage {
  icons: representation[]
  showCreative: boolean
  mapLocationToLoad: string
  loaded: boolean
  mapId?: string
  userMaps: { id: any; name: any; }[]
  templates: string[]
  height: number
  width: number
  savable: boolean
  name: string
  fav: boolean
}

export type representation = {
  icon: string
  x: number, y: number
  data: string[]
  id: string
  visible_name: string
  radius: number
  link: string | null
  map_id: string
  hidden: boolean
  width: number
  height: number
  image_storage: string[]
  order: number
}

const iconList = get_icon_list()

export function GotPage(props: repPage) {

  const { ref, canvasUtil } = useCanvas();

  const [mapId] = useState(props.mapId ? props.mapId : uuidv4())

  const [mapName, setMapName] = useState(props.name);

  const [currentRepInfo, setCurrentRepInfo] = useState(props.icons);
  const [dimention, setDimention] = useState({ "height": props.height, "width": props.width })
  const [currentItem, setCurrentItem] = useState(noSelectionString);
  const [diary, setDiary] = useState({
    x: 0,
    y: 0,
    infoOnLocation: [] as representation[],
  });
  const [background, setBackground] = useState(undefined as HTMLImageElement | undefined)
  const [backgroundSource, setBackgroundSource] = useState("Storage" as "Storage" | "File")
  const [supabase] = useState(createClient())
  const [deletedIcons, setDeletedIcons] = useState([] as string[]);

  const [pinStep, setPinStep] = useState("button" as "button" | "selection" | "place" | "describe")

  const [loadEmoji, setLoadEmoji] = useState(false);

  const [preview, setPreview] = useState(undefined as { item: representation, file: File } | undefined)

  const [openedIndex, setOpenedIndex] = useState(undefined as number | undefined);


  useEffect(() => {
    console.log("trying to get map file from storage")
    getMapFileFromStorage(props.mapLocationToLoad)
  }, []);


  useEffect(() => {
    if (canvasUtil === undefined) { return } // Makes this safe to do canvas-util operations

    canvasUtil.setup(background!, dimention.height, dimention.width, currentItem)

  }, [background, currentItem, dimention])


  const router = useRouter()



  // console.log(`are you gonna see all the controls: ${props.showCreative}`)

  //================= Main Interaction with canvas with control card ==============

  const addRep = (x: number, y: number) => {
    //next to be replaced
    const radius = 0

    const size = getSize(currentItem)

    const info_copy = currentRepInfo.slice()
    info_copy.push({
      icon: currentItem,
      x: x - size.w / 2,
      y: y - size.h / 2,
      data: [""],
      id: uuidv4(),
      visible_name: currentItem,
      radius: radius,
      map_id: mapId,
      link: null,
      hidden: false,
      height: size.h,
      width: size.w,
      image_storage: [],
      order: currentRepInfo.length
    })
    setCurrentRepInfo(info_copy)
  }



  //This weird typing lets me use this function somewhere where I would use a click event as well
  const CanvasPressed = (xCanvas: number, yCanvas: number) => {
    resetDiary()

    setPreview(undefined)
    setOpenedIndex(undefined)

    const infoOnLocation = currentRepInfo.filter((item) => {
      if (item.hidden && !props.showCreative) return
      // console.log(`${item.icon} is checking with x:${item.x}+-${item.width}  y:${item.y}+-${item.height} vs the click x:${selectX} y:${selectY} `);
      return item["x"] + (item.width) > xCanvas &&
        item["x"] < xCanvas &&
        item["y"] + (item.height) > yCanvas &&
        item["y"] < yCanvas
    })


    if (pinStep == "place" && currentItem != noSelectionString) {
      addRep(xCanvas, yCanvas)
      setCurrentItem(noSelectionString)
      setPinStep("button")
    }
    else if (infoOnLocation.length > 0) {
      setOpenedIndex(infoOnLocation[0].order)

      setDiary({
        x: xCanvas,
        y: yCanvas,
        infoOnLocation: infoOnLocation
      })
    }

    console.log(`clicked at x:${xCanvas} y:${yCanvas} in the canvas. The info at this location found is ${infoOnLocation}`)//offset set at x:${offsetX} y:${offsetY}.
    canvasUtil?.addClickEffect(xCanvas, yCanvas)
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

  const backgroundButt = (type: "Storage" | "File") => () => {
    const inputFileObject = document.getElementById(`bg${type}Select`) as HTMLInputElement;

    console.log("setting the background")
    if (type === "Storage") {
      if (inputFileObject.value === null) {
        return
      }
      getMapFileFromStorage(inputFileObject.value)
    } else {
      console.log("setting the background with a file")
      if (inputFileObject.files === null) {
        return
      }
      updateBackgroundAndSize(inputFileObject.files[0])
    }
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


    updateBackgroundAndSize(data!)

  }

  const updateBackgroundAndSize = (backgroundImage: Blob) => {
    const imageURL = URL.createObjectURL(backgroundImage)
    // console.log(imageURL)
    const tempImage = new Image();

    tempImage.addEventListener("load", () => {
      console.log(`loading image${tempImage}`)
      setBackgroundSource("File")
      setBackground(tempImage)
      if (tempImage.naturalWidth > maxWidth) {
        setDimentionWithSize(tempImage, setDimention, maxWidth)
      } else {
        setDimention({ "height": tempImage.naturalHeight, "width": tempImage.naturalWidth })
      }
      URL.revokeObjectURL(imageURL)
      setLoadEmoji(true)
    })
    tempImage.src = imageURL
  }

  //================ Saving =======================
  const saveImage = async (canvasElement: HTMLCanvasElement, storagePath: string,) => {
    const res: Response = await fetch(canvasElement.toDataURL("image/jpeg", saveQuality));
    const blob: Blob = await res.blob();
    const file = new File([blob], storagePath, { type: 'image/jpeg' })

    const { data: storageData, error: storageError } = await supabase
      .storage
      .from('MapCollection')
      .upload(storagePath, file, {
        upsert: true,
        contentType: "image/jpeg"
      })
    if (storageError) {
      console.error("we couldnt save the file image")
      return
    }

  }


  const saveButt = async () => {

    const bgStorageSelect = document.getElementById(`bgStorageSelect`) as HTMLInputElement;
    console.log("Starting saving ")

    let mapSaveresult

    if (backgroundSource === "Storage") {

      const backgroundName = bgStorageSelect.value // this is is with the user name, value has it 

      const { data: { user } } = await supabase.auth.getUser()
      // console.log(user)
      const { data: mapSave, error: mapError } = await supabase
        .from('maps')
        .insert({
          id: mapId, owner: user!.id, name: mapName,
          storage_name: backgroundName, width: dimention.width, height: dimention.height
        })
        .select("id")

      if (mapError) { console.log(mapError) }

      mapSaveresult = mapSave![0].id


    } else if (backgroundSource === "File") {
      canvasUtil?.removeEffects()
      canvasUtil?.removeHover()

      const { data: { user } } = await supabase.auth.getUser()

      const storagePath = `${user!.id}/${mapName}`


      await saveImage(ref.current!, storagePath)

      const { data: mapSave, error: mapError } = await supabase
        .from('maps')
        .insert({
          id: mapId, owner: user!.id, name: mapName,
          storage_name: storagePath, width: dimention.width, height: dimention.height
        })
        .select("id")

      if (mapError) { console.log(mapError) }

      mapSaveresult = mapSave![0].id
    }

    updateButt()
    router.push(`/${mapSaveresult}/map`)
  }


  const savePreviewButt = (preview: { item: representation, file: File }) => () => {


    const pushPreview = async () => {

      const { data: { user } } = await supabase.auth.getUser()

      const imagePath = `${user!.id}/${uuidv4()}`

      await saveImage((document.getElementsByClassName("previewCanvas")[0] as HTMLCanvasElement), imagePath)

      const infoCopy = currentRepInfo.slice()
      const listIndex = infoCopy.findIndex(indexOf => preview.item.id === indexOf.id)

      infoCopy[listIndex].image_storage ?
        infoCopy[listIndex].image_storage!.push(imagePath)
        : infoCopy[listIndex].image_storage = [imagePath]
      setCurrentRepInfo(infoCopy)


      // console.log(user)
      const { data: iconSave, error: iconError } = await supabase
        .from('icons')
        .upsert(infoCopy[listIndex])
        .eq('id', preview.item.id)


      setPreview(undefined)

    }
    pushPreview()
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

    console.log("I am about to update the DB icons")
    updateIcons()
  }

  //==================================================================

  return (
    <div className='origin-top-left scale-50 md:scale-75 lg:scale-100 overflow-x-scroll  min-w-max '>

      {!props.savable && props.showCreative ?
        <div className="bg-indigo-400 text-center p-3 mb-2 ">
          This will not be saved, it is only a demo. Please log-in/register above to save!
        </div> : <></>}
      <MapBanner id={props.mapId} name={mapName} fav={props.fav} setMapName={setMapName}>
        <div className="flex flex-col items-center " >

          {/* Save/Update button, this needs to be automatic*/}
          {props.savable &&
            <div className="rounded-t-xl p-3 font-bold" style={{ backgroundColor: padBlueHex }}>
              {props.loaded ? <button onClick={updateButt} className='bg-gradient-to-br from-amber-300 via-pink-400 to-indigo-500 py-3 px-5 rounded-lg' >
                Update</button>
                : <button onClick={saveButt} className='bg-gradient-to-br from-amber-300 via-pink-400 to-indigo-500 py-3 px-5 rounded-lg'>
                  Save This Map / Lock Background</button>}
            </div>}

          <div className="flex space-x-5 p-5 rounded-xl " style={{ backgroundColor: padBlueHex }}>

            {/* This is the Sidebar/ Underbar */}
            <div className="overflow-y-auto relative" style={{ maxHeight: dimention.height }}>
              <div className="flex flex-col bg-indigo-400 rounded-xl lg:w-96 lg:min-h-96" >
                {props.showCreative && <PinButton pinStep={pinStep} setPinStep={setPinStep} setCurrentItem={setCurrentItem} />}

                <MemoryListed memoryList={currentRepInfo} showCreative={props.showCreative} actingCanvasClick={CanvasPressed} setPreview={setPreview}
                  setCurrentRepInfo={setCurrentRepInfo} userMaps={props.userMaps} removeRep={removeRep}
                  openIndex={openedIndex} />

                {(!props.loaded && background != undefined) && <BackgroundCard bgList={props.templates} backgroundButt={backgroundButt} />}
              </div>
            </div>


            {/* This is the Map */}
            <div className='relative bg-indigo-400 rounded-xl  '>
              <canvas ref={ref} onClick={(event) => { CanvasPressed(event.nativeEvent.offsetX, event.nativeEvent.offsetY) }}
                width={dimention.width} height={dimention.height} className="rounded-xl" />
              {pinStep == "place" && <div className='absolute top-4 left-5 -rotate-2 opacity-75 text-6xl pointer-events-none'> Place the icon down here!</div>}

              <IconPlacement repList={currentRepInfo} showCreative={props.showCreative} focusedReps={diary.infoOnLocation} />

              {(!props.loaded && background == undefined) && <CenteredBackground bgList={props.templates} backgroundButt={backgroundButt} location={{ x: dimention.width / 2, y: dimention.height / 2 }} />}

              {/* this can probably go to dairy */}
              {preview && <PhotoOverlay item={preview.item} previewFile={preview.file} savePreviewButt={savePreviewButt(preview)} zIndex={25} closeFunc={() => { setPreview(undefined) }} canvasClassName='previewCanvas' />}
              <Diary diaryInfo={diary} resetDiary={resetDiary} updateButt={updateButt} showCreative={props.showCreative} setCurrentRepInfo={setCurrentRepInfo} currentRepInfo={currentRepInfo}
            setPreview={setPreview} removeRep={removeRep} linkableMaps={props.userMaps}/>
            </div>

          </div>
          {/* <Debug info={String(dimention.width)}  /> */}
        </div>
      </MapBanner>
      {loadEmoji && <div hidden={true}><EmojiPicker /></div>}
    </div>
  )
}


