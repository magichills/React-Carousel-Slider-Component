import React from 'react';
import './App.scss';
import BasicCarousel from './components/BasicCarousel';
function App() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'landscape',
    },
    {
      src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      alt: 'A picture of a cat',
    },
    {
      src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'A picture of cargoships',
    },
    {
      src: 'https://images.unsplash.com/photo-1657556503874-fa174cdbe061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      alt: 'A picture of a staircase',
    },
  ];
  return (
    <div style={{width: '100%', margin: '0 auto'}}>
    
      <BasicCarousel images={images}/>
    </div>
  );
}

export default App;
