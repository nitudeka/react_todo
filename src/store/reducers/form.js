import {
  INPUT_CHANGE,
  SEND_USER_DATA_PENDING,
  SEND_USER_DATA_SUCCESS,
  SEND_USER_DATA_FAILED
} from '../constants';

const initialState = {
  isPending: false,
  errMsg: false,
  register: {
    formName: 'register',
    formBtn: 'Take me in',
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
    formBtn: 'I am back',
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
    case SEND_USER_DATA_PENDING:
      return { ...state, isPending: true };
    case SEND_USER_DATA_SUCCESS:
      return { ...state, isPending: false };
    case SEND_USER_DATA_FAILED:
      return { ...state, isPending: false, errMsg: action.payload.message };
    
    default: return state;
  }
};
