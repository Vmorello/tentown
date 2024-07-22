'use client';

import React, { useState, useEffect } from 'react';


import NextImage, { StaticImageData } from 'next/image';

import inner from "/public/DnD/inner_wheel.png";
import middle from "/public/DnD/mid_wheel.png";
import outer from "/public/DnD/outer_wheel.png";
import inner_icon from "/public/DnD/inner_icon.png";
import middle_icon from "/public/DnD/mid_icon.png";
import outer_icon from "/public/DnD/outer_icon.png";
import frame from "/public/DnD/big_frame.png";
import gsap from 'gsap';


type canvasStateType = {
    ref: React.RefObject<HTMLCanvasElement>
    util?: { canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, toggleSpin: () => void }

}
const store = {
    outer: { image: outer, icon: outer_icon, position: "30%" },
    middle: { image: middle, icon: middle_icon, position: "45%" },
    inner: { image: inner, icon: inner_icon, position: "60%" },
}

export function FortunesWheel(props: {}) {



    return (<>

        <SingleWheelRing tag={"middle"} image={middle} icon={middle_icon} position={"45%"} />
        <SingleWheelRing tag={"outer"} image={outer} icon={outer_icon} position={"30%"} />
        <SingleWheelRing tag={"inner"} image={inner} icon={inner_icon} position={"60%"} />


        {/* <NextImage src={frame} alt={"broke"}/> */}

    </>)
}



function SingleWheelRing(props: { tag: string, image: StaticImageData, icon: StaticImageData, position: string }) {
    const [canvas, setCanvas] = useState({
        ref: React.createRef<HTMLCanvasElement>(),
        util: undefined
    } as canvasStateType);

    const refreshRate = 100

    // This function happen once the component is mounted the first time
    useEffect(() => {
        setCanvas({
            ref: canvas.ref,
            util: new CanvasWheelControl(canvas.ref.current!, props.image)
        })
    }, [])


    const toggleRotate = () => {
        console.log(props.tag)
        canvas.util!.toggleSpin()
    }


    return <>
        <canvas ref={canvas.ref} //onClick={onCanvasPress} 
            width={686} height={702}
            style={{ border: "3px dotted #000000", position: "fixed", top: "5px", }} />
        <button style={{ position: "fixed", top: "725px", left: props.position }} onClick={toggleRotate}>
            <NextImage src={props.icon} width={100} height={100} alt={"broke"} />
        </button>
    </>

}



class CanvasWheelControl {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    image: HTMLImageElement

    animationFrame?: number
    fps: number = 20
    then: number = Date.now();

    speed: number = 0

    constructor(canvas: HTMLCanvasElement, image: StaticImageData) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d")!
        this.ctx.translate(canvas.width / 2, canvas.height / 2);
        this.image = new Image();
        this.image.src = image.src
        this.image.addEventListener("load", () => {
            this.draw()
            console.log("gonna start animating")
            this.animationFrame = requestAnimationFrame(this.animate());
        })
    }

    clear() {
        this.ctx.clearRect(-this.image.width / 2, -this.image.width / 2, this.canvas.width, this.canvas.height);
    }

    draw() {
        //for LOCAL
        //this.ctx.drawImage(this.image, -this.image.width / 2, -this.image.width / 2);
        //for PROD
        this.ctx.drawImage(this.image,0,0);
    }


    animate() {
        return () => {
            this.animationFrame = requestAnimationFrame(this.animate());

            const now = Date.now();
            const elapsed = now - this.then;
            if (elapsed > (1000 / this.fps)) {

                // Get ready for next frame by setting then=now, but also adjust for your
                // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
                this.then = now - (elapsed % (1000 / this.fps));

                this.update()
            };
        }
    }


    update() {
        this.ctx.rotate(this.speed)
        this.clear()
        this.draw()
    }

    toggleSpin() {

        if (this.speed == 0) {
            gsap.to(this, { speed: .2, duration: 3 })
            // this.speed=.1;
        } else {
            gsap.to(this, { speed: 0, duration: 3 })
            // this.speed=0;
        }
    }

}
