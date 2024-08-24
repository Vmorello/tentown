'use client';

import React, { useState, useEffect} from 'react';

import { CanvasControl } from '@/classes/canvas_utils';
import { get_image, } from '@/classes/icons_utils';

import Image from 'next/image';
import { representation } from './representation_page';

type canvasStateType = {
  ref: React.RefObject<HTMLCanvasElement>
  util?: CanvasControl
}

export function MMapCanvasComp(props: {
  width: number
  height: number
  onPress: (xCanvas: number, yCanvas: number, xPage: number, yPage: number) => void
  
  
  background?: HTMLImageElement
  currentItem: string
  repList: Array<representation>
  showCreative: boolean
}) {

  const refreshRate = 100

  const [canvas, setCanvas] = useState({
    ref: React.createRef<HTMLCanvasElement>(),
    util: undefined
  } as canvasStateType);

  const [isWindowSmall4Image, setIsWindowSmall4Image] = useState(false)


  // This function happen once the component is mounted the first time
  useEffect(() => {
    // console.log("setting up canvas util")
    setCanvas({
      ref: canvas.ref,
      util: new CanvasControl(canvas.ref.current!)
    })

    window.addEventListener('resize', updateSizes)

    return () => window.removeEventListener('resize', updateSizes);
  }, [])

  // This function happen every time the component is updated
  useEffect(() => {
    if (canvas.util === undefined) { return } // Makes this safe to do canvas-util operations

    canvas.util.setup(props) 

    updateSizes()

    setTimeout(() => {
      canvas.util!.startAnimation()() 
    }, refreshRate);
  })

  const updateSizes = () => {
    //console.log(`comparing window ${window.innerWidth} to prop ${props.width}`)
    setIsWindowSmall4Image(window.innerWidth < props.width)
  }

  const onCanvasPress = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvas.util === undefined) { return }
    // console.log(event) 
    props.onPress(event.nativeEvent.offsetX, event.nativeEvent.offsetY, event.pageX, event.pageY,)
  }


  return (
    <div className={isWindowSmall4Image ? "absolute left-0" : 'relative'} >

      <canvas ref={canvas.ref} onClick={onCanvasPress}
        width={props.width} height={props.height} />
      <IconPlacement repList={props.repList} showCreative={props.showCreative} />
    </div>
  )
}






function IconPlacement(props: {
  repList: Array<representation>
  showCreative: boolean
}) {
  const linkOptions = props.repList.map((rep: representation) => {
    // console.log(image)
    if (!rep.hidden || props.showCreative) {
      return <Image src={get_image(rep.icon)!} alt={"broke"}
        height={rep.height} width={rep.width}
        key={`Rep${rep.id}`}
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: `${rep.y}px`,
          left: `${rep.x}px`
        }} />
    }
  })

  return <>
    {linkOptions}
  </>
}

