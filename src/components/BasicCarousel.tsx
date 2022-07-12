import React, { useState } from "react";
import "./BasicCarousel.scss";
import CarouselItem from "./CarouselItem";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
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
  return (
    <div className="carousel-container">
      <FaArrowAltCircleLeft className="icon left-arrow" onClick={handlePrevSlide}/>
      <FaArrowAltCircleRight className="icon right-arrow" onClick={handleNextSlide}/>
      {images.map((image, index) => {
        return (
          <div className={index === imageIdx ? 'slide active' : 'slide'}
            key={index}>
            {index === imageIdx && <CarouselItem src={image.src} alt={image.alt}/>}
          </div>
        )
    })}
    </div>
  );
}

export default BasicCarousel;