import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../types/types";
import {RootState} from "../Store";
import {fetchAllPosts} from "../asyncActions/fetchPosts";
import React from "react";


interface InitialStateTypes {
    posts: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: InitialStateTypes = {
    posts: [],
    isLoading: false,
    error: ''
}

const fetchPostsSlice = createSlice({
    name: 'fetchPosts',
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<IPost>) {
            state.posts = [...state.posts, action.payload]
        },

        removePost(state, action: PayloadAction<number>) {
            state.posts = [...state.posts].filter(post => post.id !== action.payload)
        },

        updatePost(state, action: PayloadAction<IPost>) {
            const index = [...state.posts].findIndex(post => post.id === action.payload.id)
            state.posts[index] = action.payload

        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchAllPosts.pending.type, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllPosts.fulfilled.type, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload
                state.isLoading = false
            })
            .addCase(fetchAllPosts.rejected.type, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })

})

export const {addPost, removePost, updatePost} = fetchPostsSlice.actions
export const selectPosts  = (state: RootState) => state.fetchPosts
export default fetchPostsSlice.reducer