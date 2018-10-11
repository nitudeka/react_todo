const initialState = {
  name: '',
  email: '',
  tasks: [],
  modalShown: false,
  taskProgress: []
}

const resetState = {
  name: '',
  email: '',
  tasks: [],
  modalShown: false,
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

    case 'TOGGLE_MODAL':
      return {
        ...state, modalShown: !state.modalShown
      }
    
    case 'RESET_STATE':
      return { resetState };

    default: return state;
  }
}
