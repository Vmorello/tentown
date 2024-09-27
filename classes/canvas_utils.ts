import { getSize } from "./icons_utils";
import { SrcImageVisibleItem, LoadedFileVisibleItem } from "./drawableRep";

import { noSelectionString } from "./constants"


export interface CanvasUtilBase {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  setup(background: HTMLImageElement, currentItem?: string ): void
  startAnimation(): (() => void)
}


export class CanvasControl implements CanvasUtilBase {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  hover: SrcImageVisibleItem | null
  hoverVisable: boolean
  animationFrame?: number
  hoverOnPointerMove?: (event: MouseEvent) => void
  paintBackground?: () => void


  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d")!
    this.hover = null
    this.hoverVisable = false
    this.setBackground(undefined);
  }

  setup(background: HTMLImageElement, currentItem=noSelectionString) {
    console.log("setting-up bg / hover")
    //console.log(background)

    this.setBackground(background);
    if (currentItem === noSelectionString) {
      this.removeHover();
    } else {
      this.setHover(currentItem);
    }
  }



  setBackground(background?: HTMLImageElement) {
    this.clear()
    if (background === undefined) {
      this.paintBackground = this.clear
    } else {
      this.paintBackground = this.setPaintBackground(
        new LoadedFileVisibleItem(background)
      )
    }
  }

  setPaintBackground(background: LoadedFileVisibleItem) {
    return () => background.draw(this.ctx);
  }

  setHover(currentIcon: string) {
    this.hover = new SrcImageVisibleItem(currentIcon, -100, -100)
    this.hoverVisable = false

    this.hoverOnPointerMove = (event: MouseEvent) => {

      if (!(this.hover === null || this.hover === undefined)) {
        // console.log(event)
        // console.log(getRadius(currentIcon))
        const size = getSize(currentIcon)
        this.hover.move(
          
          event.offsetX - size.w/2,
          event.offsetY - size.h/2
        );
        this.hoverVisable = true;
      }
    };
    this.canvas.addEventListener("pointermove", this.hoverOnPointerMove);

    this.canvas.addEventListener("pointerout", (event) => {
      this.hoverVisable = false;
    });
  }

  removeHover() {
    this.hover = null;
    this.hoverVisable = false;
  }

  animate() {
    return () => {
      this.animationFrame = requestAnimationFrame(this.animate())
      this.paintBackground!()
      if (this.hoverVisable) {
        // console.log("drawing hover");
        this.hover!.draw(this.ctx)
      }
    };
  }

  startAnimation() { 
    cancelAnimationFrame(this.animationFrame!)
    return () => {
      this.animationFrame = requestAnimationFrame(this.animate())
    };
  }


  clear() {
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
  }


}