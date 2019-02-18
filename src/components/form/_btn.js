import React from 'react';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../store/actions';

const formBtn = (props) => {
  const onFormSubmit = () => {
    const inputValues = Object.keys(props.inputData).map((inputName) => {
      return {
        [inputName]: props.inputData[inputName].inputValue
      }
    });
    if (props.formName === 'register') {
      props.registerUser(inputValues);
    } else {
      props.loginUser(inputValues);
    }
  };
  
  return (
    <button onClick={onFormSubmit} className='form__btn'>{props.formBtn}</button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  registerUser: (inputValues) => registerUser(dispatch, inputValues),
  loginUser: (inputValues) => loginUser(dispatch, inputValues)
});

export default connect(null, mapDispatchToProps)(formBtn);
