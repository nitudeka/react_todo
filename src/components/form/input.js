import React from 'react';

const input = (props) => {
  let classNames = ['form__input'];
  if (props.focused) {
    classNames.push('form__input--invalid');
    if (props.valid) {
      classNames.push('form__input--valid');
    }
  }
  return (
    <input onChange={props.onChange} className={classNames.join(' ')} type={props.type} placeholder={props.placeholder} />
  )
};

export default input;
