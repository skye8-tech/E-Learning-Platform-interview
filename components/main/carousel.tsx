import React from 'react'
import { CanvasCarousel } from '../animatex/canvascarousel'

const CarouselSection = () => {
    const images = ["/homePics/pic1.jfif"]
  return (
    <CanvasCarousel images={images} className="w-full max-w-[800px] h-[500px] mt-4 mx-auto"/>
  )
}

export default CarouselSection