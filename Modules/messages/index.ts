import { createSlice } from '@reduxjs/toolkit'
import {fetchMessageThunk} from "./thunk"

const initialState = {
    message : {collections:{message:"JE SUIS LE MESSAGE DE BASE"}, error:null, status:"idle", loading:false}
}

const message = createSlice({
    name: "message",
    initialState,
    reducers: {},
    extraReducers: builder => {
        // FETCH USERS

        builder.addCase(fetchMessageThunk.fulfilled, (state,action) =>{
            state.message.status = "succeeded"
            state.message.collections = action.payload;
        })
        builder.addCase(fetchMessageThunk.rejected, (state,action) =>{
            state.message.status= "error"
        })
        builder.addCase(fetchMessageThunk.pending, (state,action) =>{
            state.message.status = "pending"
        })
    }
});

export default message.reducer
