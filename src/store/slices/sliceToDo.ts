import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "../store";

interface State {
  id: string;
  todo: string;
}

const initialState: State[] = [];

const sliceToDo = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    TODO_ADD: (state, action: PayloadAction<{ todo: string }>) => {
      state.push({ id: String(Date.now()), todo: action.payload.todo });
    },
    TODO_REMOVE: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

// export stateToDo
type RootState = ReturnType<typeof store.getState>;
export const stateToDo = (state: RootState) => state.todo;

// export actionToDo
export const { TODO_ADD, TODO_REMOVE } = sliceToDo.actions;

// export til store.ts
export default sliceToDo;
