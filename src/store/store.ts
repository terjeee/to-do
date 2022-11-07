import { configureStore } from "@reduxjs/toolkit";

import sliceToDo from "./slices/sliceToDo";

const store = configureStore({ reducer: { todo: sliceToDo.reducer } });

export default store;
