import {IPost} from "../types/IPost";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {JSONServices} from "../services/JSON.services";

interface initialStateInterface{
    posts:IPost[]|undefined,
    isLoaded:boolean
}


const initialState:initialStateInterface = {
  posts:undefined,
    isLoaded:false
};



const getPosts = createAsyncThunk(
    "postSlice/getPosts",
    async (_,thunkAPI)=>{
        try {
            const response = await JSONServices.getPosts();
            return thunkAPI.fulfillWithValue(response.data);

        }catch (e){
            let e1 = e as AxiosError;
            console.log(thunkAPI.rejectWithValue(e1));
        }
    }
);


export const postsSlice = createSlice({
    name:"postsSlice",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>builder
        .addCase(getPosts.fulfilled,(state, action) => {
            state.posts = action.payload
        })
        .addMatcher(isFulfilled(getPosts),(state, action) => {
            state.isLoaded = true
        })
})



export const postsActions = {
    ...postsSlice.actions,
    getPosts,
}






export {}
