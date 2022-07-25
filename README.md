# React Carousel Slider Component

## Table of Contents

- [Installation](##Installation)
- [Features](##Features)
- [Props](##Props)
- [Examples](##Examples)

## Installation
First install the module via npm:

```bash
npm install react-carousel-slider-component
```

Then import the module:

```jsx
import React from 'react';
import { Carousel } from 'react-carousel-slider-component';

function App() {
    return (
        <Carousel>
        </Carousel>
    )
}
```

## Features

### Images / Divs / Videos

- If you only want to display images, they can pass an array through the slides prop.
- Users can also choose a href and a href target

```JSX
    [
        {
            src: 'cargoships.jpeg',
            alt: 'A picture of cargoships',
            href: 'https://github.com',
            href_target: '_blank',
        },
    ]
```

- If you want to display divs, video and images at the same time, you must pass them as children under the Carousel component.
  
```JSX
        <Carousel 
            totalSlides={5}
            indicators={true}
            indicatorType={'number'}
            infinite={false}
        >
            <video height= "500px" controls={true}>
              <source src="https://www.w3schools.com/tags/mov_bbb.mp4" type="video/mp4"></source>
            </video>
            <div>
              <h1>Hello</h1>
              <p>This is a test</p>
            </div>
            <img src= 'mountain.jpeg' 
                alt= 'A picture of a mountain'>
            </img>
        </Carousel>
```

### Autoplay

- Option to automatically play the slides of the carousel.
- You can manually set the duration of each slide.

### Page Indicators

- Option to turn on and off page indicators for the carousel, displayed at the bottom.
- You can change the style from either bullet points or numbered indicators
- You can use custom CSS to style the indicators

### Multi Sides

- You can set the number of slides showing on each page
- You can set the number of slides each step moves

### Infinite scrolling

- You can toggle if the slides scrolling goes indefinitely

## Props

| Name             | Type                | Required | Description                                                                               | Default  |
|------------------|---------------------|----------|-------------------------------------------------------------------------------------------|----------|
| Slides           | Array               | Optional | Images for the carousel. The array should be composed of {src: "..", alt: ".."} elements. |          |
| totalSlides      | Number              | Required | The total number of slides                                                                |          |
| indicator        | Boolean             | Optional | Option to show slide indicators or not                                                    | False    |
| indicatorType    | String              | Optional | Either 'circle' or 'number' indicator style                                               | 'circle' |
| indicatorStyle   | React.CSSProperties | Optional | CSS object for indicators                                                                 |          |
| arrowStyle       | React.CSSProperties | Optional | CSS object for arrows                                                                     |          |
| startIndex       | Number              | Optional | index the slide starts on                                                                 | 0        |
| autoplay         | Boolean             | Optional | Autoplay slides                                                                           | False    |
| autoplayDuration | Number              | Optional | The duration of each slide in seconds                                                     | 2        |
| infinite         | Boolean             | Optional | Infinity cycles through the carousel slides                                               | True     |
| slidesToShow     | Number              | Optional | How many images each slide shows                                                          | 1        |
| slidesToScroll   | Number              | Optional | How many slides is scrolled on each scroll                                                | 1        |

## Examples

### Slider using Props

```JSX
import React from 'react';
import './App.scss';
import Carousel from './components/Carousel/Carousel';
function App() {
    const slides = [
        {
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        alt: 'landscape',
        href: 'https://unsplash.com/@joshua_kim',
        href_target: '_blank',
        },
        {
        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2070&q=80',
        alt: 'A picture of a cat',
        href: 'https://unsplash.com/@joshua_kim',
        href_target: '_blank',
        }
    ];
    return (
        <div  style={{textAlign: 'center'}}>
        <h1>React Carousel Component</h1>
        <div style={{width: '100%', height: '600px', margin: 'auto'}}>
            <Carousel 
                slides={slides}
                totalSlides={2}
                indicators={false}
                indicatorType={'number'}
                slidesToShow={1}
                slidesToScroll={1}
            >
                <video height= "500px" width="" controls={true}>
                <source src="https://www.w3schools.com/tags/mov_bbb.mp4" type="video/mp4"></source>
                </video>
                <div>
                <h1>Hello</h1>
                <p>This is a test</p>
                </div>
                <img src= 'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                alt= 'A picture of a mountain'></img>
            </Carousel>
            </div>
        </div>
    );
    export default App;
    }
```

### Slides using component children

```JSX
    import React from 'react';
    import './App.scss';
    import Carousel from './components/Carousel/Carousel';
    function App() {
        return (
            <div  style={{textAlign: 'center'}}>
            <h1>React Carousel Component</h1>
            <div style={{width: '100%', height: '600px', margin: 'auto'}}>
                <Carousel 
                    totalSlides={3}
                    indicatorType={'number'}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplayDuration={2}
                    pauseOnHover={true}
                    infinite={true}
                >
                    <video height= "500px" width="" controls={true}>
                    <source src="https://www.w3schools.com/tags/mov_bbb.mp4" type="video/mp4"></source>
                    </video>
                    <div>
                    <h1>Hello</h1>
                    <p>This is a test</p>
                    </div>
                    <img src= 'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                    alt= 'A picture of a mountain'></img>
                </Carousel>
                </div>
            </div>
        );
    export default App;
    }
```
