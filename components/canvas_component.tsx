'use client';

import React, { useState, useEffect, UIEventHandler } from 'react';

import {CanvasControl,CanvasUtilBase} from '../classes/canvas_utils';


type canvasStateType = {
  ref:React.RefObject<HTMLCanvasElement>
  util?:CanvasUtilBase
}

export function CanvasComp(props:{
  width:number
  height:number
  offsetX?:number
  offtsetY?:number
  onPress: (x:number,y:number,offsetX:number,offsetY:number) => void 
  currentItem:string
  repList:Array<{icon:string,x:number,y:number}>
  background?:string|Blob
}){

  const refreshRate = 100 

  const canvas_ref = React.createRef<HTMLCanvasElement>()
  const canvasState: canvasStateType = {
    ref: canvas_ref,
    util: undefined 
    }
  const [canvas,setCanvas] = useState(canvasState);
    
  // This function happen once the component is mounted the first time
  useEffect(()=>{
    const canvas_util = new CanvasControl(canvas_ref.current!)

    // console.log("setting up canvas util")
    setCanvas({
      ref: canvas_ref,
      util: canvas_util
    })
    // canvas_util.setup(props)
  }, [])

  // This function happen every time the component is updated
  useEffect(()=>{
    if (canvas.util === undefined) 
      {return} // Makes this safe to do canvas-util operations

    canvas.util.setup(props) //sets up hover and 
    
    setTimeout(()=> {
      canvas.util!.startAnimation(props.repList)()
    }, refreshRate);
  })

  const onSideScroll = (event: React.MouseEvent<HTMLInputElement>)=>{
    // if (canvas.util === undefined) {return}
    if (event.target instanceof Element){
      console.log(event)
      canvas.util!.updateOffset({x:event.target.scrollLeft,y:event.target.scrollTop})
    }
  } 

  const onCanvasPress = (event:{pageX:number,pageY:number})=>{
      if (canvas.util === undefined) {return}

      // console.log(event)

      props.onPress(event.pageX, event.pageY,
                    canvas.util.offset.x , 
                    canvas.util.offset.y )
      //action(event)
  }


  return(
    // <div className='overflow-y-scroll' 
    <div className="w-2/3"
      onScroll={onSideScroll} >
      <canvas ref={canvas_ref} onClick={onCanvasPress} 
          width={props.width} height={props.height}
          style={{border:"3px dotted #000000"}}/>
    </div>
  )
}
