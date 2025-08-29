// src/components/Button.jsx

import React from 'react';
import './Button.css';

const Button = ({
  text,
  size = 'medium',
  color = 'primary',
  icon,
  iconPosition = 'left',
  onClick,
  ...rest 
}) => {

  const classNames = [
    'btn',
    `btn-size-${size}`,
    `btn-color-${color}`,
    icon ? `btn-icon-${iconPosition}` : '',
  ].join(' ');

  return (
    <button
      className={classNames}
      onClick={onClick}
      {...rest} // disabled, type="submit" 등 모든 속성을 여기에 적용합니다.
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-content">{text}</span>
    </button>
  );
};


export default Button;