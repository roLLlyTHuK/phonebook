import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from './operations';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodoLocally: {
      reducer(state, action) {
        state.todos.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTodoLocally(state, action) {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
    toggleCompletedLocally(state, action) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          todo => todo.id === action.payload.id
        );
        state.todos.splice(index, 1);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          todo => todo.id === action.payload.id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      });
  },
});

export const { addTodoLocally, deleteTodoLocally, toggleCompletedLocally } =
  todosSlice.actions;
export const todosReducer = todosSlice.reducer;
