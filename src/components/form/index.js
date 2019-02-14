import React from 'react';
import { connect } from 'react-redux';
import { inputChangeHandler } from '../../store/actions';
import Input from './input';

const form = (props) => {
  const inputs = Object.keys(props.inputs).map((input) => {
    const inputName = props.inputs[input];
    return <Input onChange={(event) => props.inputChangeHandler(event.target.value, input, inputName.rules) } focused={inputName.focused} valid={inputName.valid} key={input} type={inputName.type} placeholder={inputName.placeholder} />
  });

  return (
    <div className='form'>
      <span className='form__header'>Register</span>
      <div className='form__container'>
        { inputs }
      </div>
      <button className='form__btn'>I'm in</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  const { form } = state;
  return {
    validForm: form.validForm,
    inputs: form.inputs
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputChangeHandler: (inputValue, inputName, rules) => dispatch(inputChangeHandler(inputValue, inputName, rules))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(form);
