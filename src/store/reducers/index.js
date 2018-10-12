const initialState = {
  name: '',
  inputValue: '',
  email: '',
  tasks: [],
  modalShown: false,
  taskProgress: []
}

const resetState = {
  name: '',
  inputValue: '',
  email: '',
  tasks: [],
  modalShown: false,
  taskProgress: []
}

export default (state=initialState, action={}) => {
  switch (action.type) {
    case 'GET_INPUT_CHANGE':
      return { ...state, inputValue: action.payload };
    
    case 'GET_TASKS':
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        tasks: action.payload.tasks,
        taskProgress: action.payload.taskProgress
      }

    case 'TOGGLE_MODAL':
      return {
        ...state, modalShown: !state.modalShown
      }
    
    case 'RESET_STATE':
      return { resetState };

    case 'GET_TASKS_PENDING':
      return { ...state, isPending: true };

    case 'GET_TASKS_SUCCESS':
      const tasks = Object.keys(action.payload);
      const taskProgress = tasks.map((task) => {
        return action.payload[task];
      })
      return { ...state, isPending: false, tasks: tasks, taskProgress: taskProgress };

    case 'GET_TASKS_FAILED':
      return { ...state, isPending: false, err: action.payload };

    default: return state;
  }
}
