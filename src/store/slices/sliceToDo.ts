import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "../store";

interface State {
  id: string;
  todo: string;
  active: boolean;
}

const initialState: State[] = JSON.parse(String(localStorage.getItem("todo"))) || [];

const sliceToDo = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    TODO_ADD: (state, action: PayloadAction<{ todo: string }>) => {
      state.push({ id: String(Date.now()), todo: action.payload.todo, active: true });
    },
    TODO_TOGGLE_INACTIVE: (state, action: PayloadAction<{ id: string }>) =>
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, active: !todo.active };
        }
        return todo;
      }),
    TODO_REMOVE: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

// export state
type RootState = ReturnType<typeof store.getState>;
export const stateToDo = (state: RootState) => state.todo;

// export actions
export const { TODO_ADD, TODO_TOGGLE_INACTIVE, TODO_REMOVE } = sliceToDo.actions;

// export til store.ts
export default sliceToDo;
