import {
  INPUT_CHANGE,
  CHANGE_FORM,
  REMOVE_NOTIFICATION,
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

export const removeNotification = (index) => ({
  type: REMOVE_NOTIFICATION,
  payload: { index }
});

export const authenticateUser = (dispatch, path, reqData) => {
  dispatch({ type: SEND_USER_DATA_PENDING });
  let statusCode;
  fetch(`http://localhost:3000/${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify( reqData )
  })
    .then((res) => {
      statusCode = res.status;
      return res.json()
    })
    .then((data) => {
      // store the token in the browser cache
      window.localStorage.setItem('token', data.token);
      dispatch({
        type: SEND_USER_DATA_SUCCESS,
        payload: {
          message: data.message, statusCode
        }
      });
    })
    .catch((err) => {
      dispatch({
        type: SEND_USER_DATA_FAILED,
        payload: {
          message: err.message, statusCode
        }
      });
    })
};
