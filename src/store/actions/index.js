export const getTasks = (data) => ({
  type: 'GET_TASKS',
  payload: {
    name: data.name,
    email: data.email,
    tasks: data.tasks,
    taskProgress: data.taskProgress
  }
})
