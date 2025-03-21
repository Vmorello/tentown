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


export class LoadedFileVisibleItem implements DrawableItem {
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

export class FilteredCanvas implements DrawableItem {
  x: number
  y: number
  pic: ImageData


  constructor(image: ImageData, bitwise?:number, x: number = 0, y: number = 0) {

    const filteredImage = image;
    // Loop through each pixel
    for (let i = 0; i < filteredImage.data.length; i += 4) {
      const r = filteredImage.data[i];
      const g = filteredImage.data[i + 1];
      const b = filteredImage.data[i + 2];

      // Calculate the average for greyscale
      const grey = r * 0.3 + g * 0.59 + b * 0.11;

      // Set each channel to the grey value
      filteredImage.data[i] = filteredImage.data[i + 1] = filteredImage.data[i + 2] = grey;
    }

    // this.ctx.putImageData(imageData, 0, 0);
    this.pic = filteredImage

    this.x = x
    this.y = y
  }



  draw(ctx: CanvasRenderingContext2D) {
    ctx.putImageData(this.pic , this.x, this.y);
  }
}