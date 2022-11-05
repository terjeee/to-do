import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  id: number;
  todo: string;
}

const initialState: State[] = [];

const sliceToDo = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    TODO_ADD: (state, action: PayloadAction<{ todo: string }>) => {
      state.push({ id: Date.now(), todo: action.payload.todo });
    },
    TODO_REMOVE: (state, action: PayloadAction<{ id: number }>) => {
      state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { TODO_ADD, TODO_REMOVE } = sliceToDo.actions;

export default sliceToDo.reducer;
