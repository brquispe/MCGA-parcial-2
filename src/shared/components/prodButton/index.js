import React from 'react'

const sharedButton = ({text, onClick, type}) => {
    return (
      <button type={type} onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default sharedButton;