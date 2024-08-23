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



export class FileVisibleItem {
  x: number
  y: number
  pic?: HTMLImageElement
  dataSize: number
  height: number
  width:number 

  constructor(file: Blob, x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
    this.dataSize = file.size

    this.height=0
    this.width=0

    this.pic = new Image();
    this.pic.addEventListener("load", () => {

      this.height=this.pic!.naturalHeight
      this.width=this.pic!.naturalWidth
      URL.revokeObjectURL(this.pic!.src)
    })
    this.pic.src = URL.createObjectURL(file);
  }


  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.pic!, this.x, this.y,);
  }
}
