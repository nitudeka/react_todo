import { INPUT_CHANGE } from '../constants';
import validateInput from './_validateInput';

export const inputChangeHandler = (inputValue, inputName, rules) => {
  const inputIsValid = validateInput(inputValue, rules);
  return {
    type: INPUT_CHANGE,
    payload: { inputValue, inputName, valid: inputIsValid }
  }
};
