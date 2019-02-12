import React, { Component } from 'react';
import Input from './input';

class Form extends Component {
  render() {
    return (
      <div className='form'>
        <span className='form__header'>Register</span>
        <div className='form__container'>
          <Input type='text' placeholder='Name' />
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='Password' />
        </div>
        <button className='form__btn'>I'm in</button>
      </div>
    )
  }
}

export default Form;
