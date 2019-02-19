import {
  INPUT_CHANGE,
  SEND_USER_DATA_PENDING,
  SEND_USER_DATA_SUCCESS,
  SEND_USER_DATA_FAILED
} from '../constants';

const initialState = {
  errorSendingForm: false,
  isPending: false,
  message: {
    message: false,
    statusCode: false
  },
  register: {
    formName: 'register',
    formBtn: 'Take me in',
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
  },
  login: {
    formName: 'login',
    formBtn: 'I am back',
    inputs: {
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
    return {
      ...state,
      isPending: false,
      message: {
        ...state.message,
        message: action.payload.message,
        statusCode: action.payload.statusCode
      }
    };
    case SEND_USER_DATA_FAILED:
      return {
        ...state,
        isPending: false,
        errorSendingForm: true,
        message: {
          ...state.message,
          message: action.payload.message,
          statusCode: action.payload.statusCode
        }
      };
    
    default: return state;
  }
};
