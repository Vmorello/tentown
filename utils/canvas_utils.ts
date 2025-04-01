import { getSize } from "./icons_utils"
import { SrcImageVisibleItem, LoadedFileVisibleItem, FilteredCanvas } from "./drawableRep"

import { noSelectionString } from "./constants"
import { ClickedEffect } from "./Effects"


export interface CanvasUtilBase {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  // setup(background: HTMLImageElement, currentItem?: string): void
  startAnimation(): (() => void)
}

export interface DrawableItem {
  draw: (ctx: CanvasRenderingContext2D) => void
}


export class CanvasControl implements CanvasUtilBase {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  hover: SrcImageVisibleItem | null
  hoverVisable: boolean
  animationFrame?: number
  hoverOnPointerMove: (event: MouseEvent) => void
  paintBackground?: () => void

  drawables = [] as DrawableItem[]
  effects = [] as DrawableItem[]



  constructor(canvas: HTMLCanvasElement) {
    console.log("New Canvas util being created ")
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d")!
    this.hover = null
    this.hoverVisable = false
    this.setBackground(undefined)

    this.hoverOnPointerMove = (event: MouseEvent) => {
      if (this.hover) {
        // console.log(event)
        // console.log(getRadius(currentIcon))
        const size = getSize(this.hover.getIcon())
        this.hover.move(
          event.offsetX - size.w / 2,
          event.offsetY - size.h / 2
        )
        this.hoverVisable = true
      }
    }
    this.canvas.addEventListener("pointermove", this.hoverOnPointerMove)
    this.canvas.addEventListener("pointerout", (event) => {
      this.hoverVisable = false
    })
  }

  setup(background: HTMLImageElement, height:number,width:number,  currentItem = noSelectionString) {
    console.log("setting-up bg / hover")
    //console.log(background)
    this.setBackground(background, width, height, 0)

    if (currentItem === noSelectionString) {
      this.removeHover()
    } else {
      this.setHover(currentItem)
    }
  }

  addDrawable(drawable: DrawableItem) {
    this.drawables.push(drawable) 
  }

  removeDrawable(drawable: DrawableItem) {
    this.drawables.splice(this.drawables.indexOf(drawable), 1)
  }

  setBackground(background?: HTMLImageElement, width?: number, height?: number, filter?:number) {
    console.log("setting up background")
    this.clear()
    if (background === undefined) {
      this.paintBackground = this.clear
    } else {
      this.setPaintBackground(new LoadedFileVisibleItem(background, width!, height!))
      if(filter){
        this.updateBackgroundWithFilter()
      }

    }
    
  }

  setPaintBackground(background: DrawableItem) {
    background.draw(this.ctx)
    this.paintBackground = () => background.draw(this.ctx)
  }

  setHover(currentIcon: string) {
    this.hover = new SrcImageVisibleItem(currentIcon, -100, -100) //hover shouldnt show up till on mouse on map
  }

  removeHover() {
    this.hover = null
    this.hoverVisable = false
  }

  updateBackgroundWithFilter() {
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

    this.setPaintBackground(new FilteredCanvas(imageData, 0b1010))

  }


  animate() {
    return () => {
      this.animationFrame = requestAnimationFrame(this.animate())

      this.paintBackground!()

      // this.convertToGreyscale()

      // for (let i = 0; i < this.drawables.length; i++) {
      //   this.drawables[i].draw(this.ctx)
      // }

      for (let i = 0; i < this.effects.length; i++) {
        this.effects[i].draw(this.ctx)
      }


      if (this.hoverVisable) {
        // console.log("drawing hover")
        this.hover!.draw(this.ctx)
      }
    }
  }

  startAnimation() { //repList:Array<{icon:string,x:number,y:number}>
    cancelAnimationFrame(this.animationFrame!)
    // let visualReps = this.loadIcons(repList)
    return () => {
      this.animationFrame = requestAnimationFrame(this.animate())
    };
  }


  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  addClickEffect(x: number, y: number) {
    const newEffect = new ClickedEffect(x, y)
    this.effects.push(newEffect)

    this.set_ttl(this.effects, newEffect, 1000)
  }


  set_ttl(array: any[], item: any, time: number) {
    setTimeout(() => {
      array.splice(array.indexOf(item), 1)
      // console.log("removed")
    }, time)
  }

  removeEffects() {
    this.effects = []
  }

}

export const setDimentionWithSize = (image: HTMLImageElement, setDimention:React.Dispatch<React.SetStateAction<any>>, size?:number,) => {
  if (size) {
      if (image.naturalHeight > image.naturalWidth) {
          setDimention({ "height": size, "width": image.naturalWidth * size / image.naturalHeight })
      } else {
          setDimention({ "height": size * image.naturalHeight / image.naturalWidth, "width": size })
      }
  } else {
      setDimention({ "height": image.naturalHeight, "width": image.naturalWidth })
  }

}