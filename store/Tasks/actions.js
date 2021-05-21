export const tasksActionTypes = {
  SET_TASKS: 'TASKS.SET_TASKS'
}

export const tasksActions = {
  setTasks: (data) => ({ type: tasksActionTypes.SET_TASKS, payload: data })
}