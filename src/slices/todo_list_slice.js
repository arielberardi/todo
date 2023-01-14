import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: { 
    filter: 'all',
    list: [
      { id: 1, title: 'Take out the trash', date: '12-2-25', completed: false }
    ] 
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    updateTodo: (state, action) => {
      state.list.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
          todo.date = action.payload.date;
          todo.completed = action.payload.completed;
        }
      });
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload.id);
    },
    updateTodoFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTodo, updateTodo, deleteTodo, updateTodoFilter } = todoListSlice.actions;
export default todoListSlice.reducer;