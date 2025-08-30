// src/components/MainBanner/MainBanner.jsx

import React from 'react';
import { bannerList } from '../../data/homepage.js';
import './MainBanner.css';

const MainBanner = () => {
  return (
    <div className="main-banner">
      <ul>
        {bannerList.map((banner, index) => (
          <li key={index} className="main-banner__item">
            <div className="main-banner__item--background" style={{backgroundImage: `url(${banner.imgUrl})`}}/>
            <div className="main-banner__item--content">
              <div>
                <p className="main-banner__item--tag">{`[${banner.type}]`}</p>
                <h2 >{banner.title}</h2>
                <p>{banner.content}</p>
              </div>
              <img src={banner.imgUrl} alt={`Banner ${index + 1}`} className="main-banner__item--image" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainBanner;