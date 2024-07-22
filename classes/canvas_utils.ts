import { getRadius } from "./icons_utils";
import { SrcImageVisibleItem, FileVisibleItem } from "./drawableRep";


export interface CanvasUtilBase {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  setup(input: setupInit): void
  startAnimation(): (() => void)
}

interface setupInit {
  background?: Blob
  currentItem: string
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
  }

  setup(input: setupInit) {
    // console.log("set-up bg & hover")
    this.setBackground(input.background);
    if (input.currentItem === "-none-") {
      this.removeHover();
    } else {
      this.setHover(input.currentItem);
    }


  }

  setBackground(background?: Blob) {
    if (background === undefined) {
      this.paintBackground = this.clear;
    } else {
      this.paintBackground = this.setPaintBackground(
        new FileVisibleItem(background, 0, 0)
      );
    }
  }

  setPaintBackground(background: FileVisibleItem) {
    return () => background.draw(this.ctx);
  }

  setHover(currentIcon: string) {
    this.hover = new SrcImageVisibleItem(currentIcon, -100, -100)
    this.hoverVisable = false

    this.hoverOnPointerMove = (event: MouseEvent) => {

      if (!(this.hover === null || this.hover === undefined)) {
        // console.log(event)
        // console.log(getRadius(currentIcon))
        this.hover.move(
          event.offsetX - getRadius(currentIcon),
          event.offsetY - getRadius(currentIcon)
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



  clear(clearColor = "#FFFFFF") {
    //console.log(`trying to clear the background with ${clearColor}`);
    this.ctx.fillStyle = clearColor
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }
}