import React from 'react';
import { CarouselContext } from 'react-responsive-3d-carousel';
import './CarouselItem.css';

const CarouselItem = (
  {
    index,
    title,
    subtitle,
    imageUrl
  }
) => {
  const { currentIndex }= React.useContext(CarouselContext);
  
  return (
    <div className={`carousel-item ${currentIndex === index ? 'active' : ''}`} >
      <img src={imageUrl} alt={title}/>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default CarouselItem;