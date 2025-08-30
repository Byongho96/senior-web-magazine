import React from "react";
import "./ContentDetailPage.css";
import ContentList from "../components/molecules/ContentList";

const ContentDetail = ({ imgUrl, title, subtitle, summary, date, content }) => {
  return (
    <div className="content-detail">
      <div className="image-grid">
        <img src={imgUrl} alt={title} className="detail-image" />
      </div>

      <header className="content-header">
        <h1 className="content-title">{title}</h1>
        <h2 className="content-subtitle">{subtitle}</h2>
        <p className="content-summary">{summary}</p>
        <span className="content-date">{date}</span>
      </header>

      <section className="content-body">
        <div className="content-text">{content}</div>
      </section>
    </div>
  );
};

const ContentDetailPage = () => {
  const sampleContent = {
    imgUrl: 'https://via.placeholder.com/800x400',
    title: '콘텐츠 제목 예시',
    subtitle: '콘텐츠 부제목 예시',
    summary: '이것은 콘텐츠 요약 예시입니다. 주요 내용을 간략히 설명합니다.',
    date: '2024-06-01',
    content: (
      <>
        <p>이것은 콘텐츠 본문 예시입니다. 여기에 다양한 정보와 세부 사항이 포함될 수 있습니다.</p>
        <p>추가 단락을 통해 내용을 확장할 수 있습니다. 예를 들어, 관련 통계, 인용문, 이미지 등이 포함될 수 있습니다.</p>
        <p>콘텐츠는 독자에게 유용한 정보를 제공하고, 흥미를 유발하며, 참여를 촉진하는 것을 목표로 합니다.</p>
      </>
    ),
  };
  return (
    <div>
      <ContentDetail
        imgUrl={sampleContent.imgUrl}
        title={sampleContent.title}
        subtitle={sampleContent.subtitle}
        summary={sampleContent.summary}
        date={sampleContent.date}
        content={sampleContent.content}
      />
      {/* <ContentList/> */}
    </div>
  )
}
export default ContentDetailPage;