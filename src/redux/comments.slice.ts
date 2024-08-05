import {IComment} from "../types/IComment";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {JSONServices} from "../services/JSON.services";

type initialStateType = {
    comments:IComment[],
    isLoaded:boolean
}

const initialState:initialStateType = {comments: [], isLoaded: false};


const loadComments = createAsyncThunk(
    "commentsSlice/loadComments",
    async (arg, thunkAPI) => {
        try {

            const response = await JSONServices.getComments();
            return thunkAPI.fulfillWithValue(response.data)

        }catch (e){

            const e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1)

        }
    }
)


export const commentsSlice = createSlice({
    name:"commentsSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loadComments.fulfilled,(state, action) => {
            state.comments = action.payload
        })
            .addMatcher(isFulfilled(loadComments),(state, action) => {
                state.isLoaded = true;
            })
    }
})


export const commentsAction = {
    ...commentsSlice.actions,
    loadComments
}
