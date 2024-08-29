'use client';

import React, { useState, useEffect} from 'react';

import { CanvasControl } from '@/classes/canvas_utils';

type canvasStateType = {
  ref: React.RefObject<HTMLCanvasElement>
  util?: CanvasControl
}

export function BaseCanvas(props: {
  width: number
  height: number
  onPress: (xCanvas: number, yCanvas: number, xPage: number, yPage: number) => void
  
  background?: HTMLImageElement
  hoverIcon?: string
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

    canvas.util.setup(props.background!, props.hoverIcon) 

    setTimeout(() => {
      canvas.util!.startAnimation()() 
    }, refreshRate);
  })



  const onCanvasPress = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvas.util === undefined) { return }
    // console.log(event) 
    props.onPress(event.nativeEvent.offsetX, event.nativeEvent.offsetY, event.pageX, event.pageY,)
  }


  return (
      <canvas ref={canvas.ref} onClick={onCanvasPress}
        width={props.width} height={props.height} className="border-dotted border-2 border-stone-400" />
  )
}


