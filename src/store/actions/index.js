import { INPUT_CHANGE, CHANGE_FORM } from '../constants';
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
})
