import { INPUT_CHANGE } from '../constants';

const initialState = {
  register: {
    formName: 'register',
    inputs: {
      registerName: {
        type: 'text',
        placeholder: 'Name',
        valid: false,
        focused: false,
        inputValue: '',
        rules: {
          required: true
        }
      },
      registerEmail: {
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
      registerPassword: {
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
  },
  login: {
    formName: 'login',
    inputs: {
      loginEmail: {
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
      loginPassword: {
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
}

export default (state=initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      const { formName, inputName, inputValue, valid } = action.payload;
      return {
        ...state,
        [formName]: {
          ...state[formName],
          inputs: {
            ...state[formName].inputs,
            [inputName]: {
              ...state[formName].inputs[inputName],
              focused: true, valid, inputValue
            }
          }
        }
      }
    
    default: return state;
  }
};
