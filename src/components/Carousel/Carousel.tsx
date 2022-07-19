import React, { useEffect, useRef, useState } from "react";
import "./Carousel.scss";
import CarouselItem from "./../CarouselItem/CarouselItem";
import Indicator from "../Indictator/Indicator";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useSwipeable } from "react-swipeable";

type CarouselItemType = {
  src: string,
  alt: string,
  href: string,
  href_target: string,
}
type CarouselProps = {
  slides?: Array<CarouselItemType>,
  indicators?: boolean,
  indicatorType?: 'circle' | 'number',
  indicatorStyle?: React.CSSProperties,
  arrowStyle?: React.CSSProperties,
  startIndex?: number,
  autoplay?: boolean,
  autoplayDuration?: number,
  infinite?: boolean,
  slidesToShow?: number,
  slidesToScroll?: number,
  children: React.ReactNode,
  totalSlides: number,
};

const Carousel = ({
    slides,
    indicators=false,
    indicatorType='circle',
    indicatorStyle,
    arrowStyle,
    startIndex=0,
    autoplay=false,
    autoplayDuration=2,
    infinite=true,
    slidesToShow=1,
    slidesToScroll=1,
    children,
    totalSlides
  } : CarouselProps) => {
  const [slideIdx, setSlideIdx] = useState(startIndex);
  const length = totalSlides;
  const [paused, setPaused] = useState(false);
  const autoPlayRef = useRef<any>();

  useEffect(() => {
    if (autoplay && !paused) autoPlayRef.current = handleNextSlide
  })
  useEffect(() => {
    if (autoplay && !paused) {
      const play = () => {
        autoPlayRef.current()
      }
      const interval = setInterval(play, autoplayDuration * 1000)
      return () => clearInterval(interval)
    }
  })

  // if (!Array.isArray(slides) || length === 0) return null;

  if (startIndex >= length) setSlideIdx(0);

  const handlePrevSlide = ():void => {
    if (infinite) {
      setSlideIdx(slideIdx === 0 && slidesToScroll === 1 ? length - 1 : ((slideIdx - slidesToScroll) < 0 ? length - 1 : slideIdx - slidesToScroll));
    } else {
      setSlideIdx(slideIdx === 0 || (slideIdx - slidesToScroll) < 0 ? 0 : slideIdx - slidesToScroll);
    }
  }
  const handleNextSlide = ():void => {
    if (infinite) {
      setSlideIdx(slideIdx === length - 1 && slidesToScroll === 1 ? 0 : ((slideIdx + slidesToScroll) >= length ? 0 : slideIdx + slidesToScroll));
    } else {
      setSlideIdx(slideIdx === length - 1 || (slideIdx + slidesToScroll) >= length ? length - 1 : slideIdx + slidesToScroll);
    }
  }
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
  })
  
  const handleIndicatorClick = (idx: number) => {
    setSlideIdx(idx);
  }

  return (
    <div className="carousel-container">
      <BiLeftArrowAlt className={!infinite && slideIdx === 0 ? "disabled" : "icon left-arrow"} style={arrowStyle} onClick={handlePrevSlide}/>
      <BiRightArrowAlt className={!infinite && slideIdx === length - 1 ? "disabled" : "icon right-arrow"} style={arrowStyle} onClick={handleNextSlide}/>
      <div className="indicator-container">
        {indicators ? [...Array(totalSlides)].map((_, index) => {
          return (
          <Indicator
            indicatorType={indicatorType}
            indicatorStyle={indicatorStyle}
            indicatorIndex={index}
            indicatorActive={slideIdx === index}
            handleIndicatorClick={handleIndicatorClick}
            key={index}
          />
          )
        }): null}
      </div>
    <div className="carousel"  {...swipeHandlers}>
      <div className="inner" style={{transform: `translateX(-${slideIdx * 100 / slidesToShow}%)`}}>
          
          {!slides && React.Children.map(children, (child: any, idx : any) => {
            return (<div className="carousel-item" style={{width: `${100 / slidesToShow}%`, verticalAlign: "middle", overflow: "hidden", objectFit: "cover",}}>{child}</div>);
          })}
          {slides && slides.map((slide, index) => {
            return (
                <div className="carousel-item" style={{width: `${100 / slidesToShow}%`, overflow: 'hidden', objectFit: 'cover'}}>
                  <CarouselItem src={slide.src} alt={slide.alt} href={slide.href} href_target={slide.href_target} key={index} pause={setPaused}/>
                </div>
            )
          })}
      </div>
    </div>
    </div>
  );
}

export default Carousel;