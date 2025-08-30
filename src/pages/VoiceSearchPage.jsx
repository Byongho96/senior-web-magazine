
import React, {useState, useRef} from 'react';
import './VoiceSearchPage.css';
import backgroundImgUrl from '../assets/images/voice_search/background.webp';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return <p>⚠️ 이 브라우저는 음성 인식을 지원하지 않습니다.</p>;
  }

  // 초기화는 한 번만
  if (!recognitionRef.current) {
    const recognition = new SpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setTranscript(`🗣️ 인식된 내용: ${text}`);
      setListening(false);

      if (text.includes("검색해줘")) {
        runSearchCallback(text);
      }
    };

    recognition.onerror = (event) => {
      setTranscript(`❌ 오류 발생: ${event.error}`);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
  }

  const toggleVoiceSearch = () => {
    const recognition = recognitionRef.current;

    if (listening) {
      recognition.stop(); // 🔴 인식 중이면 중단
      setTranscript("🛑 음성 인식 중단됨");
    } else {
      recognition.start(); // 🟢 인식 시작
      setTranscript("🎤 듣는 중...");
    }

    setListening(!listening);
  };

  const runSearchCallback = (query) => {
    console.log("🔍 검색 콜백 실행:", query);
    alert(`검색을 시작합니다: ${query}`);
  };

  
  return (
    <div className="voice-search">
      <img className='voice-search__background' src={backgroundImgUrl} alt="Voice Search Background"/>
      <div className="overlay"></div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button onClick={toggleVoiceSearch}>
          {listening ? "🛑 음성 중단" : "🎧 음성 검색 시작"}
        </button>
        <p>{transcript}</p>
      </div>


    </div>
  );
};


export default HomePage;