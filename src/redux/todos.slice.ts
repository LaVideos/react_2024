import {ITodo} from "../types/ITodo";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {JSONServices} from "../services/JSON.services";


type initialStateType = {
    todos:ITodo[],
    isLoaded:boolean
}


const initialState:initialStateType = {
    isLoaded: false, todos: []
}


const loadTodos = createAsyncThunk(
    "todosSlice/loadTodos",
    async (arg, thunkAPI) =>{
        try {

            const response = await JSONServices.getTodos();
            return thunkAPI.fulfillWithValue(response.data);

        }catch (e){
            const e1  = e as AxiosError;
            return thunkAPI.rejectWithValue(e1)
        }
    }
)


export const todosSlice = createSlice({
    name:"todosSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loadTodos.fulfilled,(state, action) => {
            state.todos = action.payload
        })
            .addMatcher(isFulfilled(loadTodos),(state, action) => {
                state.isLoaded = true;
            })
    }
});






export const todosAction = {
    ...todosSlice.actions,
    loadTodos
};
