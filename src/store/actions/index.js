import {
  GET_INPUT_CHANGE,
  GET_TASKS,
  GET_TASKS_PENDING,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILED
} from '../constants';

export const getInputChange = (text) => ({
  type: GET_INPUT_CHANGE,
  payload: text
})

export const getTasks = (data) => ({
  type: GET_TASKS,
  payload: {
    name: data.name,
    email: data.email,
    tasks: data.tasks,
    taskProgress: data.taskProgress
  }
})

export const completedTask = (dispatch, email, task) => {
  dispatch({ type: GET_TASKS_PENDING });
  fetch('http://localhost:3000/taskCompleted', {
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
}

export const deleteTask = (dispatch, email, task) => {
  dispatch({ type: GET_TASKS_PENDING });
  fetch('http://localhost:3000/deleteTask', {
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
}

export const newTask = (dispatch, email, task) => {
  dispatch({ type: GET_TASKS_PENDING });
  fetch('http://localhost:3000/newTask', {
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
}
