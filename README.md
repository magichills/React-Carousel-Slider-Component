# React Carousel Component

## Features Currently Implemented
### Autoplay
- Option to automatically play the slides of the carousel. 
- Users can manually set the duration of each slide.
### Page Indicators
- Option to turn on and off page indicators for the carousel, displayed at the bottom.
- Users can change the style from either bullet points or numbered indicators
- Users can use custom CSS to style the indicators
## Props

| Name             | Type                | Required | Description                                                                              | Default  |
|------------------|---------------------|----------|------------------------------------------------------------------------------------------|----------|
| images           | Array               | Required | Images for the carousel. The array should be composed of {src: "..", alt: ".."} elements |          |
| indicator        | Boolean             | Optional | Option to show slide indicators or not                                                   | False    |
| indicatorType    | String              | Optional | Either 'circle' or 'number' indicator style                                              | 'circle' |
| indicatorStyle   | React.CSSProperties | Optional | CSS object for indicators                                                                |          |
| startIndex       | Number              | Optional | index the slide starts on                                                                | 0        |
| autoplay         | Boolean             | Optional | Autoplay slides                                                                          | False    |
| autoplayDuration | Number              | Optional | The duration of each slide in seconds                                                    | 2        |
| infinite         | Boolean             | Optional | Infinity cycles through the carousel slides                                              | True     |
| slidesToShow     | Number              | Optional | How many images each slide shows                                                         | 1        |
| slidesToScroll   | Number              | Optional | How many slides is scrolled on each scroll                                               | 1        |