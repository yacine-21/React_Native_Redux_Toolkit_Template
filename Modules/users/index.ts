import { createSlice } from '@reduxjs/toolkit'
import { userData } from './model';
import {fetchUsersThunk} from "./thunk"

const initialState ={ 
    users : {collections :[], error:null, status:"idle", loading:false}
}

const user = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        // FETCH USERS

        builder.addCase(fetchUsersThunk.fulfilled, (state,action) =>{
            state.users.status = "succeeded"
            state.users.collections = action.payload;
            state.users.loading = true;
        })
        builder.addCase(fetchUsersThunk.rejected, (state,action) =>{
            state.users.loading = false
        })
        builder.addCase(fetchUsersThunk.pending, (state,action) =>{
            state.users.status = "pending"
        })
    }
});

export default user.reducer
