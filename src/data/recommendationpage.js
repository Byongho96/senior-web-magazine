import image_1 from '../assets/images/recommendation/image_1.webp';
import image_2 from '../assets/images/recommendation/image_2.webp';
import image_3 from '../assets/images/recommendation/image_3.webp';
import image_4 from '../assets/images/recommendation/image_4.webp';

export const questions = [
  {
    'question': '안녕하세요, 김성호님께 맞는 콘텐츠를 추천드리려고 몇 가지 여쭤보려고합니다.',
    'options' : []
  },
  {
    'question': '새로운 걸 접하실 때, 보통 어떻게 하시는 편이세요?',
    'options' : ['직접 해보면서 배우는 게 재미있어요.', '믿을 만한 정보를 먼저 보고 차근차근 알아가요.', '가족이나 친구랑 같이 나누면서 배우는 게 좋아요.', '익숙한 방식을 유지하는 게 마음이 편해요.']
  },
  {
    'question': '정보를 찾으실 때, 어떤 점이 가장 중요하세요?',
    'options' : ['흥미롭고 재미있는 즐거움', '전문가나 믿을 만한 곳에서 나온 신뢰성', '생활 속에서 바로 쓸 수 있는 실용성', '나와 비슷한 사람들의 경험에서 오는 공감']
  },
  {
    'question': '여가 시간에는 어떤 걸 하실 때 가장 기분이 좋아지세요?',
    'options' : ['편안하게 즐길 수 있는 오락이나 휴식을 할 때', '몸과 마음이 활기차지는 활동을 할 때', '조용히 몰입해서 배우거나 탐구할 때', '가족이나 친구와 함께 어울릴 때']
  },
  {
    'question': '새로운 기술이나 디지털 환경을 만나면 어떤 마음이 드시나요?',
    'options' : ['꼭 필요한 부분만 간단하게 써요.', '배우면서 직접 활용해보는 게 좋아요.', '주변 사람들한테 도움을 받으면서 익혀요.', '편리하면 그게 제일 좋아요.']
  },
  {
    'question': '기사를 읽을 때는 언제 가장 만족감이 크세요?',
    'options' : ['공감되거나 마음이 편안해질 때', '읽고 나서 생활에 활력이 생길 때', '새로운 지식이나 정보를 깊게 얻을 때', '가족이나 지인에게 공유할 수 있을 때']
  }
]

export const recommendedContent = {
  title: '추천 콘텐츠',
  contents: [
    {
      category: '건강',
      title: '퇴행성 관절염 예방에 좋은 아침 스트레칭',
      imageUrl: image_1,
    },
    {
      category: '건강',
      title: '수도권 \'무료\' 가을 사진 전시회 일정',
      imageUrl: image_2,
    },
    {
      category: '건강',
      title: '퇴직 후 연금 활용 가이드',
      imageUrl: image_3,
    },
    {
      category: '건강',
      title: '나를 위한 건강 인테리어',
      imageUrl: image_4,
    }
  ],
}