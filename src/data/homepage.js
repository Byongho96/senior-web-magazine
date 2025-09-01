
import banner_image_1 from '../assets/images/main_banner/image_1.webp';
import banner_image_2 from '../assets/images/main_banner/image_2.webp';
import banner_image_3 from '../assets/images/main_banner/image_3.webp';;
import carousel_image_1 from '../assets/images/carousel_slide/image_1.webp';
import carousel_image_2 from '../assets/images/carousel_slide/image_2.webp';
import carousel_image_3 from '../assets/images/carousel_slide/image_3.webp';
import carousel_image_4 from '../assets/images/carousel_slide/image_4.webp';
import carousel_image_5 from '../assets/images/carousel_slide/image_5.webp';
import reading_image_1 from '../assets/images/reading_contents/image_1.webp';
import reading_image_2 from '../assets/images/reading_contents/image_2.webp';
import reading_image_3 from '../assets/images/reading_contents/image_3.webp';
import reading_image_4 from '../assets/images/reading_contents/image_4.webp';
import health_image_1 from '../assets/images/health_contents/image_1.webp';
import health_image_2 from '../assets/images/health_contents/image_2.webp';
import health_image_3 from '../assets/images/health_contents/image_3.webp';
import health_image_4 from '../assets/images/health_contents/image_4.webp';
import travel_image_1 from '../assets/images/travel_contents/image_1.webp';
import travel_image_2 from '../assets/images/travel_contents/image_2.webp';
import travel_image_3 from '../assets/images/travel_contents/image_3.webp';
import travel_image_4 from '../assets/images/travel_contents/image_4.webp';

export const bannerList = [
  { 
    type: '건강', 
    imgUrl: banner_image_1,
    title: '비급여 100만원 아끼기',
    content : '지자체 보건소에서 지원하는 비급여 검사, 예방접종 알아보기!'
  },
  { type: '건강', 
    imgUrl: banner_image_2,
    title: '건강검진으로 질병 조기 발견',
    content : '국가에서 지원하는 무료 건강검진 항목과 대상자 확인하고, 가까운 병원에서 예약하세요!'
  },
  { type: '건강', 
    imgUrl: banner_image_3,
    title: '약값 부담 줄이는 복약 관리 팁',
    content : '고령자 약제비 지원 제도와 복약 상담 서비스 활용으로 약값 절약하고 건강 지키기!'
  }
];

export const carouselList = [
  {
    title: '한번만 생겨도 치명적인 대상포진',
    subtitle: '가을이면 유행하는 대상포진 예방방법에 대해 알아보기',
    imageUrl: carousel_image_1,
  },
  {
    title: '비급여 100만원 아끼기',
    subtitle: '지자체/보건소에서 지원하는 비급여 검사, 예방접종 알아보기!',
    imageUrl: carousel_image_2,
  },
  {
    title: '아무것도 하고 싶지 않을 때',
    subtitle: '멘탈 회복을 위한 추천 활동 3가지',
    imageUrl: carousel_image_3,
  },
  {
    title: '쉬고, 걷고, 회복하라',
    subtitle: '온천·치유의 숲 웰니스 루트 3선',
    imageUrl: carousel_image_4,
  },
  {
    title: '2천원으로 영화관에서 영화 보기',
    subtitle: '영화 보고 식사까지 로맨틱, 경제적, 성공적',
    imageUrl: carousel_image_5,
  },
]

export const content_1 = {
  title: '읽고 있던 콘텐츠',
  contents: [
    {
      category: '경제',
      title: '2025년 노인일자리 확 바뀐다',
      imageUrl: reading_image_1,
      progress: 45, 
    },
    {
      category: '건강',
      title: '아무것도 하고 싶지 않을때',
      imageUrl: reading_image_2,
      progress: 45, 
    },
    {
      category: '건강',
      title: '꿈의 암치료 \'중입자 치료기\'' ,
      imageUrl: reading_image_3,
      progress: 55, 
    },
    {
      category: '경제',
      title: '2천원으로 영화관에서 영화 보기',
      imageUrl: reading_image_4,
      progress: 70, 
    },
  ],
}

export const content_2 = {
  title: '건강 콘텐츠',
  subtitle: '만성질환 관리 및 건강을 유지 관리 하기 위한 콘텐츠를 볼수 있어요',
  contents: [
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: health_image_1,
    },
    {
      category: '건강',
      title: '한번만 생겨도 치명적인 대상포진',
      imageUrl: health_image_2,
    },
    {
      category: '건강',
      title: '퇴행성 관절염 예방에 좋은 아침 스트레칭',
      imageUrl: health_image_3,
    },
    {
      category: '건강',
      title: '나를 위한 건강 비급여 100만원 아끼기',
      imageUrl: health_image_4,
    }
  ],
}


export const content_3 = {
  title: '여행 콘텐츠',
  subtitle: '국내외 여행에 관련된 콘텐츠를 볼수 있어요',
  contents: [
    {
      category: '여행',
      title: '65+ 교통·관광 할인 한눈에',
      imageUrl: travel_image_1,
    },
    {
      category: '여행',
      title: '주말 1박 2일 바다 힐링 코스',
      imageUrl: travel_image_2,
    },
    {
      category: '여행',
      title: '온천·치유의 숲 웰니스 루트 3선',
      imageUrl: travel_image_3,
    },
    {
      category: '여행',
      title: '손주와 떠나는 3대 여행지',
      imageUrl: travel_image_4,
    }
  ],
}

