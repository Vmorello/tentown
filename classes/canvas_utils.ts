import { getRadius } from "./icons_utils";
import { SrcImageVisibleItem ,FileVisibleItem} from "./drawableRep";


export interface CanvasUtilBase {
  canvas:HTMLCanvasElement
  ctx:CanvasRenderingContext2D
  setup(props:any): void
  startAnimation(props:any): (()=> void)
  updateOffset:(offset:{x:number,y:number})=>void
  offset:{
    x: number,
    y: number
  }
}

interface setupInit {
  background?: Blob
  currentItem:string
  onPress:(offset: { x: number; y: number; }) => (event: {pageX:number,pageY:number}) => void 
}

export class CanvasControl implements CanvasUtilBase {
  canvas:HTMLCanvasElement
  ctx:CanvasRenderingContext2D
  offset:{
    x: number,
    y: number
  }
  hover:SrcImageVisibleItem|null
  hoverVisable:boolean
  animationFrame?:number
  hoverOnPointerMove?:(event:MouseEvent)=>void
  paintBackground?:()=>void


    constructor(canvas:HTMLCanvasElement, offset = { x: 0, y: 0 }) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d")!
      this.offset = offset;
      this.hover = null
      this.hoverVisable =false
    }

    setup(props:setupInit){
      // console.log("set-up bg & hover")
      this.setBackground(props.background);
      this.offset.x = - this.canvas.offsetLeft
    if (props.currentItem === "-none-") {
      this.removeHover();
    } else {
      this.setHover(props.currentItem);
    }


    }

    setBackground(background?:Blob) {
      if (background === undefined) {
        this.paintBackground = this.clear;
      } else {
        this.paintBackground = this.setPaintBackground(
          new FileVisibleItem(background, 0, 0)
        );
      }
    }

    setPaintBackground(background:FileVisibleItem) {
      return () => background.draw(this.ctx);
    }
  
    setHover(currentIcon:string) {
      this.hover = new SrcImageVisibleItem(currentIcon, -100, -100)
      this.hoverVisable = false
  
      this.hoverOnPointerMove = (event:MouseEvent) => {
        
        if (!(this.hover === null||this.hover === undefined)) {
          // console.log(event)
          // console.log(getRadius(currentIcon))
          this.hover.move(
            event.offsetX  - getRadius(currentIcon),
            event.offsetY  - getRadius(currentIcon)
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

    updateOffset(offset:{x:number,y:number}){
      this.offset = offset
    }
  
    // loadIcons(rep_list:Array<{icon:string,x:number,y:number}>) {
    //   let rep;
    //   let visualReps = [];
    //   for (let i = 0; i < rep_list.length; i++) {
    //     rep = rep_list[i];
    //     // console.log(rep)
    //     visualReps.push(
    //       getVisibleItemBy(["src"],get_image(rep["icon"]), rep["x"], rep["y"])
    //     );
    //   }
    //   return visualReps;
    // }


    killPreviousAnimation() {
      cancelAnimationFrame(this.animationFrame!);
    }
  
    animate() {
      return () => {
        this.animationFrame = requestAnimationFrame(this.animate());//visualReps
        //this.clear();
        this.paintBackground!();
        //console.log(visualReps);
        // for (let i = 0; i < visualReps.length; i++) {
        //   visualReps[i].draw(this.ctx);
        // }
        if (this.hoverVisable) {
          // console.log("drawing hover");
          this.hover!.draw(this.ctx);
        }
      };
    }
  
    startAnimation() { //repList:Array<{icon:string,x:number,y:number}>
      this.killPreviousAnimation();
      // let visualReps = this.loadIcons(repList);
      return () => {
        this.animationFrame = requestAnimationFrame(this.animate());//visualReps
      };
    }



    clear(clearColor = "#FFFFFF") {
      //console.log(`trying to clear the background with ${clearColor}`);
      this.ctx.fillStyle = clearColor;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}