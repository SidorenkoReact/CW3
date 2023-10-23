import {createAsyncThunk} from "@reduxjs/toolkit";
import {PostService} from "../../API/PostService";


export const fetchAllPosts = createAsyncThunk('posts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await PostService.getAll()
        return response.data
    }
    catch (e) {
        if (e instanceof Error)
            return thunkAPI.rejectWithValue(e.message)
    }
})