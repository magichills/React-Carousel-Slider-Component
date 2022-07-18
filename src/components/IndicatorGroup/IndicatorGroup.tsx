import React, { useState } from 'react';
import Indicator from "../Indictator/Indicator";
type CarouselItemType = {
    src: string,
    alt: string,
}
type IndicatorGroupType = {
    images: Array<CarouselItemType>,
    slidesToShow: number,
    slidesToScroll: number,
}
const IndicatorGroup = ({slidesToShow = 1, slidesToScroll = 1} : IndicatorGroupType) => {
    const [indicatorList, setIndicatorList] = useState([]);
    for (let i = 0; i < slidesToScroll; i++) {
        let temp = [];
        for (let j = 0; j < slidesToShow; j++) {
            
        }
    }
    return (
      <div>IndicatorGroup</div>
    )
}

export default IndicatorGroup