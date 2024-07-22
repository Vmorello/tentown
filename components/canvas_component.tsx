'use client';

import React, { useState, useEffect, UIEventHandler, MouseEventHandler } from 'react';

import { CanvasControl, CanvasUtilBase } from '../classes/canvas_utils';
// import { getVisibleItemBy } from '@/classes/visibleRep';
import { get_image, } from '@/classes/icons_utils';

import Image from 'next/image';

type repType = {
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



  // const onSideScroll = (event: React.MouseEvent<HTMLInputElement>)=>{
  //   // if (canvas.util === undefined) {return}
  //   if (event.target instanceof Element){
  //     // console.log(event)
  //     canvas.util!.updateOffset({x:event.target.scrollLeft,y:event.target.scrollTop})
  //   }
  // } 

  const onCanvasPress = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvas.util === undefined) { return }

    // console.log(event)

    props.onPress(event.nativeEvent.offsetX, event.nativeEvent.offsetY, event.pageX, event.pageY,)
    //action(event)
  }


  return (
    // <div className='overflow-y-scroll' 
    <div
      // onScroll={onSideScroll} 
      style={{ position: "relative" }}>
      <canvas ref={canvas.ref} onClick={onCanvasPress}
        width={props.width} height={props.height}
        style={{ border: "3px dotted #000000" }} />
      <IconPlacement repList={props.repList} />
    </div>
  )
}

function IconPlacement(props: {
  repList: Array<repType>
}) {
  const linkOptions = props.repList.map((rep: { x: any; y: any; icon: string; radius: number }) => {
    // console.log(image)
    return <Image src={get_image(rep.icon)!} alt={"broke"} height={rep.radius * 2} width={rep.radius * 2} style={{
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

// function Hover(props:{rep:repType|undefined}) {
//     //in above class
//       // const onCanvasMove = (event:React.MouseEvent<HTMLCanvasElement>) => {
//       //   setHover({icon: props.currentItem,
//       //     x: event.pageX,
//       //     y: event.pageY,
//       //     radius: getImageSize(props.currentItem)
//       //   })
//       // };

//       // const onCanvasPointerOut = (event:React.MouseEvent<HTMLCanvasElement>)=>{
//       //     setHover(undefined)
//       // }
//      // in Canvas tag: //onPointerMove={onCanvasMove} //onPointerOut={onCanvasPointerOut}

//       return <>{(props.rep==undefined) ? <></>:
//       <Image src={get_image(props.rep.icon)} alt={"broke"} height={props.rep.radius*2} width={props.rep.radius*2} style={{
//         pointerEvents: "none",
//         position: "absolute",
//         top: `${props.rep.y }px`,
//         left: `${props.rep.x }px`}}/>}
//         </>
// }

