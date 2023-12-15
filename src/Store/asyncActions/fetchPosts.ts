import {createAsyncThunk} from "@reduxjs/toolkit";
import {PostService} from "../../API/PostService";
import {setTotalCount} from "../Reducers/fetchPostsSlice";
import {IPost} from "../../types/types";


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

export const fetchPostById = createAsyncThunk('post/fetchById', async (id: string, thunkAPI) => {

    try {
        const response = await PostService.getById(id)
        return response.data
    }
    catch (e) {
        if (e instanceof Error) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
})

export const fetchPostCommentsById = createAsyncThunk('post/fetchPostComments', async (id: string, thunkAPI) => {

    try {
        const response = await PostService.getPostCommentsById(id)
        return response.data
    }
    catch (e) {
        if (e instanceof Error) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }

})

export const createPost = createAsyncThunk('post/createPost', async (post: IPost, thunkAPI) => {
    try {
        const response = await PostService.createPost(post)
        return response.data
    }
    catch (e) {
        if (e instanceof Error) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
})
