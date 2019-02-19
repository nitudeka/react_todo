import React from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../../store/actions';

const formBtn = (props) => {
  const onFormSubmit = () => {
    const inputValues = {};
    const inputs = Object.keys(props.inputData);
    for(let i=0; i<inputs.length; i++) {
      inputValues[inputs[i]] = props.inputData[inputs[i]].inputValue;
    }
    const reqData = { ...inputValues, joined: Date.now() };
    const path = props.formName === 'register' ? 'register' : 'signin';
    props.authenticateUser(reqData, path);
  };
  
  return (
    <button onClick={onFormSubmit} className='form__btn'>{props.formBtn}</button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  authenticateUser: (reqData, path) => authenticateUser(dispatch, path, reqData)
});

export default connect(null, mapDispatchToProps)(formBtn);
