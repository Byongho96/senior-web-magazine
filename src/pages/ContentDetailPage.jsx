import React, {useState, useMemo} from "react";
import "./ContentDetailPage.css";
import { contentDetail, relevantContent } from "../data/contentpage";
import ContentList from "../components/molecules/ContentList";

const ContentDetail = ({ imgUrl, title, subtitle, summary, date, content }) => {
  const [ fontSize, setFontSize ] = useState(1);
  const [ voices, setVoices ] = useState([]);
  const [ isSpeaking, setIsSpeaking] = useState(false);

  const isSupported = useMemo(() => {
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      return false;
    }
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
    return true;
  }, []);

  const handleClickSpeak = () => {
    if (!isSupported) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel(); // 현재 음성 중단
      setIsSpeaking(false);
      return
    } 

    const utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = 'ko-KR';

    const koreanVoice = voices.find(voice => voice.lang === 'ko-KR');
    if (koreanVoice) {
      utterance.voice = koreanVoice;
    }

    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  }
  
  return (
    <div className="content-detail">
      <img src={imgUrl} alt={title} className="content-detail__image" />

      <header className="content-detail__header">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="content-detail__buttons">
          <button className="content-category">건강</button>
          <button className="content-category">경제</button>
          <button className="content-category">여행</button>
        </div>

        <p className="content-detail__summary">{summary}</p>

        <div className="content-detail__footer">
          <div className="content-detail__assist">
            <button onClick={handleClickSpeak} disabled={!isSupported}>
              {
                !isSupported ? '브라우저 지원 안됨' :
                isSpeaking ? '듣기 중단' : '콘텐츠 듣기'
              }</button>
            <div className="content-detail__font-buttons">
              <button className="small-font" onClick={() => setFontSize(1)}>가</button>
              <button className="big-font" onClick={() => setFontSize(1.3)}>가</button>
            </div>
          </div>
          <span className="content-detail__date">{date}</span>
        </div>
      </header>

      <section className="content-detail__body" style={{fontSize: `${fontSize}rem`}}>
        <p>{content}</p>
      </section>
    </div>
  );
};

const ContentDetailPage = () => {
  return (
    <div>
      <ContentDetail {...contentDetail} />
      <ContentList {...relevantContent} />
    </div>
  )
}
export default ContentDetailPage;