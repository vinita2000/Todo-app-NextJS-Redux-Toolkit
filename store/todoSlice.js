import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
  { id: 1, title: "Bake chocolate cake", completed: false },
  { id: 2, title: "Buy a sanitiser", completed: false },
  { id: 3, title: "Renovate the room", completed: true },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      // console.log("Add todo reducer: ", action.payload.title);
      const newTodo = {
        id: new Date().toISOString(),
        title: action.payload.title,
        completed: false,
      };
      state.unshift(newTodo);
    },
    deleteTodo: (state, action) => {
      // console.log("Delete todo reducer");
      return state.filter((todoItem) => todoItem.id !== action.payload.id);
    },
    markTodoDone: (state, action) => {
      // console.log("Mark as done Todo reducer");
      const index = state.findIndex(
        (todoItem) => todoItem.id === action.payload.id
      );
      if (index === -1) return;
      state[index].completed = true;
    },
  },
});

export const { addTodo, deleteTodo, markTodoDone } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
