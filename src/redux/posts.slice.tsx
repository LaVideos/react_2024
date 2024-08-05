import {IPost} from "../types/IPost";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {JSONServices} from "../services/JSON.services";

type initialStateType = {
    posts:IPost[];
    isLoaded:boolean;
}


const initialState :initialStateType = {
    isLoaded: false,
    posts: []
}


const loadPosts = createAsyncThunk(
    "postsSlice/loadPosts",
    async (_, thunkAPI) =>{
        try {
            const response = await JSONServices.getPosts();
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e){
            const e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1)
        }
    }
)


export const postsSlice = createSlice({
    name:"postsSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loadPosts.fulfilled,(state, action) => {
            state.posts = action.payload
        })
            .addMatcher(isFulfilled(loadPosts),(state, action) => {
                state.isLoaded = true;
            })
    }
});





export const postsAction = {
    ...postsSlice.actions,
    loadPosts
}
