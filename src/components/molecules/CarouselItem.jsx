import React, {useContext} from 'react';
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
  const { curIndex }= useContext(CarouselContext);
  
  return (
    <div className={`carousel-item ${curIndex === index ? 'active' : 'inactive'}`} >
      <img src={imageUrl} alt={title}/>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default CarouselItem;