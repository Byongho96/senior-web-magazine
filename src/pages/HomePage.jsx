
import React, {useMemo, useState} from 'react';
import './HomePage.css';
import { NavLink } from 'react-router-dom';
import MainBanner from '../components/organisms/MainBanner';
import ContentList from '../components/molecules/ContentList';
import MicSvg from '../assets/svgs/mic.svg?react';
import {Carousel} from 'react-responsive-3d-carousel';
import CarouselItem from '../components/molecules/CarouselItem';
import 'react-responsive-3d-carousel/dist/styles.css'
import { carouselList, content_1, content_2, content_3 } from '../data/homepage';

const exampleQueries = {
  '노' : ['노인', '노화', '노후준비', '노년기'],
  '노인' : ['노인', '노인 복지', '노인정', '노인대학'],
  '노인 예' : ['노인 예방접종', '노인 예방접종 무료', '노인 독감 예방접종', '노인 폐렴구균 예방접종'],
  '노인 예방' : ['노인 예방접종', '노인 예우 서비스', '노인 예방접종 무료', '노인 독감 예방접종'],
  '노인 예방접' : ['노인 예방접종', '노인 예방접종 무료', '노인 독감 예방접종', '노인 폐렴구균 예방접종'],
  '노인 예방접종' : ['노인 예방접종', '노인 예방접종 무료', '노인 독감 예방접종', '노인 폐렴구균 예방접종'],
}

const HomePage = () => {
  const [ query, setQuery ] = useState('');

  const relatedQueries = useMemo(() => {
    if (query.length === 0) return [];
    return exampleQueries[query] || [];
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  } 

  const handleClickRelatedQuery = (relatedQuery) => {
    console.log(relatedQuery);
    setQuery(relatedQuery);
  }

  return (
    <div>
      <MainBanner/>
      <div className='main-page__content'>
        <div className='main-page__search-bar'>
          <input id='search' name='검색어' placeholder='검색어를 입력하세요' value={query} onChange={handleInputChange}/>
          <div className='main-page__related-queries'>
            {relatedQueries.map((query, index) => <p key={index} onClick={() => handleClickRelatedQuery(query)}>{query}</p>)}
          </div>
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
            widthFactor: 1.2,
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