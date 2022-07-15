import React from 'react'
import "./CarouselItem.scss"

type ItemProps = {
    src: string,
    alt: string,
    pause: Function,
}
function CarouselItem({src, alt, pause} : ItemProps) {
  return (
    <img src={src} alt={alt} className="carousel-item" draggable={false}  onMouseEnter={() => pause(true)} onMouseLeave={() => pause(false)}/>
  )
}

export default CarouselItem;