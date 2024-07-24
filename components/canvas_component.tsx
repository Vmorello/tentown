'use client';

import React, { useState, useEffect, UIEventHandler, MouseEventHandler } from 'react';

import { CanvasControl, CanvasUtilBase } from '../classes/canvas_utils';
import { get_image, } from '@/classes/icons_utils';

import Image from 'next/image';

type repType = {
  id:string
  icon: string
  x: number
  y: number
  radius: number
}

type canvasStateType = {
  ref: React.RefObject<HTMLCanvasElement>
  util?: CanvasUtilBase
}

export function CanvasComp(props: {
  width: number
  height: number
  onPress: (x_canvas: number, y_canvas: number, x_page: number, y_page: number) => void
  currentItem: string
  repList: Array<repType>
  background?: Blob
}) {

  const refreshRate = 100

  const [canvas, setCanvas] = useState({
    ref: React.createRef<HTMLCanvasElement>(),
    util: undefined
  } as canvasStateType);

  // This function happen once the component is mounted the first time
  useEffect(() => {
    // console.log("setting up canvas util")
    setCanvas({
      ref: canvas.ref,
      util: new CanvasControl(canvas.ref.current!)
    })
  }, [])

  // This function happen every time the component is updated
  useEffect(() => {
    if (canvas.util === undefined) { return } // Makes this safe to do canvas-util operations

    canvas.util.setup(props) //sets up hover and 

    setTimeout(() => {
      canvas.util!.startAnimation()() //props.repList
    }, refreshRate);
  })

  const onCanvasPress = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvas.util === undefined) { return }
    // console.log(event)
    props.onPress(event.nativeEvent.offsetX, event.nativeEvent.offsetY, event.pageX, event.pageY,)
  }


  return (

    <div className={'overflow-x-scroll relative'}>
     
      <canvas ref={canvas.ref} onClick={onCanvasPress}
        width={props.width} height={props.height}/>
      <IconPlacement repList={props.repList} />
    </div>
  )
}

function IconPlacement(props: {
  repList: Array<repType>
}) {
  const linkOptions = props.repList.map((rep: repType) => {
    // console.log(image)
    return <Image src={get_image(rep.icon)!} alt={"broke"} 
    height={rep.radius * 2} width={rep.radius * 2} 
    key={`Rep${rep.id}`}
    style={{
      pointerEvents: "none",
      position: "absolute",
      top: `${rep.y}px`,
      left: `${rep.x}px`
    }} />
  });

  return <>
    {linkOptions}
  </>
}

