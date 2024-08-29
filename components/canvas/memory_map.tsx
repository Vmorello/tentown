'use client';

import Image from 'next/image';

import React, { useState, useEffect} from 'react';

import { get_image, } from '@/classes/icons_utils';
import { representation } from '@/components/representation_page';
import { BaseCanvas } from './base'

import Aligner from '../wrappers/aligner';


export function MMapCanvasComp (props: {
  width: number
  height: number
  onPress: (xCanvas: number, yCanvas: number, xPage: number, yPage: number) => void
  background?: HTMLImageElement


  currentItem: string
  repList: Array<representation>
  showCreative: boolean
}) {

  return (
    <div>
      <Aligner canvasWidth={props.width}>
        <BaseCanvas  onPress={props.onPress} hoverIcon={props.currentItem}
          width={props.width} height={props.height} background={props.background}/>
        <IconPlacement  repList={props.repList} showCreative={props.showCreative} />
      </Aligner>
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

  return <div>
    {linkOptions}
  </div>
}






