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
    <div>
      <Backdrop onClick={props.onClick} show={props.modalIsVisible} />
      <div className={className.join(' ')}>
          {props.children}
      </div>
    </div>
  )
}

export default Modal;
