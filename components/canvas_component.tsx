'use client';

import React, { useState, useEffect, UIEventHandler, MouseEventHandler } from 'react';

import {CanvasControl,CanvasUtilBase} from '../classes/canvas_utils';
// import { getVisibleItemBy } from '@/classes/visibleRep';
import { get_image, } from '@/classes/icons_utils';

import Image from 'next/image';

type repType = {
  icon:string
  x:number
  y:number
  radius:number
}

type canvasStateType = {
  ref:React.RefObject<HTMLCanvasElement>
  util?:CanvasUtilBase
}

export function CanvasComp(props:{
  width:number
  height:number
  onPress: (x_canvas:number,y_canvas:number,x_page:number,y_page:number) => void 
  currentItem:string
  repList:Array<repType>
  background?:Blob
}){

  const refreshRate = 100 

  const canvas_ref = React.createRef<HTMLCanvasElement>()
  const canvasState: canvasStateType = {
    ref: canvas_ref,
    util: undefined 
    }
  const [canvas,setCanvas] = useState(canvasState);
  const [hover, setHover]= useState(undefined as repType | undefined)

    
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
      canvas.util!.startAnimation([])() //props.repList
    }, refreshRate);
  })



  const onSideScroll = (event: React.MouseEvent<HTMLInputElement>)=>{
    // if (canvas.util === undefined) {return}
    if (event.target instanceof Element){
      // console.log(event)
      canvas.util!.updateOffset({x:event.target.scrollLeft,y:event.target.scrollTop})
    }
  } 

  const onCanvasPress = (event:React.MouseEvent<HTMLCanvasElement>)=>{
      if (canvas.util === undefined) {return}

      // console.log(event)

      props.onPress(event.nativeEvent.offsetX, event.nativeEvent.offsetY,event.pageX, event.pageY, )
      //action(event)
  }


  return(
    // <div className='overflow-y-scroll' 
    <div 
      onScroll={onSideScroll} 
      style={{ position: "relative"}}>
      <canvas ref={canvas_ref} onClick={onCanvasPress} //onPointerMove={onCanvasMove}
          width={props.width} height={props.height} //onPointerOut={onCanvasPointerOut}
          style={{border:"3px dotted #000000"}}/>
        <IconPlacement repList={props.repList}/>
        {/* <Hover rep={hover}/> */}
    </div>
  )
}

function IconPlacement(props:{
  repList:Array<repType>
          }) {
            const linkOptions = props.repList.map((rep:{ x: any; y: any;  icon:string; radius:number }) => {
            // console.log(image)
            return <Image src={get_image(rep.icon)!} alt={"broke"} height={rep.radius*2} width={rep.radius*2} style={{ 
              pointerEvents: "none",
              position: "absolute",
              top: `${rep.y}px`,
              left: `${rep.x}px`}}/>
          });

          return <>
            {linkOptions}
          </>
}

function Hover(props:{rep:repType|undefined}) {
    //in above class 
      // const onCanvasMove = (event:React.MouseEvent<HTMLCanvasElement>) => {
      //   setHover({icon: props.currentItem,
      //     x: event.pageX,
      //     y: event.pageY,
      //     radius: getImageSize(props.currentItem)
      //   })
      // };

      // const onCanvasPointerOut = (event:React.MouseEvent<HTMLCanvasElement>)=>{
      //     setHover(undefined)
      // }

      return <>{(props.rep==undefined) ? <></>:
      <Image src={get_image(props.rep.icon)} alt={"broke"} height={props.rep.radius*2} width={props.rep.radius*2} style={{ 
        pointerEvents: "none",
        position: "absolute",
        top: `${props.rep.y }px`,
        left: `${props.rep.x }px`}}/>}
        </>
}

