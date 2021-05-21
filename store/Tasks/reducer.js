import { tasksActionTypes } from './actions';

const initialState = {
  tasks: null
}

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case tasksActionTypes.SET_TASKS:
      return { ...state, tasks: action.payload }

    default:
      return state
  }
}