import React, { Component } from 'react';
import validate from './validate';
import Input from './input';

class Form extends Component {
  state = {
    inputs: {
      name: {
        type: 'text',
        placeholder: 'Name',
        rules: {
          required: true
        }
      },
      email: {
        type: 'email',
        placeholder: 'Email',
        rules: {
          required: true,
          email: true
        }
      },
      password: {
        type: 'password',
        placeholder: 'Password',
        rules: {
          required: true,
          minLength: 6
        }
      }
    },
    validInputs: [],
    focusedInputs: [],
    validForm: false
  }

  inputChangeHandler = (input, inputName) => {
    const inputIsValid = validate(input, this.state.inputs[inputName].rules);
    this.setState({ focusedInputs: [ ...this.state.focusedInputs, inputName ] });
    if (inputIsValid) {
      this.setState((prevState) => {
        prevState.validInputs.push(inputName);
        return { validInputs: prevState.validInputs };
      })
    } else {
      this.setState((prevState) => {
        delete prevState.validInputs[prevState.validInputs.indexOf(inputName)];
        return { validInputs: prevState.validInputs };
      })
    }
    if (this.state.validInputs.length === Object.keys(this.state.inputs).length) {
      this.setState({ validForm: true });
    }
  };

  render() {
    const inputs = Object.keys(this.state.inputs).map((input) => {
      const inputName = this.state.inputs[input];
      return <Input onChange={(event) => this.inputChangeHandler(event.target.value, input) } focused={this.state.focusedInputs.indexOf(input) > -1} valid={this.state.validInputs.indexOf(input) > -1} key={input} type={inputName.type} placeholder={inputName.placeholder} />
    });
    
    return (
      <div className='form'>
        <span className='form__header'>Register</span>
        <div className='form__container'>
          { inputs }
        </div>
        <button disabled className='form__btn'>I'm in</button>
      </div>
    )
  }
}

export default Form;
