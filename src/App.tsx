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
    },
    {
      src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'A picture of cargoships',
      href: 'https://unsplash.com/@joshua_kim',
      href_target: '_blank',
    },
    {
      src: 'https://images.unsplash.com/photo-1657556503874-fa174cdbe061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      alt: 'A picture of a staircase',
      href: 'https://unsplash.com/@joshua_kim',
      href_target: '_blank',
    },
    {
      src: 'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'A picture of a mountain',
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
            totalSlides={5}
            indicators={true}
            indicatorType={'number'} // 'circle' or 'number'
            // indicatorStyle={{color: 'red'}}
            // arrowStyle={{color: 'white'}}
            startIndex={0}
            autoplay={false}
            autoplayDuration={2}
            infinite={false}
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
}

export default App;
