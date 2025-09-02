
import React, { useContext, useState } from 'react';
import naverImg from '../assets/images/social_logins/naver.webp';
import kakaoImg from '../assets/images/social_logins/kakao.webp';
import googleImg from '../assets/images/social_logins/google.webp';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import './LoginPage.css';

const LoginPage = () => {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');
  const { setIsLogin } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (id && password) {
      setIsLogin(true);
      navigate('/');
    } else {
      alert('아이디와 비밀번호를 입력하세요');
    }
  }

  return (
    <div className='login-page'>
      <div className='login-page__container'>
        <h2>로그인</h2>
        <div className='login-page__social-logins'>
          <button className='naver-login'><img src={naverImg}/></button>
          <button className='kakao-login'><img src={kakaoImg}/></button>  
          <button className='google-login'><img src={googleImg}/></button>
        </div>
        <input type='text' placeholder='아이디' value={id} onChange={(e) => setId(e.target.value)}/>
        <input type='password' placeholder='비밀번호' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="button" onClick={handleLogin}>로그인</button>
        <p>아직 회원이 아니신가요? <a>회원가입</a></p>
      </div>
    </div>
  );
};


export default LoginPage;