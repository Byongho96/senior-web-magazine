
import React, { useState } from 'react';
import { questions, recommendedContent } from '../data/recommendationpage';
import aiImage from '../assets/images/recommendation/ai.webp';
import resultImage from '../assets/images/recommendation/image.webp';
import './RecommendationPage.css';
import ContentList from '../components/molecules/ContentList';

const QuestionCard = ({ index, total, question, options, onNext, onPrevious }) => {
  const [ selectedOption, setSelectedOption ] = useState(null);

  return (
    <div className="question-card">
      <div className="question-card__question">
        <img src={aiImage} alt=""/>
        <h2>{question}</h2>
      </div>
      { 
        index > 0 &&
        <div className="question-card__nums">
          질문 {index} / {total}
        </div>
      }
      <div className="question-card__options">
        {options.map((option, index) => (
          <button key={`${index}-${option}`} 
           onClick ={() => setSelectedOption(option)}
           className={selectedOption === option ? 'selected' : ''}
          >{option}</button>
        ))}
      </div>
      <div className="question-card__buttons">
        <button onClick={onNext} disabled={onPrevious && !selectedOption}>다음</button>
        {onPrevious && <button onClick={onPrevious} disabled={!onPrevious} >돌아가기</button>}
      </div>
    </div>
  );
}


const RecommendationPage = () => {
  const [curIndex, setCurIndex] = useState(0);

  return (
    <div className="recommendation-page">
      <div className="recommendation-page__question">
        {
          questions.map((q, index) => (
            <div key={index} style={{ display: curIndex === index ? 'block' : 'none' }}>
              <QuestionCard {...q} 
                index={index}
                total={questions.length - 1}
                onPrevious={curIndex === 0 ? false : () => setCurIndex((prev) => Math.max(prev - 1, 0))}
                onNext={() => setCurIndex((prev) => Math.min(prev + 1, questions.length))}
              />
            </div>
          ))     
        }
      </div>
      {
        curIndex === questions.length &&
        <div className="recommendation-page__result">
          <div className="recommendation-page__type">
            <div>
              <h2>김성호 님은 <br/>'활기찬 도전가' 유형입니다.</h2>
              <p>
                새로운 경험을 두려워하지 않고 적극적으로 받아들이며,<br/>
                신뢰할 수 있는 정보를 바탕으로 현명한 선택을 이어가는 분입니다.<br/>
                일상에 활력을 불어넣고, 삶을 더욱 단단하고 깊이 있게 만들어줄 콘텐츠를 추천드릴게요.</p>
            </div>
            <img src={resultImage} alt=""/>
          </div>
          <ContentList {...recommendedContent} />
        </div>
      }
    </div>
  );
};


export default RecommendationPage;