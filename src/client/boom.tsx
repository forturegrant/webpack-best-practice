import React, { useEffect, useRef, useState } from 'react';
import './index.less';

class Card {
  constructor({ ctx, x = 0, y = 0, color = '#FFC233', ratio = 2, scale = 1, opacity = 1 }) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.rgbaColor = this.parseHexadecimal(color);
    this.color = this.toRgbaStr();
    this.ratio = ratio;
    this.scale = scale;
    this.opacity = opacity;
    this.rotation = 0;
    this.initial = {
      x,
      y,
      color,
      ratio,
      scale,
      opacity,
    };
  }

  /*
      @hexadecimal: { String }, "#333", "#AF0382"
    */
  parseHexadecimal(hexadecimal) {
    hexadecimal = hexadecimal.slice(1);
    if (hexadecimal.length == 3) {
      hexadecimal =
          hexadecimal[0] +
          hexadecimal[0] +
          hexadecimal[1] +
          hexadecimal[1] +
          hexadecimal[2] +
          hexadecimal[2];
    }

    return {
      r: Number.parseInt(hexadecimal.slice(0, 2), 16),
      g: Number.parseInt(hexadecimal.slice(2, 4), 16),
      b: Number.parseInt(hexadecimal.slice(4, 6), 16),
      a: 1,
    };
  }

  toRgbaStr() {
    const { r, g, b, a } = this.rgbaColor;
    return `rgba(${r},${g},${b},${a})`;
  }

  moveTo(...args) {
    const scaleArgs = args.map((item) => item * this.ratio);
    this.ctx.moveTo(...scaleArgs);
  }

  bezierCurveTo(...args) {
    const scaleArgs = args.map((item) => item * this.ratio);
    this.ctx.bezierCurveTo(...scaleArgs);
  }

  draw() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.x, this.y);
    this.ctx.scale(this.scale, this.scale);
    this.ctx.rotate(this.rotation);
    this.moveTo(25.168, 19.6905);
    this.bezierCurveTo(17.244, 13.889, 14.3099, 9.80744, 11.3821, 0.519531);
    this.bezierCurveTo(6.89056, 3.64913, 4.65311, 5.21266, 0.167969, 8.34352);
    this.bezierCurveTo(3.10726, 17.6251, 6.03631, 21.713, 13.959, 27.5195);
    this.bezierCurveTo(18.4454, 24.3899, 20.6828, 22.8264, 25.168, 19.6905);
    this.rgbaColor.a = this.opacity;
    this.ctx.fillStyle = this.toRgbaStr();
    this.ctx.fill();
    this.ctx.restore();
  }
}

const CONFETTI_COLORS = ['#B833FF', '#FC7878', '#FFC233', '#FC78D8', '#6EF1DC'];
const RATIO = 2;
const EPSILON = 0.1;
const vx = [-15, 15];
const vy = [-35, -12];
const scale = [0.6, 1.1];
const ay = [0.25, 0.5];
const scaleRate = 0.99;
const opacityRate = 0.99;
const count = 99;

function Fireworks({ isShow }) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const canvasRef = useRef({});
  const containerRef = useRef({});
  const requestAnimationID = useRef(0);
  let ctx = {};
  useEffect(() => {
    const {
      current: { clientWidth, clientHeight },
    } = containerRef;
    setSize({
      width: clientWidth,
      height: clientHeight,
    });
  }, [isShow]);
  useEffect(() => {
    if (!isShow) return;
    function generateRandomNumber(min, max) {
      if (typeof min === 'number' && typeof max === 'undefined') {
        return min;
      }

      if (Array.isArray(min) && min.length === 2) {
        max = min[1];
        min = min[0];
      }
      return Math.random() * (max - min) + min;
    }

    function clearCanvas() {
      const { current: { clientWidth, clientHeight } = {} } = canvasRef || {};
      if (!clientWidth) return;
      ctx.clearRect(0, 0, clientWidth * RATIO, clientHeight * RATIO);
    }
    function createAnimation() {
      const { width, height } = size;
      const cardList = [];
      const COLORS_LENGTH = CONFETTI_COLORS.length;
      const ratio = width / 750;
      for (let i = 0; i < count; ++i) {
        const color = CONFETTI_COLORS[i % COLORS_LENGTH];
        const card = new Card({ ctx, color, ratio: RATIO * ratio });
        card.x = generateRandomNumber(width);
        card.y = generateRandomNumber(height * 1.6);
        card.scale = generateRandomNumber(scale * ratio);
        card.rotation = Math.random() * Math.PI * 2;
        card.vx = generateRandomNumber(vx) * ratio;
        card.vy = generateRandomNumber(vy) * ratio;
        card.ay = generateRandomNumber(ay) * ratio;
        cardList.push(card);
      }
      let outOfVisionCnt = 0;
      const animate = () => {
        clearCanvas();
        for (let i = 0; i < cardList.length; ++i) {
          const card = cardList[i];
          console.log(card.y, 'card.y');
          console.log(card.ay, 'card.ay');
          console.log(card.vy, 'card.vy');
          card.x += card.vx;
          card.vy += card.ay;
          card.y += card.vy;
          if (card.vy > 20) {
            card.opacity *= opacityRate;
            card.scale *= scaleRate;
          }
          if (
            !card.outOfVision &&
            (card.opacity < EPSILON || card.x < -30 || card.x > width * RATIO || card.y > height * RATIO)
          ) {
            outOfVisionCnt += 1;
            card.outOfVision = true;
          }
          card.draw();
        }
        if (outOfVisionCnt === count) {
          cancelAnimationFrame(requestAnimationID.current);
        } else {
          requestAnimationID.current = requestAnimationFrame(animate);
        }
      };
      animate();
    }
    ctx = canvasRef.current.getContext('2d');
    createAnimation();
  }, [size]);
  if (!isShow) return null;
  return (
    <div className="confetti" ref={containerRef}>
      <canvas
        width={size.width * RATIO}
        height={size.height * RATIO}
        className="confetti-canvas"
        ref={canvasRef}
      />
    </div>
  );
}

export default Fireworks;