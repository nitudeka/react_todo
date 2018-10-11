import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  let className = ['modal'];
  if (props.modalIsVisible) {
    className.push('modal--show');
  } else {
    className.push('modal--hide');
  }
  
  return (
    <div className={className.join(' ')}>
      <Backdrop show={props.modalIsVisible} />
      {props.children}
    </div>
  )
}

export default Modal;
