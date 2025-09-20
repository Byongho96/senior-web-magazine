
import React, {useMemo, useState} from 'react';
import { NavLink } from 'react-router-dom';
import MainBanner from '../components/organisms/MainBanner';
import ContentList from '../components/molecules/ContentList';
import MicSvg from '../assets/svgs/mic.svg?react';
import SearchSvg from '../assets/svgs/search.svg?react';
import {Carousel} from 'react-responsive-3d-carousel';
import CarouselItem from '../components/molecules/CarouselItem';
import { carouselList, content_1, content_2, content_3 } from '../data/homepage';
import 'react-responsive-3d-carousel/dist/styles.css'
import './HomePage.css';
import useMobile from '../hooks/useMobile';

const exampleQueries = [
  {
    regex : /^일자리/,
    suggestions: ['일자리 모집 공고', '일자리 신청 방법', '노인 일자리  찾기', '일자리 연금 병행']
  },
  {
    regex : /^일/,
    suggestions: ['일자리', '일자리 모집', '일자리 신청', '일자리 유형', '일자리 활동비']
  },
]

const HomePage = () => {
  const [ query, setQuery ] = useState('');
  const isMobile = useMobile()

  const relatedQueries = useMemo(() => {
    if (!query) return [];
    for (const example of exampleQueries) {
      if (example.regex.test(query)) {
        return example.suggestions;
      }
    }
    return [];
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  } 

  const handleClickRelatedQuery = (relatedQuery) => {
    setQuery(relatedQuery);
  }

  return (
    <div>
      <MainBanner/>
      <div className='main-page__content'>
        <div className='main-page__search-bar'>
          <input id='search' name='검색어' placeholder='검색어를 입력하세요' value={query} onChange={handleInputChange}/>
          { 
            !!relatedQueries.length &&
            <div className='main-page__related-queries'>
              {relatedQueries.map((query, index) => <p key={index} onClick={() => handleClickRelatedQuery(query)}>{query}</p>)}
            </div>
          } 
          <NavLink to='/search' className='search-bar__voice-button'>
            { query ? <SearchSvg/> : <MicSvg/> }
          </NavLink>
        </div>
        <h2 className='main-page__top'>오늘의 Top10 컨텐츠</h2>
        <Carousel 
          showIndicators={false}
          defaultOption={{ 
            angleFactor: 0,
            depthFactor: isMobile ? 1 : 1.8,
            widthFactor: isMobile ? 2 : 1.2,
          }}
          containerHeight={isMobile ? '70vh' :'600px'}
          width= {isMobile ? '60vw' :'400px'}
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
        <NavLink className='main-page__ai-recommendation' to='/recommendation'>
          나를 위한 AI 추천 컨텐츠
        </NavLink>
        <ContentList title={content_2.title} subtitle={content_2.subtitle} contents={content_2.contents}/>
        <ContentList title={content_3.title} subtitle={content_3.subtitle} contents={content_3.contents}/>
      </div>
    </div>
  );
};


export default HomePage;