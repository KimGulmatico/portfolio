"use client"

import React, { useEffect, ReactComponentElement } from 'react';
import html2canvas from 'html2canvas';
import ascii from '.';
import rasterizeHTML from 'rasterizehtml';

export const AsciiWrapper = ({children}: { children: React.ReactNode}) => {
  const ref = React.useRef(null);
  const cRef = React.useRef(null);

  const ascii = async (canvas) => {
    const ctx = canvas?.getContext('2d');
    // ctx.drawImage(canvas, Number(canvas.style.width.replace('px', '')), Number(canvas.style.height.replace('px', '')));
    const pixels = ctx.getImageData(10,10, 890, 900);
    console.log(pixels, 'pix');

    let cellSize = 7;
    let imageCellArray = [];
    let symbols = [];
    ctx.fillStyle = 'white';
    ctx.font = cellSize + 'px Verdana';

    class Cell{
        constructor(x, y, symbol, color){
            this.x = x; 
            this.y = y;
            this.symbol = symbol;
            this.color = color;
        }
        draw(){
            ctx.fillStyle = 'white';
            ctx.fillText(this.symbol, this.x + 1, this.y + 1);
            ctx.fillStyle = this.color;
            ctx.fillText(this.symbol, this.x, this.y);

        }
    }

    function convertToSymbol(g){ 
        if(g > 250) return '';
        else if (g > 240) return '*';
        else if (g > 220) return ',';
        else if (g > 200) return '.';
        else if (g > 180) return '/';
        else if (g > 160) return '0';
        else if (g > 140) return '#';
        else if (g > 120) return 'F';
        else if (g > 100) return '$';
        else return '';
    };

    const scanImage = () => {
      cellSize = 7;
      ctx.font = cellSize + "px Verdana";

      let i = 0;
      console.log(pixels.width, pixels.height, cellSize);
      for (let y = 0; y < pixels.height; y += cellSize) {
        for (let x = 0; x < pixels.width; x += cellSize) {
          i++;
          const posX = x * 4;
          const posY = y * 4;
          const pos = posY * pixels.width + posX;

          if (pixels.data[pos + 3] > 128) {
            const red = pixels.data[pos];
            const green = pixels.data[pos + 1];
            const blue = pixels.data[pos + 2];
            const total = red + green + blue;
            const averageColorValue = total / 3;
            const symbol = convertToSymbol(averageColorValue);
            const color = "white";
            if (total > 200) imageCellArray.push(new Cell(x, y, symbol, color));
            symbols.push(symbol);
          }
        }
      }
      console.log(imageCellArray);
      console.log(symbols);
    };

    const drawAscii = async () => {
        scanImage();
        ctx.clearRect(0,0,canvas.width, canvas.height);
        for (let i = 0; i < imageCellArray.length; i++){
            imageCellArray[i].draw();
        }
    };

    drawAscii();
}


  useEffect(() => {
    if(ref.current) {
      html2canvas(ref.current as any).then((canvas) => {
        // console.log(canvas.attributes)
        // ref.current?.appendChild(canvas);
        // ascii(canvas)
        // ref.current?.appendChild(canvas);
        // ascii(canvas)
      });
      rasterizeHTML.drawHTML('ok', cRef.current);
    }
  }, [ref])

  return <span ref={ref} className='relative'>{children} <canvas ref={cRef}></canvas></span>
};

export default ascii;
