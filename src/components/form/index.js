import React from 'react';
import { connect } from 'react-redux';
import { inputChangeHandler } from '../../store/actions';
import Spinner from '../spinner';
import Input from './_input';
import Button from './_btn';

const form = (props) => {
  /*
  * set the form according to the "defaultForm" property
  * if it is "true" then set it to "register" otherwise to "login"
  *
  */
  const mainForm = props.defaultForm ? props.register : props.login;
  const inputs = Object.keys(mainForm.inputs).map((input) => {
    const inputName = mainForm.inputs[input];
    return (
      <Input
        onChange={(event) => {
          props.inputChangeHandler(mainForm.formName, event.target.value, input, inputName.rules) }
        }
        focused={inputName.focused}
        value={inputName.inputValue}
        valid={inputName.valid}
        key={input}
        type={inputName.type}
        placeholder={inputName.placeholder}
      />
    )
  });

  return (
    <div className='form'>
      <Spinner showSpinner={props.showSpinner} />
      <span className='form__header'>{mainForm.formName.toUpperCase()}</span>
      <div className='form__container'>
        { inputs }
      </div>
      <Button formName={mainForm.formName} inputData={mainForm.inputs} formBtn={mainForm.formBtn} />
    </div>
  )
};

const mapStateToProps = (state) => {
  const { form, nav } = state;
  return {
    defaultForm: nav.defaultForm, // required property to toggle between the login and register form
    showSpinner: form.isPending,
    register: form.register,
    login: form.login
  }
};

const mapDispatchToProps = (dispatch, nextstate) => {
  return {
    inputChangeHandler: (formName, inputValue, inputName, rules) => {
      dispatch(inputChangeHandler(formName, inputValue, inputName, rules))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(form);
