import React from 'react';
import '../style-sheets/Button.css'

function Button({ text, clickButton, handleClick }) {
  return (
    <button className={clickButton ? 'click-button' : 'reset-button'}
    onClick={handleClick}>
    {text}
    </button>
  );
}

export default Button;