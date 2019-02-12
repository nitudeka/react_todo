import React from 'react';

const input = (props) => {
  return (
    <input className='form__input' type={props.type} placeholder={props.placeholder} />
  )
};

export default input;
