
import React from 'react';
import './HomePage.css';
import { NavLink } from 'react-router-dom';
import MainBanner from '../components/organisms/MainBanner';
import ContentList from '../components/molecules/ContentList';
import MicSvg from '../assets/svgs/mic.svg?react';
import {Carousel} from 'react-responsive-3d-carousel';
import CarouselItem from '../components/molecules/CarouselItem';
import 'react-responsive-3d-carousel/dist/styles.css'
import { carouselList, content_1, content_2, content_3 } from '../data/homepage';


const HomePage = () => {

  return (
    <div>
      <MainBanner/>
      <div className='main-page__content'>
        <div className='main-page__search-bar'>
          <input id='search' name='검색어' placeholder='검색어를 입력하세요'/>
          <NavLink to='/search' className='search-bar__voice-button'>
            <MicSvg/>
          </NavLink>
        </div>
        <h2 className='main-page__top'>오늘의 Top10 컨텐츠</h2>
        <Carousel 
          showIndicators={false}
          defaultOption={{ 
            angleFactor: 0,
            depthFactor: 1.8,
            widthFactor: 1,
          }}
          containerHeight='600px'
          width= '400px'
          height= 'auto'
          autoPlay= {false}
          items={
            carouselList.map((item, index) => (
              <CarouselItem
              key= {index}
              index={index}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
            />
          ))
          }
        />
        <ContentList title={content_1.title} contents={content_1.contents}/>
        <NavLink className='main-page__ai-recommendation'>
          나를 위한 AI 추천 컨텐츠
        </NavLink>
        <ContentList title={content_2.title} subtitle={content_2.subtitle} contents={content_2.contents}/>
        <ContentList title={content_3.title} subtitle={content_3.subtitle} contents={content_3.contents}/>
      </div>
    </div>
  );
};


export default HomePage;