import React from 'react'
import "./CarouselItem.scss"

type ItemProps = {
    src: string,
    alt: string,
}
function CarouselItem({src, alt} : ItemProps) {
  return (
    <img src={src} alt={alt} className="carousel-img" draggable={false} />
  )
}

export default CarouselItem;