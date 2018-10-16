import {
  GET_INPUT_CHANGE,
  CHANGE_SPINNER_STATE,
  GET_TASKS,
  TOGGLE_MODAL,
  RESET_STATE,
  GET_TASKS_PENDING,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILED
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

const resetState = {
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
    
    case CHANGE_SPINNER_STATE:
      return { ...state, isPending: !state.isPending };
      
    case GET_TASKS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        tasks: action.payload.tasks,
        taskProgress: action.payload.taskProgress
      }

    case TOGGLE_MODAL:
      return {
        ...state, modalShown: !state.modalShown
      }
    
    case RESET_STATE:
      return { resetState };

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
    
    case 'SIGNINT_USER_PENDING':
      return { ...state, isPending: true };
      
    case 'SIGNINT_USER_SUCCESS':
      return { ...state, isPending: false }

    case 'SIGNINT_USER_FAILED':
      return { ...state, isPending: false, errMsg: action.payload }
      
    default: return state;
  }
}
