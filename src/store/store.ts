import { configureStore } from "@reduxjs/toolkit";

import sliceToDo from "./slices/sliceToDo";

const store = configureStore({ reducer: { to: sliceToDo } });

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
