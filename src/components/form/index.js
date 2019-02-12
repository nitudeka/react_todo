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
    }
  }

  inputChangeHandler = (input, inputName) => {
    const inputIsValid = validate(input, this.state.inputs[inputName].rules);
    if (inputIsValid) {
      const updatedInputs = {
        ...this.state.inputs,
        [inputName]: {
          ...this.state.inputs[inputName],
          valid: true,
          focused: true
        }
      };
      this.setState({ inputs: updatedInputs });
    } else {
      const updatedInputs = {
        ...this.state.inputs,
        [inputName]: {
          ...this.state.inputs[inputName],
          valid: false,
          focused: true
        }
      };
      this.setState({ inputs: updatedInputs });
    }
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
        <button className='form__btn'>I'm in</button>
      </div>
    )
  }
}

export default Form;
