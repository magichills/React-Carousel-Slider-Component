import React, { useEffect, useRef, useState } from "react";
import "./Carousel.scss";
import CarouselItem from "./CarouselItem";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FiCircle } from "react-icons/fi";
type CarouselItem = {
  src: string,
  alt: string,
}
type CarouselProps = {
  images: Array<CarouselItem>,
  indicators?: boolean,
  indicatorType?: 'circle' | 'number',
  indicatorStyle?: React.CSSProperties,
  startIndex?: number,
  autoplay?: boolean,
  autoplayDuration?: number,
  infinite?: boolean,
};

const Carousel = ({images, indicators=false, indicatorType='circle', indicatorStyle, startIndex=0, autoplay=false, autoplayDuration=2, infinite=true} : CarouselProps) => {
  const [imageIdx, setImageIdx] = useState(startIndex);
  const length = images.length;

  const autoPlayRef = useRef<any>();
  useEffect(() => {
    if (autoplay) autoPlayRef.current = handleNextSlide
  })
  useEffect(() => {
    if (autoplay) {
      const play = () => {
        autoPlayRef.current()
      }
      const interval = setInterval(play, autoplayDuration * 1000)
      return () => clearInterval(interval)
    }
  })

  if (!Array.isArray(images) || length === 0) return null;

  if (startIndex >= length) setImageIdx(0);

  const handlePrevSlide = ():void => {
    if (infinite) setImageIdx(imageIdx === 0 ? length - 1 : imageIdx - 1);
    else setImageIdx(imageIdx === 0 ? 0 : imageIdx - 1);
  }
  const handleNextSlide = ():void => {
    if (infinite) setImageIdx(imageIdx === length - 1 ? 0 : imageIdx + 1);
    else setImageIdx(imageIdx === length - 1 ? length - 1 : imageIdx + 1);
  }
  const handleIndicatorClick = (idx: number) => {
    setImageIdx(idx);
  }

  
  return (
    <div className="carousel-container">
      <BiLeftArrowAlt className="icon left-arrow" onClick={handlePrevSlide}/>
      <BiRightArrowAlt className="icon right-arrow" onClick={handleNextSlide}/>
      <div className="indicator-container">
        {indicators ? images.map((image, index) => {
          return (
            indicatorType === "circle" ? 
            <FiCircle className={index === imageIdx ? "icon indicator active" : "icon indicator"} key={index} onClick={() => handleIndicatorClick(index)} style={indicatorStyle}/>
            : <button className={index === imageIdx ? "button active" : "button"} key={index} onClick={() => handleIndicatorClick(index)} style={indicatorStyle}>{index + 1}</button>
          )
        }): null}
      </div>
      {images.map((image, index) => {
        return (
            <div className={index === imageIdx ? "slide active" : "slide"} key={index}>
              {index === imageIdx && <CarouselItem src={image.src} alt={image.alt}/>}
            </div>
        )
    })}
    </div>
  );
}

export default Carousel;