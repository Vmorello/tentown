'use client';

import Image from 'next/image';

import React, { useState, useEffect } from 'react';

import { get_image, } from '@/classes/icons_utils';
import { representation } from '@/components/representation_page';
import useCanvas from './hook';


import Aligner from '../wrappers/aligner';

interface MMapType {
  width: number
  height: number
  onPress: (xCanvas: number, yCanvas: number, xPage: number, yPage: number) => void
  background?: HTMLImageElement
  currentItem: string
  repList: Array<representation>
  showCreative: boolean
}


export function MMapCanvasComp({ width, height, onPress, background, currentItem, repList, showCreative, }: MMapType) {

  const { ref, canvasUtil } = useCanvas();

  useEffect(() => {
    if (canvasUtil === undefined) { return } // Makes this safe to do canvas-util operations

    canvasUtil.setup(background!, currentItem)

  })

  const onCanvasPress = (event: React.MouseEvent<HTMLCanvasElement>) => {
    onPress(event.nativeEvent.offsetX, event.nativeEvent.offsetY, event.pageX, event.pageY,)
    canvasUtil?.addClickEffect(event.nativeEvent.offsetX, event.nativeEvent.offsetY)
  }

  return (
    <Aligner canvasWidth={width}>
      <canvas ref={ref} onClick={onCanvasPress}
        width={width} height={height} className="border-dotted border-2 border-stone-400" />
      <IconPlacement repList={repList} showCreative={showCreative} />
    </Aligner>
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






