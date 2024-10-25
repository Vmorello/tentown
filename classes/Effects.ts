import { DrawableItem } from "./canvas_utils";

import gsap from 'gsap';


export class ClickedEffect implements DrawableItem {
  centerX: number
  centerY: number

  lineStart:number
  lineEnd:number
  lineStartDiangle:number
  lineEndDiangle:number


  constructor(x: number, y: number) {
    this.centerX = x;
    this.centerY = y;

    this.lineStart=50 
    this.lineEnd=50 // -> 100
    this.lineStartDiangle=35
    this.lineEndDiangle=35 // -> 70

    // the simplest sequencing task otherwise should use timeline: https://gsap.com/docs/v3/GSAP/gsap.to()/#sequencing
    gsap.to(this, { lineEnd: 100, duration: .5 })
    gsap.to(this, { lineStart: 100, duration: .5 ,delay:.45})


    gsap.to(this, { lineEndDiangle: 70, duration: .5 })
    gsap.to(this, { lineStartDiangle: 70, duration: .5 ,delay:.45})

  }

  draw(ctx: CanvasRenderingContext2D) {

    ctx.lineWidth = 5;       // Set line thickness
    ctx.strokeStyle = '#818589 ';



    ctx.beginPath();
    ctx.moveTo(this.centerX, this.centerY - this.lineStart);
    ctx.lineTo(this.centerX, this.centerY - this.lineEnd);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.centerX, this.centerY + this.lineStart);
    ctx.lineTo(this.centerX, this.centerY + this.lineEnd);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.centerX - this.lineStart, this.centerY);
    ctx.lineTo(this.centerX - this.lineEnd, this.centerY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.centerX + this.lineStart, this.centerY);
    ctx.lineTo(this.centerX + this.lineEnd, this.centerY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.centerX + this.lineStartDiangle, this.centerY + this.lineStartDiangle);
    ctx.lineTo(this.centerX + this.lineEndDiangle, this.centerY + this.lineEndDiangle);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.centerX - this.lineStartDiangle, this.centerY - this.lineStartDiangle);
    ctx.lineTo(this.centerX - this.lineEndDiangle, this.centerY - this.lineEndDiangle);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.centerX - this.lineStartDiangle, this.centerY + this.lineStartDiangle);
    ctx.lineTo(this.centerX - this.lineEndDiangle, this.centerY + this.lineEndDiangle);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.centerX + this.lineStartDiangle, this.centerY - this.lineStartDiangle);
    ctx.lineTo(this.centerX + this.lineEndDiangle, this.centerY - this.lineEndDiangle);
    ctx.stroke();

  }
}