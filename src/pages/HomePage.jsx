
import React from 'react';
import './HomePage.css';
import Button from '../components/atoms/Button';
import MainBanner from '../components/organisms/MainBanner';
import ContentList from '../components/molecules/ContentList';
import image_3 from '../assets/images/main_banner/image_3.webp';
import MicSvg from '../assets/svgs/mic.svg?react';
import {Carousel} from 'react-responsive-3d-carousel';
import CarouselItem from '../components/molecules/CarouselItem';
import 'react-responsive-3d-carousel/dist/styles.css'
import { NavLink } from 'react-router-dom';

const carouselItems = [
  {
    title: '한번만 생겨도 치명적인 대상포진',
    subtitle: '가을이면 유행하는 대상포진 예방방법에 대해 알아보기',
      imageUrl: image_3,
  },
  {
    title: '한번만 생겨도 치명적인 대상포진',
    subtitle: '가을이면 유행하는 대상포진 예방방법에 대해 알아보기',
    imageUrl: 'https://via.placeholder.com/800x400.png?text=Second+Item',
  },
  {
    title: '한번만 생겨도 치명적인 대상포진',
    subtitle: '가을이면 유행하는 대상포진 예방방법에 대해 알아보기',
    imageUrl: 'https://via.placeholder.com/800x400.png?text=Second+Item',
  },
  {
    title: '한번만 생겨도 치명적인 대상포진',
    subtitle: '가을이면 유행하는 대상포진 예방방법에 대해 알아보기',
    imageUrl: 'https://via.placeholder.com/800x400.png?text=Second+Item',
  },
  {
    title: '한번만 생겨도 치명적인 대상포진',
    subtitle: '가을이면 유행하는 대상포진 예방방법에 대해 알아보기',
    imageUrl: 'https://via.placeholder.com/800x400.png?text=Second+Item',
  },
]

const content_1 = {
  title: '읽고 있던 콘텐츠',
  contents: [
    {
      category: '경제',
      title: '2025년 노인일자리 확 바뀐다',
      imageUrl: image_3,
      progress: 45, 
    },
    {
      category: '건강',
      title: '아무것도 하고 싶지 않을때',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
      progress: 45, 
    },
    {
      category: '건강',
      title: '꿈의 암치료 \'중입자 치료기\'' ,
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
      progress: 55, 
    },
    {
      category: '경제',
      title: '2천원으로 영화관에서 영화 보기',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+2',
      progress: 70, 
    },
    {
      category: '경제',
      title: '노년을 위한 스마트 재테크 전략',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+3',
      progress: 20,
    },
  ],
}

const content_2 = {
  title: '건강 콘텐츠',
  subtitle: '만성질환 관리 및 건강을 유지 관리 하기 위한 콘텐츠를 볼수 있어요',
  contents: [
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
    },
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
    },
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
    },
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
    },
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
    },
  ],
}


const content_3 = {
  title: '여행 콘텐츠',
  subtitle: '국내외 여행에 관련된 콘텐츠를 볼수 있어요',
  contents: [
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
    },
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
    },
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
    },
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
    },
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Content+1',
    },
  ],
}


const HomePage = () => {

  return (
    <div>
      <MainBanner/>
      <div>
        <input/>
        <NavLink to="/search">
          <MicSvg/>
        </NavLink>
      </div>
      <Carousel 
        showIndicators={false}
        defaultOption={{ 
          angleFactor: 0,
        }}
        containerHeight='400px'
        width= 'auto'
        height= 'auto'
        items={
         carouselItems.map((item, index) => (
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
      <NavLink>
          나를 위한 AI 추천 컨텐츠

      </NavLink>
      <ContentList title={content_2.title} subtitle={content_2.subtitle} contents={content_2.contents}/>
      <ContentList title={content_3.title} subtitle={content_3.subtitle} contents={content_3.contents}/>
    </div>
  );
};


export default HomePage;