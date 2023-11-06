import {createAsyncThunk} from "@reduxjs/toolkit";
import {PostService} from "../../API/PostService";
import {setTotalCount} from "../Reducers/fetchPostsSlice";


type ArgsTypes = {
    pageNumber?: number;
    limit?: number;
}

export const fetchAllPosts = createAsyncThunk('posts/fetchAll', async (data: ArgsTypes, thunkAPI) => {
    const {pageNumber, limit} = data

    try {
        const response = await PostService.getAll(pageNumber, limit)
        thunkAPI.dispatch(setTotalCount(response.headers['x-total-count']))
        return response.data
    }
    catch (e) {
        if (e instanceof Error)
            return thunkAPI.rejectWithValue(e.message)
    }
})