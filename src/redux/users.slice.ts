import {IUser} from "../types/IUser";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {JSONServices} from "../services/JSON.services";
import {AxiosError} from "axios";

type initialStateType = {
    users: IUser[],
    isLoaded: boolean
}

const initialState: initialStateType = {
    users: [],
    isLoaded: false,
}


const loadUsers = createAsyncThunk(
    "usersSlice/loadUsers",
    async (_, thunkAPI) => {
        try {
            const response = await JSONServices.getUsers();
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            const e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1)
        }
    }
)


export const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
            .addMatcher(isFulfilled(loadUsers),(state, action) => {
                state.isLoaded = true;
            })
    }
});





export const usersAction = {
    ...usersSlice.actions,
    loadUsers
}



