import React, {useContext} from 'react';
import { CarouselContext } from 'react-responsive-3d-carousel';
import './CarouselItem.css';
import { NavLink } from 'react-router-dom';

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
      <NavLink to='/content' className='carousel-link'>
        <div>
          <img src={imageUrl} alt={title}/>
        </div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </NavLink>
    </div>
    
  );
}

export default CarouselItem;