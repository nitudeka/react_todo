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
};

export const loginUser = (dispatch, inputValues) => {
  dispatch({ type: SEND_USER_DATA_PENDING });
};
