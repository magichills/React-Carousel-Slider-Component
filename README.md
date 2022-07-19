# React Carousel Component
## Features Currently Implemented
### Autoplay
- Option to automatically play the slides of the carousel. 
- Users can manually set the duration of each slide.
### Page Indicators
- Option to turn on and off page indicators for the carousel, displayed at the bottom.
- Users can change the style from either bullet points or numbered indicators
- Users can use custom CSS to style the indicators

## Table of Contents

- [Features](##Features)
- [Props](##Props)

## Features

### Images / Divs / Videos

- If you only want to display images, they can pass an array through the slides prop.
- Users can also choose a href and a href target

```react
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
  
```react
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