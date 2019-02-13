import React, { Component } from 'react';
import validate from './validate';
import Input from './input';

class Form extends Component {
  state = {
    inputs: {
      name: {
        type: 'text',
        placeholder: 'Name',
        valid: false,
        focused: false,
        rules: {
          required: true
        }
      },
      email: {
        type: 'email',
        placeholder: 'Email',
        valid: false,
        focused: false,
        rules: {
          required: true,
          email: true
        }
      },
      password: {
        type: 'password',
        placeholder: 'Password',
        valid: false,
        focused: false,
        rules: {
          required: true,
          minLength: 6
        }
      }
    },
    validForm: false
  }

  inputChangeHandler = (input, inputName) => {
    const inputIsValid = validate(input, this.state.inputs[inputName].rules);
    this.setState((prevState) => {
      const updatedInputs = {
        ...prevState.inputs,
        [inputName]: {
          ...prevState.inputs[inputName],
          valid: inputIsValid,
          focused: true
        }
      };
      return { inputs: updatedInputs };
    });
    this.setState((prevState) => ({
      validForm: prevState.inputs.name.valid && prevState.inputs.email.valid && prevState.inputs.password.valid
    }));
  };

  render() {
    const inputs = Object.keys(this.state.inputs).map((input) => {
      const inputName = this.state.inputs[input];
      return <Input onChange={(event) => this.inputChangeHandler(event.target.value, input) } focused={inputName.focused} valid={inputName.valid} key={input} type={inputName.type} placeholder={inputName.placeholder} />
    });
    
    return (
      <div className='form'>
        <span className='form__header'>Register</span>
        <div className='form__container'>
          { inputs }
        </div>
        <button disabled={!this.state.validForm} className='form__btn'>I'm in</button>
      </div>
    )
  }
}

export default Form;
