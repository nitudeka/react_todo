/*
 * Custom button for form to handle form submissions
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// handle the authentication (send the request with the data to the API server)
import { authenticateUser } from '../../store/actions';

const formBtn = (props) => {
  const onFormSubmit = () => {
    /*
    * Loop through the inputs
    * extract their respective values
    * and send it back to the action creator
    * add a "joined" property (required by the API server)
    */
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
