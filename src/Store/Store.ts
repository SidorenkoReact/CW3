import {configureStore} from "@reduxjs/toolkit";
import fetchPostsSlice from "./Reducers/fetchPostsSlice";


export const store = configureStore({
    reducer: {
        fetchPosts: fetchPostsSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch