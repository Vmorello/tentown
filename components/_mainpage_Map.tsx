'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { v4 as uuidv4 } from 'uuid';

import { IconPlacement } from '@/components/IconPlacement'
import { Diary } from './DiaryComponents'
import { Debug } from './debug_'
import { get_icon_list, getSize } from '@/utils/icons_utils'
import { noSelectionString, padBlueHex, saveQuality, maxWidth, sideWidth, startingHeight, filterDivision } from "@/utils/constants"
import { MemoryListed } from './MemoryListed';
import useCanvas from './canvas/hook';
import MapBanner from './MapBanner';
import { setDimentionWithSize } from '@/utils/canvas_utils'
import { BackgroundCard, CenteredBackground } from './4creator/BackgroundSelect';
import EmojiPicker from 'emoji-picker-react';
import PinButton from './PinButton';
import { saveCanvasImage, updateAllIconsDB, removeIconDB, getUser, newMapDB, getImageDB } from '@/utils/supabase/utils';
import { representation } from '@/utils/types';

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



const iconList = get_icon_list()

export function GotPage(props: repPage) {

  const { ref, canvasUtil } = useCanvas()

  const [mapId] = useState(props.mapId ? props.mapId : uuidv4())

  const [mapName, setMapName] = useState(props.name)

  const [currentRepInfo, setCurrentRepInfo] = useState(props.icons)
  const [dimention, setDimention] = useState({ "height": props.height, "width": props.width })
  const [currentItem, setCurrentItem] = useState(noSelectionString)
  const [diary, setDiary] = useState({
    x: 0,
    y: 0,
    infoOnLocation: [] as representation[],
  })
  const [background, setBackground] = useState(undefined as HTMLImageElement | undefined)
  const [backgroundSource, setBackgroundSource] = useState("Storage" as "Storage" | "File")

  const [pinStep, setPinStep] = useState("button" as "button" | "selection" | "place" | "describe")

  const [loadEmoji, setLoadEmoji] = useState(false)

  const [openedIndex, setOpenedIndex] = useState(undefined as number | undefined)

  const [colorFilter, setColorFilter] = useState(0b1010)


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

  const CanvasPressed = (xCanvas: number, yCanvas: number) => {
    resetDiary()

    // removeFilterAt(xCanvas, yCanvas)

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

    // console.log(`clicked at x:${xCanvas} y:${yCanvas} in the canvas. The info at this location found is ${infoOnLocation}`)//offset set at x:${offsetX} y:${offsetY}.
    canvasUtil?.addClickEffect(xCanvas, yCanvas)
  }


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
    updateAllIconsDB(info_copy)
    setCurrentRepInfo(info_copy)
  }

  const removeRep = (id: string) => () => {

    let info_copy = currentRepInfo.slice()

    const notThisId = (listOut: Array<representation>, item: representation) => {
      if (!(item.id === id)) {
        listOut.push(item)
      }
      return listOut
    }
    info_copy = info_copy.reduce(notThisId, [])
    resetDiary()
    setCurrentRepInfo(info_copy)
    removeIconDB([id])
  }


  // const removeFilterAt = (xCanvas: number, yCanvas: number) => {
  //   const yIndex = Math.floor((yCanvas / dimention.height) * filterDivision)
  //   const xIndex = Math.floor((xCanvas / dimention.width) * filterDivision)

  //   console.log(`x is ${xIndex} & y is ${yIndex}`)
  //   setColorFilter((current)=> {
  //     const newFilter  = current.slice()
  //     newFilter[xIndex][yIndex] = false

  //     return newFilter
  //   })
  // }


  //================ Diary functions =======================

  const resetDiary = () => {
    setDiary({
      x: 0,
      y: 0,
      infoOnLocation: [],
    });
    setOpenedIndex(undefined)
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
    const { data, error } = await getImageDB(storageName)
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

  const saveButt = async () => {
    console.log("Starting saving ")

    const { data: { user } } = await getUser()
    const bgStorageSelect = document.getElementById(`bgStorageSelect`) as HTMLInputElement;
    
    let backgroundName
    if (backgroundSource === "Storage") {
      backgroundName = bgStorageSelect.value // this is with the user name, value has it 
    } else if (backgroundSource === "File") {
      backgroundName = `${user!.id}/${mapName}`
      await saveCanvasImage( ref.current!, backgroundName)
    }

    canvasUtil?.removeEffects()
    canvasUtil?.removeHover()

    const mapSaveresult = newMapDB(mapId, user!.id, mapName, backgroundName!, dimention.width, dimention.height)
    updateAllIconsDB(currentRepInfo)
    router.push(`/${mapSaveresult}/map`)
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
              {props.loaded ? <></>
              // <button onClick={updateButt} className='bg-gradient-to-br from-amber-300 via-pink-400 to-indigo-500 py-3 px-5 rounded-lg' > Update</button>
                : <button onClick={saveButt} className='bg-gradient-to-br from-amber-300 via-pink-400 to-indigo-500 py-3 px-5 rounded-lg'>
                  Save This Map / Lock Background</button>}
            </div>}

          <div className="flex space-x-5 p-5 rounded-xl " style={{ backgroundColor: padBlueHex }}>

            {/* This is the Sidebar/ Underbar */}
            <div className="overflow-y-auto relative" style={{ maxHeight: dimention.height }}>
              <div className="flex flex-col bg-indigo-400 rounded-xl lg:w-96 lg:min-h-96" >
                {props.showCreative && <PinButton pinStep={pinStep} setPinStep={setPinStep} setCurrentItem={setCurrentItem} />}

                <MemoryListed memoryList={currentRepInfo} showCreative={props.showCreative} actingCanvasClick={CanvasPressed}
                  setCurrentRepInfo={setCurrentRepInfo} userMaps={props.userMaps} removeRep={removeRep}
                  openIndex={openedIndex} />

                {(!props.loaded && background != undefined) && <BackgroundCard bgList={props.templates} backgroundButt={backgroundButt} />}
              </div>
            </div>


            {/* This is the Map */}
            <div className='relative bg-indigo-400 rounded-xl'>
              <canvas ref={ref} onClick={(event) => { CanvasPressed(event.nativeEvent.offsetX, event.nativeEvent.offsetY) }}
                width={dimention.width} height={dimention.height} className="rounded-xl" />
              {pinStep == "place" && <div className='absolute top-4 left-5 -rotate-2 opacity-75 text-6xl pointer-events-none'> Place the icon down here!</div>}

              <IconPlacement repList={currentRepInfo} showCreative={props.showCreative} focusedReps={diary.infoOnLocation} />

              {(!props.loaded && background == undefined) && <CenteredBackground bgList={props.templates} backgroundButt={backgroundButt} location={{ x: dimention.width / 2, y: dimention.height / 2 }} />}

              <Diary diaryInfo={diary} resetDiary={resetDiary} showCreative={props.showCreative} setCurrentRepInfo={setCurrentRepInfo} currentRepInfo={currentRepInfo}
                removeRep={removeRep} linkableMaps={props.userMaps} />
            </div>

          </div>
          {/* <Debug info={String(dimention.width)}  /> */}
        </div>
      </MapBanner>
      {loadEmoji && <div hidden={true}><EmojiPicker /></div>}
    </div>
  )
}


