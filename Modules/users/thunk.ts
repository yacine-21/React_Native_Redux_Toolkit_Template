import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchUsers} from "./api"


export const fetchUsersThunk = createAsyncThunk(
    "users/fetchUsers",
     async () =>{
    const response = await fetchUsers();
    return (await response.json()).data;
})