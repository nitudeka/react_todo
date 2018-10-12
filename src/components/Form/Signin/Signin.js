import React, { Component } from 'react';
import Input from '../Input/Input';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTasks } from '../../../store/actions';
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
      this.props.toggleSpinner();
      fetch('https://reacttodoapi.herokuapp.com/login', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.form.email.value,
          password: this.state.form.password.value
        })
      }).then((res) => res.json())
      .then((userData) => {
        this.props.toggleSpinner();
        if (typeof(userData) === 'object') {
          const email = userData.email;
          const name = userData.name;
          const tasks = Object.keys(userData.tasks);
          const taskProgress = tasks.map((task) => {
            return userData.tasks[task];
          })
          const data = { email, name, tasks, taskProgress};
          this.props.loginUser(data);
          this.props.history.push('/');
        }
      })
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
        <div onClick={() => console.log(this.props.email)} className='form__head'>
          <h3 className='form__heading'>Signin</h3>
        </div>
        {form}
        <button disabled={!this.state.formIsValid} onClick={signinHandler} className='form__btn'>Sign in</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.email
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(getTasks(data)),
  toggleSpinner: () => dispatch({ type: 'CHANGE_SPINNER_STATE' })
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
