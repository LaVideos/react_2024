import {IComment} from "../types/IComment";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {JSONServices} from "../services/JSON.services";
import {AxiosError} from "axios";

type initialStateType = {
    comments:IComment[]|undefined,
    isLoaded:boolean
}

const initialState:initialStateType = {
    comments:undefined,
    isLoaded:false
}


const getComments = createAsyncThunk(
    "commentsSlice/getComments",
    async (_,thunkApi)=>{
        try {
            const response = await JSONServices.getComments();
            return thunkApi.fulfillWithValue(response.data)
        }catch (e){
            const e1 = e as AxiosError;
            console.log(thunkApi.rejectWithValue(e1))

        }
    }
);

export const commentsSlice = createSlice({
    name:"todosSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getComments.fulfilled,(state,action) => {
                state.comments = action.payload
            })
            .addMatcher(isFulfilled(getComments),(state, action) => {
                state.isLoaded = true;
            })
    }
});


export const commentsAction = {
    ...commentsSlice.actions,
    getComments
}
