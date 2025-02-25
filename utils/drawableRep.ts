import { get_image, getSize } from "./icons_utils";
import { DrawableItem } from "./canvas_utils"


export class SrcImageVisibleItem implements DrawableItem {
  x: number
  y: number
  icon: string
  pic?: HTMLImageElement
  width: number
  height: number


  constructor(icon: string, x: number, y: number, ) {
    this.x = x
    this.y = y

    this.icon = icon
    let size = getSize(icon)

    // console.log(`i will put ${icon} with dimensions: ${temp_dimentions} at x:${x} y:${y} `)

    this.height = size.h
    this.width = size.w

    this.load(get_image(icon))
  }

  load(imageSrc: string) {
    this.pic = new Image()
    // console.log(imageSrc);
    this.pic.src = imageSrc
  }


  move(x: number, y: number) {
    this.x = x
    this.y = y
    // console.log(this.x, this.y)
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.pic!, this.x, this.y, this.width, this.height);
  }

  getIcon() {
    return this.icon
  }
}


export class LoadedFileVisibleItem {
  x: number
  y: number
  pic?: HTMLImageElement
  height: number
  width: number


  constructor(image: HTMLImageElement, width: number, height: number, x: number = 0, y: number = 0) {
    this.pic = image
    this.height = height
    this.width = width

    this.x = x
    this.y = y
  }



  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.pic!, this.x, this.y, this.width, this.height)
  }
}
