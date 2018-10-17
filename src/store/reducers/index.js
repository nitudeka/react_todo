import {
  GET_INPUT_CHANGE,
  CHANGE_SPINNER_STATE,
  TOGGLE_MODAL,
  GET_TASKS_PENDING,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILED,
  AUTHENTICATING_USER_PENDING,
  AUTHENTICATING_USER_SUCCESS,
  AUTHENTICATING_USER_FAILED
} from '../constants';

const initialState = {
  name: '',
  inputValue: '',
  email: '',
  tasks: [],
  modalShown: false,
  taskProgress: [],
  isPending: false,
  errMsg: false
}

export default (state=initialState, action={}) => {
  switch (action.type) {
    case GET_INPUT_CHANGE:
      return { ...state, inputValue: action.payload };

    case 'RESET_STATE':
      return { ...state, errMsg: false };
    
    case CHANGE_SPINNER_STATE:
      return { ...state, isPending: !state.isPending };

    case TOGGLE_MODAL:
      return {
        ...state, modalShown: !state.modalShown
      }

    case GET_TASKS_PENDING:
      return { ...state, isPending: true };

    case GET_TASKS_SUCCESS:
      const tasks = Object.keys(action.payload);
      const taskProgress = tasks.map((task) => {
        return action.payload[task];
      })
      return { ...state, isPending: false, tasks: tasks, taskProgress: taskProgress };

    case GET_TASKS_FAILED:
      return { ...state, isPending: false, err: action.payload };
    
    case AUTHENTICATING_USER_PENDING:
      return { ...state, isPending: true };
      
    case AUTHENTICATING_USER_SUCCESS:
      return { ...state, isPending: false }

    case AUTHENTICATING_USER_FAILED:
      return { ...state, isPending: false, errMsg: action.payload }
      
    default: return state;
  }
}
