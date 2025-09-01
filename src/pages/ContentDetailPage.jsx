import React, {useState, useMemo} from "react";
import "./ContentDetailPage.css";
import { contentDetail, relevantContent } from "../data/contentpage";
import ContentList from "../components/molecules/ContentList";;
import LikeOutlineSvg from '../assets/svgs/heart_outline.svg?react';
import StarOutlineSvg from '../assets/svgs/star_outline.svg?react';
import HeadphoneSvg from '../assets/svgs/headphone.svg?react';
import ShareSvg from '../assets/svgs/share.svg?react';

const ContentDetail = ({ imgUrl, title, subtitle, summary, date, content, text }) => {
  const [ isLiked, setIsLiked ] = useState(false);
  const [ isBookmarked, setIsBookmarked ] = useState(false);

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

    const utterance = new SpeechSynthesisUtterance(text);
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

  const handleClickShareButton = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: subtitle,
        url: window.location.href,
      })
      .then(() => console.log('콘텐츠가 공유되었습니다.'))
      .catch((error) => console.error('공유에 실패했습니다:', error));
    } else {
      console.warn('Web Share API를 지원하지 않는 브라우저입니다.');
    } 
  }
  
  return (
    <div className="content-detail">
      <img src={imgUrl} alt={title} className="content-detail__image" />

      <header className="content-detail__header">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="content-detail__buttons">
          <button className={isLiked ? 'fill' : ''} onClick={()=>setIsLiked(!isLiked)}><LikeOutlineSvg/></button>
          <button className={isBookmarked ? 'fill' : ''} onClick={()=>setIsBookmarked(!isBookmarked)}><StarOutlineSvg/></button>
          <button onClick={handleClickShareButton}><ShareSvg/></button>
        </div>

        <div className="content-detail__summary">{summary}</div>

        <div className="content-detail__footer">
          <div className="content-detail__assist">
            <button onClick={handleClickSpeak} disabled={!isSupported}>
              {
                !isSupported ? '브라우저 지원 안됨' :
                isSpeaking ? '듣기 중단' : <><HeadphoneSvg/><p>컨텐츠 듣기</p></>
              }
            </button>
          </div>
          <span className="content-detail__date">{date}</span>
        </div>
      </header>

      <section className="content-detail__body" style={{fontSize: `${fontSize}rem`}}>
        <div className="content-detail__font-buttons">
          <button className="small-font" onClick={() => setFontSize(fontSize - 0.1)}>가</button>
          <button className="big-font" onClick={() => setFontSize(fontSize + 0.1)}>가</button>
        </div>
        <div>{content}</div>
      </section>
    </div>
  );
};

const ContentDetailPage = () => {
  return (
    <div className="content-detail-page">
      <ContentDetail {...contentDetail} />
      <ContentList {...relevantContent} />
    </div>
  )
}
export default ContentDetailPage;