import { combineReducers } from 'redux'

import { tasksReducer as tasks } from './Tasks'

export const reducers = combineReducers({
  tasks
})