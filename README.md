# React Carousel Component
## Magic Hills

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