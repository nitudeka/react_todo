import React from 'react';

const spinner = (props) => {
  const className = ['spinner-container'];
  if (props.showSpinner) {
    className.push('spinner-container--show');
  } else {
    className.push('spinner-container--hide');
  }
  
  return (
    <div className={className.join(' ')}>
      <div className="spinner">
        <div className="spinner-cube1 spinner-cube"></div>
        <div className="spinner-cube2 spinner-cube"></div>
        <div className="spinner-cube4 spinner-cube"></div>
        <div className="spinner-cube3 spinner-cube"></div>
      </div>
    </div>
  )
};

export default spinner;
