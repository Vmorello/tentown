'use client';

import Image from 'next/image';

import React, { useState, useEffect} from 'react';

import { get_image, } from '@/classes/icons_utils';
import { representation } from '@/components/representation_page';
import { BaseCanvas } from './base'



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

  return <div >
    {linkOptions}
  </div>
}




export function MMapCanvasComp (props: {
  width: number
  height: number
  onPress: (xCanvas: number, yCanvas: number, xPage: number, yPage: number) => void
  background?: HTMLImageElement


  currentItem: string
  repList: Array<representation>
  showCreative: boolean
}) {


  const [isWindowSmall4Image, setIsWindowSmall4Image] = useState(false)


  // This function happen once the component is mounted the first time
  useEffect(() => {

    window.addEventListener('resize', updateSizes)

    return () => window.removeEventListener('resize', updateSizes);
  }, [])


  const updateSizes = () => {
    //console.log(`comparing window ${window.innerWidth} to prop ${props.width}`)
    setIsWindowSmall4Image(window.innerWidth < props.width)
  }


  return (
    <div className='relative'>
    {/* <div className={isWindowSmall4Image ? "absolute left-0" : 'relative'} >  to be replaced with wrapper*/}
      <BaseCanvas  onPress={props.onPress} hoverIcon={props.currentItem}
        width={props.width} height={props.height} background={props.background}/>
      <IconPlacement repList={props.repList} showCreative={props.showCreative} />
    </div>
  )
}







