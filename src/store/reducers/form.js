import { INPUT_CHANGE } from '../constants';

const initialState = {
  inputs: {
    name: {
      type: 'text',
      placeholder: 'Name',
      valid: false,
      focused: false,
      inputValue: '',
      rules: {
        required: true
      }
    },
    email: {
      type: 'email',
      placeholder: 'Email',
      valid: false,
      focused: false,
      inputValue: '',
      rules: {
        required: true,
        email: true
      }
    },
    password: {
      type: 'password',
      placeholder: 'Password',
      valid: false,
      focused: false,
      inputValue: '',
      rules: {
        required: true,
        minLength: 6
      }
    }
  }
}

export default (state=initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      const { inputName, inputValue, valid } = action.payload;
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [inputName]: {
            ...state.inputs[inputName],
            focused: true,
            inputValue, valid
          }
        },
      };
    
    default: return state;
  }
};
