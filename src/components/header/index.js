/*
 * Header for my homepage
 *
 */

import React from 'react';
import Form from '../form/index'; // Forms required in the header

const header = () => {
  return (
    <div className='header'>
      <span className='header__seperator'></span>
      <div className='header__container'>
        <div className='header__container--main'>
          <h2 className='header__heading'>Todo</h2>
          <span className='header__heading--main'>An app to manage your tasks</span>
          <span className='header__heading--sub'>Try it or create an account to use it across your devices</span>
        </div>
        <div className='header__container--sub'>
          <Form />
        </div>
      </div>
    </div>
  )
};

export default header;
