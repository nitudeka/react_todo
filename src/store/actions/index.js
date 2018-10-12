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

export const toggleSpinner = () => ({
  type: CHANGE_SPINNER_STATE
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL
});

export const resetState = () => ({
  type: RESET_STATE
});

export const getInputChange = (text) => ({
  type: GET_INPUT_CHANGE,
  payload: text
});

export const getTasks = (data) => ({
  type: GET_TASKS,
  payload: {
    name: data.name,
    email: data.email,
    tasks: data.tasks,
    taskProgress: data.taskProgress
  }
});

export const taskHandler = (dispatch, email, task, url) => {
  dispatch({ type: GET_TASKS_PENDING });
  fetch(`http://localhost:3000/${url}`, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: email,
      task: task
    })
  }).then((res) => res.json())
  .then((data) => {
    if (typeof(data) === 'object') {
      dispatch({ type: GET_TASKS_SUCCESS, payload: data });
    }
  })
  .catch(err => dispatch({ type: GET_TASKS_FAILED, payload: err }));
};
