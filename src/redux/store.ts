import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./user-slice";
import {postsSlice} from "./post-slice";
import {todosSlice} from "./todos-slice";
import {commentsSlice} from "./comment-slice";

export const store = configureStore({
    reducer:{
        userSlice:userSlice.reducer,
        postSlice:postsSlice.reducer,
        todosSlice:todosSlice.reducer,
        commentsSlice:commentsSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

