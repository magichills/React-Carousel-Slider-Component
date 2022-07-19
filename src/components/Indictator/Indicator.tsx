import React from 'react'
import './Indicator.scss'
import { FiCircle } from 'react-icons/fi'

type IndicatorProps = {
    indicatorType: 'circle' | 'number',
    indicatorStyle?: React.CSSProperties,
    indicatorIndex: number,
    indicatorActive: boolean,
    handleIndicatorClick: (index: number) => void,
    
}
const Indicator = ({indicatorType, indicatorStyle, indicatorIndex, indicatorActive, handleIndicatorClick} : IndicatorProps) => {
    if (indicatorType === 'circle') {
        return (<FiCircle className={indicatorActive ? "icon indicator active" : "icon indicator"} onClick={() => handleIndicatorClick(indicatorIndex)} style={indicatorStyle}/>)
    } else {
        return (<button className={indicatorActive ? "button active" : "button"} onClick={() => handleIndicatorClick(indicatorIndex)} style={indicatorStyle}  >{indicatorIndex + 1}</button>)
    }
}
export default Indicator;