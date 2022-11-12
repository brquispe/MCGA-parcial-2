import React from 'react'

const SharedInput = ({register, type, placeholder, name, rules}) => {
    return (
      <input {...register(`${name}`, rules)} type={type} placeholder={placeholder} name={name}>
      </input>
    );
  };
  
  export default SharedInput;