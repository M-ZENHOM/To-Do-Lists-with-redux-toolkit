import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  initialState: [],
  name: "todoSlice",
  reducers: {
    AddTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
      //   localStorage.setItem("todos", JSON.stringify(state));
    },
    setCompleted: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    DeleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    ClearAllTodos: (state, action) => {
      return [];
    },
  },
});

export const { AddTodo, setCompleted, DeleteTodo, ClearAllTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
