'use client';

import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import { v4 as uuidv4 } from 'uuid';

import { IconPlacement } from '@/components/IconPlacement'
import { Diary } from './DiaryComponents'
import { CardSelect } from './options_component'
import { Debug } from './debug_'
import { get_icon_list, getRadius, getSize } from '@/classes/icons_utils'
import { bgBlueHex, noSelectionString, padBlueHex, saveQuality } from "@/classes/constants"
import { MemoryListed } from './MemoryListed';
import useCanvas from './canvas/hook';
import Aligner from './wrappers/aligner';
import { PhotoOverlay } from './PhotoOverlay';

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
  savable: boolean
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

  const [activeTab, setActiveTab] = useState(0);

  const [preview, setPreview] = useState(undefined as { item: representation, file: File } | undefined)


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

  //This weird typing lets me use this function somewhere where I would use a click event as well
  const CanvasPressed = (canvasX: number, canvasY: number) => {
    canvasOnclickSwitch(canvasX, canvasY)
    canvasUtil?.addClickEffect(canvasX, canvasY)
  }


  const canvasOnclickSwitch = (xCanvas: number, yCanvas: number) => {
    resetDiary()

    setPreview(undefined)

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
        x: xCanvas,
        y: yCanvas,
        infoOnLocation: infoOnLocation
      })
    }
    else if (currentItem != noSelectionString) {
      addRep(xCanvas, yCanvas)
      setCurrentItem(noSelectionString)
    }

    console.log(`clicked at x:${xCanvas} y:${yCanvas} in the canvas. The info at this location found is ${infoOnLocation}`)//offset set at x:${offsetX} y:${offsetY}.
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

    if (type === "Storage") {
      if (inputFileObject.value === null) {
        return
      }
      getMapFileFromStorage(inputFileObject.value)
    } else {
      if (inputFileObject.files === null) {
        return
      }
      updateBackgroundAndSize(inputFileObject.files[0])
    }

    //event.target.files![0].name


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


  const savePreviewButt = (preview: { item: representation, file: File }) => () => {


    const pushPreview = async () => {

      const { data: { user } } = await supabase.auth.getUser()

      const uuid = `${user!.id}/${uuidv4()}`

      const { data, error } = await supabase
        .storage
        .from('MapCollection')
        .upload(uuid, (document.getElementsByClassName("previewCanvas")[0] as HTMLCanvasElement).toDataURL("image/jpeg", saveQuality), {
          upsert: true,
          contentType: "image/jpeg",
        })
      console.log({ data, error })
      if (error) {
        console.error("Failed saving preview image")
        return
      }

      const infoCopy = currentRepInfo.slice()
      const listIndex = infoCopy.findIndex(indexOf => preview.item.id === indexOf.id)

      infoCopy[listIndex].image_storage ?
        infoCopy[listIndex].image_storage!.push(uuid)
        : infoCopy[listIndex].image_storage = [uuid]
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

    console.log("I am about to update the DB")
    updateIcons()
  }

  const tabs = props.showCreative ? ["See Memories", "Add a Pin",] : ["See Memories"]
  //==================================================================

  return (
    <div style={{ backgroundColor: bgBlueHex }}>

      {!props.savable && props.showCreative ?
        <div className="bg-purple-600 text-white text-center p-3 mb-2">
          This will not be saved, it is only a demo. Please log-in/register above to save!
        </div> : <></>}

      <Aligner canvasWidth={dimention.width + 355}>
        <div className="flex space-x-5 p-5 rounded-xl" style={{ backgroundColor: padBlueHex }}>

          <div style={{ maxHeight: dimention.height, overflowY: "auto" }}>
            <div className="flex flex-col bg-white rounded-xl">
              <div className="flex space-x-2 border-b-2 border-gray-200 w-full">
                {tabs.map((tabLabel, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 -mb-px font-semibold text-gray-600 border-b-2
                    ${activeTab === index ? 'border-fuchsia-500  text-fuchsia-500 ' : 'border-transparent'}`}>
                    {tabLabel}
                  </button>
                ))}
              </div>


              {props.showCreative ?
                <CardSelect setCurrentItem={setCurrentItem}
                  currentItem={currentItem} pageRepList={iconList}
                  backgroundButt={backgroundButt} bgList={props.storageList} savable={props.savable}
                  loaded={props.loaded} newSaveButt={saveButt} updateButt={updateButt} />
                : <></>}
              <MemoryListed memoryList={currentRepInfo} showCreative={props.showCreative} actingCanvasClick={CanvasPressed} setPreview={setPreview}
               setCurrentRepInfo={setCurrentRepInfo}  userMaps={props.userMaps} removeRep={removeRep} userStorageImages={props.storageList} />
            </div>
          </div>

          <div className='relative'>
            <canvas ref={ref} onClick={(event) => { CanvasPressed(event.nativeEvent.offsetX, event.nativeEvent.offsetY) }}
              width={dimention.width} height={dimention.height} className="rounded-xl" />

            {preview ?
              <PhotoOverlay item={preview.item} previewFile={preview.file} savePreviewButt={savePreviewButt(preview)} zIndex={25} closeFunc={() => { setPreview(undefined) }} canvasClassName='previewCanvas' />
              : <></>}

            <Diary diaryInfo={diary} removeRep={removeRep}
              userMaps={props.userMaps} userStorageImages={props.storageList} resetDiary={resetDiary}
              currentRepInfo={currentRepInfo} setCurrentRepInfo={setCurrentRepInfo}
              updateButt={updateButt} showCreative={props.showCreative} />

            <IconPlacement repList={currentRepInfo} showCreative={props.showCreative} focusedReps={diary.infoOnLocation} />
          </div>


        </div>


        {/* <Debug info={String(dimention.width)}  /> */}

      </Aligner>
    </div>
  )
}
