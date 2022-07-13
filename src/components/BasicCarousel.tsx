import React, { useState } from "react";
import "./BasicCarousel.scss";
import CarouselItem from "./CarouselItem";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FiCircle } from "react-icons/fi";
type CarouselItem = {
  src: string,
  alt: string,
}
type CarouselProps = {
  images: Array<CarouselItem>
};

const BasicCarousel = ({images} : CarouselProps) => {
  const [imageIdx, setImageIdx] = useState(0);
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
        {images.map((image, index) => {
          return (
            <FiCircle className={index === imageIdx ? "icon indicator active" : "icon indicator"} key={index} onClick={() => handleIndicatorClick(index)}/>
          )
        })}
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

export default BasicCarousel;