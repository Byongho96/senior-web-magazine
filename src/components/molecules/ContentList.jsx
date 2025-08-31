import React from 'react';
import './ContentList.css';
import { NavLink } from 'react-router-dom';

const ContentCard = ({ category, title, imageUrl, progress}) => {
  return (
    <NavLink to='/content' style={{}}>
      <article className="content-card">
        <span className="content-card__category">{category}</span>
        <img
          src={imageUrl}
          alt=""
          className="content-card__image"
          />
        {
          progress && 
          <div className="content-card__progress-bar">
            <div style={{width : `${progress}%`}}/>
          </div>
        }
        <h2 className="content-card__title">
          {title}
        </h2>
      </article>
    </NavLink>
  );
};

const ContentList = (
  {
    title,
    subtitle,
    contents
  }
) => {
  return (
    <div className="content-list">
       { title &&
        <div className="content-list__title">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
      }
      <ul>
        {contents.map((content, index) => (
          <li key={index}>
            <ContentCard
              category={content.category}
              title={content.title}
              imageUrl={content.imageUrl}
              progress={content.progress}
              />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContentList;