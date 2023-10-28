import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/Todo-counter'

export default configureStore({
  reducer: {
    todos : todoReducer
  }
})