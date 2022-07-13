import React, { useEffect, useRef, useState } from "react";
import "./Carousel.scss";
import CarouselItem from "./CarouselItem";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FiCircle } from "react-icons/fi";

type CarouselItemType = {
  src: string,
  alt: string,
}
type CarouselProps = {
  images: Array<CarouselItemType>,
  indicators?: boolean,
  indicatorType?: 'circle' | 'number',
  indicatorStyle?: React.CSSProperties,
  startIndex?: number,
  autoplay?: boolean,
  autoplayDuration?: number,
  infinite?: boolean,
  slidesToShow?: number,
  slidesToScroll?: number,
};

const Carousel = ({
    images, indicators=false,
    indicatorType='circle',
    indicatorStyle,
    startIndex=0,
    autoplay=false,
    autoplayDuration=2,
    infinite=true,
    slidesToShow=1,
    slidesToScroll=1,
  } : CarouselProps) => {
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

  // Both Prev and Next Slide functions have logic to wrap around the slides if infinite is true
  // else they will stop at the end or the beginning of the slides
  const handlePrevSlide = ():void => {
    if (infinite) {
      setImageIdx(imageIdx === 0 && slidesToScroll === 1 ? length - 1 : ((imageIdx - slidesToScroll) < 0 ? ((imageIdx - slidesToScroll + length) % length) : imageIdx - slidesToScroll));
    } else {
      setImageIdx(imageIdx === 0 || (imageIdx - slidesToScroll) < 0 ? 0 : imageIdx - slidesToScroll);
    }
  }
  const handleNextSlide = ():void => {
    if (infinite) {
      setImageIdx(imageIdx === length - 1 && slidesToScroll === 1 ? 0 : ((imageIdx + slidesToScroll) >= length ? ((imageIdx + slidesToScroll) % length) : imageIdx + slidesToScroll));
    } else {
      setImageIdx(imageIdx === length - 1 || (imageIdx + slidesToScroll) >= length ? length - 1 : imageIdx + slidesToScroll);
    }
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