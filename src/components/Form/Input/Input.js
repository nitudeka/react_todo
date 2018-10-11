import React from 'react';

const Input = (props) => {
  let style = {};
  if (props.focused) {
    if (props.valid) {
      style = {borderBottom: '3px solid #007e33'}
    } else {
      style = {borderBottom: '3px solid #ff3547'}
    }
  }
  
  return (
    <div className='form__inputs'>
      <input style={style} className='form__input' type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
      <label className='form__label'>{props.label}</label>
    </div>
  )
}

export default Input;
