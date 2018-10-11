const initialState = {
  name: '',
  email: '',
  tasks: [],
  taskProgress: []
}

const resetState = {
  name: '',
  email: '',
  tasks: [],
  taskProgress: []
}

export default (state=initialState, action={}) => {
  switch (action.type) {
    case 'GET_TASKS':
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        tasks: action.payload.tasks,
        taskProgress: action.payload.taskProgress
      }
    
    case 'RESET_STATE':
      return { resetState };

    default: return state;
  }
}
