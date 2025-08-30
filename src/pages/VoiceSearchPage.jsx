
import React, {useState} from 'react';
import './VoiceSearchPage.css';
import { useNavigate } from 'react-router-dom';
import { search_content } from '../data/searchpage';
import ContentList from '../components/molecules/ContentList';
import backgroundImgUrl from '../assets/images/voice_search/background.webp';
import MicSvg from '../assets/svgs/mic.svg?react';

const SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;

let speechRecognition = false

if ( window.SpeechRecognition || window.webkitSpeechRecognition) {
  speechRecognition = new SpeechRecognition();
  speechRecognition.lang = 'ko-KR';
  speechRecognition.interimResults = true;
  speechRecognition.continuous = true;
}

const HomePage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const handleButtonClick = () => {
    if (!isListening) {
      speechRecognition.onresult = (event) => {
        let liveTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          liveTranscript += event.results[i][0].transcript;
        }
        setTranscript(liveTranscript);
      };

      speechRecognition.onerror = (event) => {
        console.error('음성 인식 오류:', event.error);
      };

      speechRecognition.start();
      setIsListening(true);
    } else {
      speechRecognition.stop();
      setIsListening(false);
    }
  };


  
  return (
    <div className='voice-search'>
      <img className='voice-search__background' src={backgroundImgUrl} alt='Voice Search Background'/>
      <div className='voice-search__overlay'></div>
      <button className='voice-search__go-back' onClick={handleGoBack}>뒤로가기</button>
      <div  className={`voice-search__content--guide ${!isListening && transcript ? 'upward' : ''}`}>
        <p>
          {
            !speechRecognition ? '음성 인식이 지원되지 않는 브라우저입니다' :
            isListening ? '네 듣고 있습니다' : '아래 버튼을 눌러주세요'
          }
        </p>
        <p>{transcript && transcript}</p>
      </div>
      <div className={`voice-search__content--results ${!isListening && transcript ? 'visible' : ''}`} >
        <p>{`네, ${transcript} 관련 콘텐츠입니다`}</p>
        <ContentList contents={search_content.contents} />
      </div>
      <button className={`voice-search__content--button ${isListening ? 'listen' : ''}`} onClick={handleButtonClick}>
        <MicSvg />
      </button>
    </div>
  );
};


export default HomePage;