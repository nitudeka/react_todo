import React from 'react';

const Backdrop = (props) => {
  let className = ['backdrop'];
  if (props.show) {
    className.push('backdrop--show')
  } else {
    className.push('backdrop--hide');
  }
  
  return (
    <div onClick={props.onClick} className={className.join(' ')}>
      {props.children}
    </div>
  )
}

export default Backdrop;
