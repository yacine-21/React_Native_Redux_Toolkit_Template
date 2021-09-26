import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchMessage} from "./api"


export const fetchMessageThunk = createAsyncThunk(
    "users/fetchUsers",
     async () =>{
    const response = await fetchMessage();
    return ( response);
})