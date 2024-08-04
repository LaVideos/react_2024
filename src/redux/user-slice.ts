import {IUser} from "../types/IUser";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {JSONServices} from "../services/JSON.services";
import {AxiosError} from "axios";


interface InitialSlice{
    users:IUser[]|undefined;
    isLoaded:boolean
}


const initialState:InitialSlice = {
    users:undefined,
    isLoaded:false
}


const getUsers = createAsyncThunk(
    'userSlice/getUsers',
    async (_,thunkAPI)=>{
        try {
            const response = await JSONServices.getUsers();
            return thunkAPI.fulfillWithValue(response.data);
        }catch (e){
            let e1 = e as AxiosError;
            console.log(thunkAPI.rejectWithValue(e1))
        }

    }
);

export const userSlice = createSlice({
    name:'userSlice',
    initialState:initialState,
    reducers:{

    },
    extraReducers:(builder)=>builder
        .addCase(getUsers.fulfilled,(state, action)=>{
            state.users = action.payload;
        })
        .addMatcher(isFulfilled(getUsers), (state, action) => {
            state.isLoaded = true;
        })
})

export const userActions = {
    ...userSlice,
    getUsers

}
