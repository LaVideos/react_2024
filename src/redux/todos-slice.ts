import {ITodo} from "../types/ITodo";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {JSONServices} from "../services/JSON.services";
import {AxiosError} from "axios";

type initialStateType = {
    todos:ITodo[]|undefined;
    isLoaded:boolean
}


const initialState:initialStateType = {
    todos:undefined,
    isLoaded:false
}


const getTodos = createAsyncThunk(
    "todosSlice/getTodos",
    async (_,thunkAPI)=>{
        try {
            const response = await JSONServices.getTodos();
            return thunkAPI.fulfillWithValue(response.data)
        }catch (e){
            const e1 = e as AxiosError
            console.log(thunkAPI.rejectWithValue(e1))
        }
    }
);

export const todosSlice = createSlice({
    name: "todosSlice",
    initialState,
    reducers: {},
    extraReducers:(builder)=>
        builder.addCase(getTodos.fulfilled,(state, action) => {
            state.todos = action.payload
        })
            .addMatcher(isFulfilled(getTodos),(state, action) => {
                state.isLoaded = true;
            })
})



export const todosAction = {
    ...todosSlice.actions,
    getTodos

}

