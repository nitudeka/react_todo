import {
  GET_INPUT_CHANGE,
  CHANGE_SPINNER_STATE,
  GET_TASKS,
  TOGGLE_MODAL,
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

export const taskHandler = (dispatch, task, url) => {
  dispatch({ type: GET_TASKS_PENDING });
  fetch(`http://localhost:3000/${url}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('token')
    },
    body: JSON.stringify({
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

export const authHandler = (email, password, name, url) => {
  return (dispatch) => {
    dispatch({ type: 'SIGNINT_USER_PENDING' });
    fetch(`http://localhost:3000/${url}`, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password, name })
    }).then((res) => res.json())
    .then((token) => {
      if (typeof(token) === 'object') {
        localStorage.setItem('token', token.token);
        dispatch({ type: 'SIGNINT_USER_SUCCESS' });
      } else {
        dispatch({ type: 'SIGNINT_USER_FAILED', payload: token })
      }
    })
    .catch((err) => {
      dispatch({ type: 'SIGNINT_USER_FAILED'})
    })
  }
}
