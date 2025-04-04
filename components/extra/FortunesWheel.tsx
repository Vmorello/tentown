'use client';

import React, { useState, useEffect } from 'react';


import NextImage, { StaticImageData } from 'next/image';

import inner from "/public/wheel/inner_wheel.webp";
import middle from "/public/wheel/mid_wheel.webp";
import outer from "/public/wheel/outer_wheel.webp";
import inner_icon from "/public/wheel/inner_icon.webp";
import middle_icon from "/public/wheel/mid_icon.webp";
import outer_icon from "/public/wheel/outer_icon.webp";
import frame_bottom from "/public/wheel/big_frame_bottom.webp";
import frame_top from "/public/wheel/big_frame_top.webp";
import frame_mid from "/public/wheel/mid_frame.webp";
import gsap from 'gsap';


type canvasStateType = {
    ref: React.RefObject<HTMLCanvasElement>
    util?: { canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, toggleSpin: (speed: number, timing: number) => void }

}
// const store = {
//     outer: { image: outer, icon: outer_icon, position: "30%" },
//     middle: { image: middle, icon: middle_icon, position: "45%" },
//     inner: { image: inner, icon: inner_icon, position: "60%" },
// }

export function FortunesWheel(props: {}) {



    return (<>
        <NextImage src={frame_bottom} height={frame_bottom.height} width={frame_bottom.width} alt={"broke"} style={{ position: "absolute", top: "400px" }} />
        <SingleWheelRing tag={"outer"} image={outer} icon={outer_icon} position={"30%"} speed={.1} timing={3} />

        <SingleWheelRing tag={"middle"} image={middle} icon={middle_icon} position={"45%"} speed={-.4} timing={Math.random() * 3} />

        <SingleWheelRing tag={"inner"} image={inner} icon={inner_icon} position={"60%"} speed={.3} timing={Math.random() * 6} />

        <NextImage src={frame_top} alt={"broke"} height={frame_top.height} width={frame_top.width} style={{ position: "absolute",top:"0px"  }} />

        <NextImage src={frame_mid} alt={"broke"} height={frame_mid.height} width={frame_mid.width} style={{ position: "absolute", top: "5px", }} />

    </>)
}



function SingleWheelRing(props: { tag: string, image: StaticImageData, icon: StaticImageData, position: string, speed: number, timing: number }) {
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
        canvas.util!.toggleSpin(props.speed, props.timing)
    }

    return <>
        <canvas ref={canvas.ref}
            width={686} height={702}
            style={{ position: "absolute", top: "5px", }} />
        <button style={{ position: "absolute", top:  props.position , left:"25px"  }} onClick={toggleRotate}>
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
        //for LOCAL
        // this.ctx.translate(canvas.width / 4, canvas.height / 4);
        //for PROD
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

    // this.draw = ()=> this.ctx.drawImage(this.image, -this.image.width / 2, -this.image.width / 2);
    draw() {
        this.ctx.drawImage(this.image, -this.image.width / 2, -this.image.width / 2);
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

    toggleSpin(speed: number, duration: number) {
        if (this.speed == 0) {
            gsap.to(this, { speed: speed, duration: duration })
        } else {
            gsap.to(this, { speed: 0, duration: duration })
        }
    }

}
