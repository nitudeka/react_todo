import React, { Component } from 'react';
import Input from '../Input/Input';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authHandler } from '../../../store/actions';
import FormValidation from '../FormValidation';

class Register extends Component {
  state = {
    form: {
      email: {
        label: 'Your email',
        type: 'text',
        placeholder: 'Your email',
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        focused: false
      },
      password: {
        label: 'Your Password',
        type: 'password',
        placeholder: 'Your password',
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        focused: false
      },
    },
    errorMessage: null,
    formIsValid: false
  }

  onInputChange = (event, element) => {
    const updatedState = {...this.state.form};
    const updatedElement = {...updatedState[element]};
    updatedElement.value = event.target.value;
    updatedElement.focused = true;
    updatedElement.valid = FormValidation(event.target.value, updatedElement.validation);
    updatedState[element] = updatedElement;
    let formIsValid = true;
    Object.keys(updatedState).map(elements => {
      return formIsValid = updatedState[elements].valid && formIsValid;
    })
    this.setState({form: updatedState, formIsValid: formIsValid});
  }

  render () {
    const signinHandler = () => {
      this.props.signinHandler(this.state.form.email.value, this.state.form.password.value);
    }
    
    const form = Object.keys(this.state.form).map(element => {
      return <Input
        valid={this.state.form[element].valid}
        focused={this.state.form[element].focused}
        key={element}
        placeholder={this.state.form[element].placeholder}
        type={this.state.form[element].type}
        label={this.state.form[element].label}
        onChange={(event) => this.onInputChange(event, element)}
      />
    })
    
    return (
      <div className='form'>
        <div className='form__head'>
          <div className='form__heading'>
            <span className='form__heading--main'>Signin</span>
            <span className='form__heading--sub'>{this.props.errMsg}</span>
          </div>
        </div>
        {form}
        <button disabled={!this.state.formIsValid} onClick={signinHandler} className='form__btn'>Sign in</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
  errMsg: state.errMsg
})

const mapDispatchToProps = (dispatch) => ({
  signinHandler: (email, password) => dispatch(authHandler(email, password, null, 'login')),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
