// import Image from 'next/image' ;

import { get_image, getSize } from "./icons_utils";


export class SrcImageVisibleItem {
  x: number
  y: number
  pic?: HTMLImageElement
  width: number
  height: number


  constructor(icon: string, x: number, y: number) {
    this.x = x;
    this.y = y;

    let size = getSize(icon)

    // console.log(`i will put ${icon} with dimensions: ${temp_dimentions} at x:${x} y:${y} `)

    this.height = size.h
    this.width = size.w

    this.load(get_image(icon));
  }

  load(imageSrc: string) {
    this.pic = new Image();
    // console.log(imageSrc);
    this.pic.src = imageSrc;
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
    // console.log(this.x, this.y)
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.pic!, this.x, this.y, this.width, this.height);
  }
}


export class LoadedFileVisibleItem {
  x: number
  y: number
  pic?: HTMLImageElement
  height: number
  width:number 


  constructor(image: HTMLImageElement, sizeRatio:number, x: number = 0, y: number = 0) {
    this.pic = image;
    this.height=image.naturalHeight * sizeRatio
    this.width=image.naturalWidth * sizeRatio

    this.x = x;
    this.y = y;
  }


  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.pic!, this.x, this.y,this.width,this.height);
  }
}
