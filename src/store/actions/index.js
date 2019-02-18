import {
  INPUT_CHANGE,
  CHANGE_FORM,
  SEND_USER_DATA_PENDING,
  SEND_USER_DATA_SUCCESS,
  SEND_USER_DATA_FAILED
} from '../constants';
import validateInput from './_validateInput';

export const inputChangeHandler = (formName, inputValue, inputName, rules) => {
  const inputIsValid = validateInput(inputValue, rules);
  return {
    type: INPUT_CHANGE,
    payload: { formName, inputValue, inputName, valid: inputIsValid }
  }
};

export const toggleForm = () => ({
  type: CHANGE_FORM
});

export const registerUser = (dispatch, inputValues) => {
  dispatch({ type: SEND_USER_DATA_PENDING });
  fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: inputValues.registerName, email: inputValues.registerEmail, password: inputValues.registerPassword, joined: Date.now() })
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: SEND_USER_DATA_SUCCESS,
        token: data.token
      });
    })
    .catch((err) => {
      dispatch({ type: SEND_USER_DATA_FAILED });
    })
};

export const loginUser = (dispatch, inputValues) => {
  dispatch({ type: SEND_USER_DATA_PENDING });
  fetch('http://localhost:3000/signin', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email: inputValues.loginEmail, password: inputValues.loginPassword, joined: Date.now() })
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: SEND_USER_DATA_SUCCESS,
        token: data.token
      });
    })
    .catch((err) => {
      dispatch({ type: SEND_USER_DATA_FAILED, message: err.message });
    })
};
