'use client';

import React, { useState, useEffect } from 'react';


import NextImage,{ StaticImageData } from 'next/image';

import inner from "/public/DnD/inner_wheel.png";
import middle from "/public/DnD/mid_wheel.png";
import outer from "/public/DnD/outer_wheel.png";
import inner_icon from "/public/DnD/inner_icon.png";
import middle_icon from "/public/DnD/mid_icon.png";
import outer_icon from "/public/DnD/outer_icon.png";
import frame from "/public/DnD/big_frame.png";


type canvasStateType = {
  ref:React.RefObject<HTMLCanvasElement>
  util?:{ canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D}
}

export function FortunesWheel(props:{}){



  return(<>
        
        <SingleWheelRing image={middle} animating={false}/>
        <SingleWheelRing image={outer} animating={true}/>
        <SingleWheelRing image={inner} animating={false}/>

        
        {/* <NextImage src={frame} alt={"broke"}/> */}



        <button style={{ position: "fixed", top: "725px", left:"30%"}}
        ><NextImage src={outer_icon} width={100} height={100} alt={"broke"}/></button>
        <button style={{ position: "fixed", top: "725px", left:"45%"}}
        ><NextImage src={middle_icon} width={100} height={100} alt={"broke"}/></button>
        <button style={{ position: "fixed", top: "725px", left:"60%"}}
        ><NextImage src={inner_icon} width={100} height={100} alt={"broke"}/></button>
    </>)
}



function SingleWheelRing(props:{ image: StaticImageData, animating:boolean} ){
    const [canvas,setCanvas] = useState({
        ref: React.createRef<HTMLCanvasElement>(),
        util: undefined 
        } as canvasStateType);

        const refreshRate = 100 
        
      // This function happen once the component is mounted the first time
      useEffect(()=>{
        setCanvas({
          ref: canvas.ref,
          util: new CanvasWheelControl(canvas.ref.current!,props.image)
        })
      }, [])
      

    return <canvas ref={canvas.ref} //onClick={onCanvasPress} 
    width={700} height={700} 
    style={{border:"3px dotted #000000", position: "fixed", top: "5px",}}/>

}



class CanvasWheelControl {
    canvas:HTMLCanvasElement
    ctx:CanvasRenderingContext2D
    image: HTMLImageElement

    animating: boolean
    animationFrame?:number
    fps:number = 20
    then:number = Date.now();

    angle:number = 0

    constructor(canvas:HTMLCanvasElement, image: StaticImageData) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d")!
            this.ctx.translate(canvas.width/4,canvas.height/4);
        this.image = new Image();
        this.image.src = image.src
        this.image.addEventListener("load",()=>{
            this.draw()
            this.toggleAnimation()
        })
        this.animating =false
      }

    //   clear() {
    //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //   }

      draw(){
        console.log("drawing")
        this.ctx.drawImage(this.image,-this.image.width/2,-this.image.width/2);
      }
    
      toggleAnimation() {
        console.log("toggling animating")
        if(this.animating){//Stop animation
            cancelAnimationFrame(this.animationFrame!);
        } else { //Start animation
            console.log("gonna start animating")
            this.animationFrame = requestAnimationFrame(this.animate());
        }
      }

      animate() {
        return () => {

            const now = Date.now();
            const elapsed = now - this.then;

            this.animationFrame = requestAnimationFrame(this.animate());

            // if enough time has elapsed, draw the next frame

            if (elapsed > (1000/this.fps)) {

                // Get ready for next frame by setting then=now, but also adjust for your
                // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
                this.then = now - (elapsed % (1000/this.fps));

            this.angle+=.005;
            this.ctx.rotate(this.angle)
            this.draw()
        };
      }
    }
    
}
