// src/components/MainBanner/MainBanner.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import image_1 from '../../assets/images/main_banner/image_1.webp';
import image_2 from '../../assets/images/main_banner/image_2.webp';
import image_3 from '../../assets/images/main_banner/image_3.webp';
import './MainBanner.css';

const bannerList = [
  { 
    type: '건강', 
    imgUrl: image_1,
    title: '비급여 100만원 아끼기',
    content : '지자체 보건소에서 지원하는 비급여 검사, 예방접종 알아보기!'
  },
  { type: '건강', 
    imgUrl: image_2,
    title: '건강검진으로 질병 조기 발견',
    content : '국가에서 지원하는 무료 건강검진 항목과 대상자 확인하고, 가까운 병원에서 예약하세요!'
  },
  { type: '건강', 
    imgUrl: image_3,
    title: '약값 부담 줄이는 복약 관리 팁',
    content : '고령자 약제비 지원 제도와 복약 상담 서비스 활용으로 약값 절약하고 건강 지키기!'
  }
];

const MainBanner = () => {
  return (
    <div>
      <ul className=''>
        {bannerList.map((banner, index) => (
          <li key={index} className="main-banner-item">
            <NavLink to="/products" className="banner-link">
              <img src={banner.imgUrl} alt={`Banner ${index + 1}`} className="banner-image" />
              <div className="banner-text">
                <h2 className="banner-title">{banner.title}</h2>
                <p className="banner-content">{banner.content}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainBanner;