import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from '../slices/todo_list_slice.js';

export default configureStore({
  reducer: {
    todoList: todoListReducer
  }
})