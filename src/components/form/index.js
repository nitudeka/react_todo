import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import Input from './_input';
import Button from './_btn';

class Form extends Component {
  render() {
    /*
    * set the form according to the "defaultForm" property
    * if it is "true" then set it to "register" otherwise to "login"
    *
    */
    const mainForm = this.props.defaultForm ? this.props.register : this.props.login;
    const inputs = Object.keys(mainForm.inputs).map((input) => {
      const inputName = mainForm.inputs[input];
      return (
        <Input
          formName={mainForm.formName}
          inputName={input}
          rules={inputName.rules}
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
        <Spinner showSpinner={this.props.showSpinner} />
        <span className='form__header'>{mainForm.formName.toUpperCase()}</span>
        <div className='form__container'>
          { inputs }
        </div>
        <Button formName={mainForm.formName} inputData={mainForm.inputs} formBtn={mainForm.formBtn} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { form, nav } = state;
  return {
    defaultForm: nav.defaultForm, // required property to toggle between the login and register form
    showSpinner: form.isPending,
    register: form.register,
    login: form.login
  }
};

export default connect(mapStateToProps)(Form);
