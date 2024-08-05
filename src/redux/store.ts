import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "./users.slice";
import {postsSlice} from "./posts.slice";
import {commentsSlice} from "./comments.slice";
import {todosSlice} from "./todos.slice";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer:{
        usersSlice:usersSlice.reducer,
        postsSlice:postsSlice.reducer,
        commentsSlice:commentsSlice.reducer,
        todosSlice:todosSlice.reducer,
    }
})


export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
