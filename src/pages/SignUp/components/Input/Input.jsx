import React from 'react';
import './Input.scss';

const Input = ({
  className,
  title,
  type,
  placeholder,
  maxLength,
  isPassword,
}) => {
  const isHaveIcon = Boolean(isPassword);
  return (
    <div className={`${className} wrap`}>
      <label>{title}</label>
      <div className="inputWrap">
        <input type={type} placeholder={placeholder} maxlength={maxLength} />
        {isHaveIcon && (
          <img
            className="showPasswordIcon"
            src="/images/hide.png"
            alt="비밀번호 보이기"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
