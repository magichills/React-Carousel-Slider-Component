import React from 'react'
import "./CarouselItem.scss"

type ItemProps = {
    src: string,
    alt: string,
    href: string,
    href_target: string,
    pause: Function,
}
function CarouselItem({src, alt, href, href_target, pause} : ItemProps) {
  return (
    <a href={href} target={href_target}><img src={src} alt={alt} className="carousel-item" draggable={false}  onMouseEnter={() => pause(true)} onMouseLeave={() => pause(false)}/></a>
  )
}

export default CarouselItem;