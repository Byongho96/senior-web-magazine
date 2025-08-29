
import React from 'react';
import './HomePage.css';
import Button from '../components/atoms/Button';
import MainBanner from '../components/organisms/MainBanner';

const HomePage = () => {

  return (
    <div>
      <h1>홈페이지에 오신 것을 환영합니다!</h1>
      <MainBanner/>
    </div>
  );
};


export default HomePage;