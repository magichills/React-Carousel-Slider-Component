import React, { useState } from "react";
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
};

const Carousel = ({images, indicators=false, indicatorType='circle', indicatorStyle, startIndex=0} : CarouselProps) => {
  const [imageIdx, setImageIdx] = useState(startIndex);
  const length = images.length;
  if (!Array.isArray(images) || length === 0) {
    return null;
  }

  const handlePrevSlide = () => {
    setImageIdx(imageIdx === 0 ? length - 1 : imageIdx - 1);
  }
  const handleNextSlide = () => {
    setImageIdx(imageIdx === length - 1 ? 0 : imageIdx + 1);
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