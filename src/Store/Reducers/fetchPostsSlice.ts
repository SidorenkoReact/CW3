import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost, IPostComments, PaginationType} from "../../types/types";
import {RootState} from "../Store";
import {createPost, fetchAllPosts, fetchPostById, fetchPostCommentsById} from "../asyncActions/fetchPosts";

interface InitialStateTypes {
    posts: IPost[];
    currentPost: IPost | null;
    currentPostComments: IPostComments[] | null
    totalCount: number;
    paginationType: PaginationType;
    isLoading: boolean;
    error: string;
}

const initialState: InitialStateTypes = {
    posts: [],
    currentPost: null,
    currentPostComments: null,
    totalCount: 0,
    paginationType: PaginationType.PAGE,
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
        },

        setTotalCount(state, action: PayloadAction<number>) {
            state.totalCount = action.payload
        },

        setPaginationType(state, action: PayloadAction<PaginationType>) {
            state.paginationType = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchAllPosts.pending.type, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllPosts.fulfilled.type, (state, action: PayloadAction<IPost[]>) => {
                if (state.paginationType === PaginationType.PAGE)
                    state.posts = action.payload

                if (state.paginationType === PaginationType.INFINITY)
                    state.posts = [...state.posts, ...action.payload]

                state.isLoading = false
            })
            .addCase(fetchAllPosts.rejected.type, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })

            .addCase(fetchPostById.pending.type, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPostById.fulfilled.type, (state, action: PayloadAction<IPost>) => {
                state.currentPost = action.payload
                state.isLoading = false
            })
            .addCase(fetchPostById.rejected.type, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })

            .addCase(fetchPostCommentsById.pending.type, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPostCommentsById.fulfilled.type, (state, action: PayloadAction<IPostComments[]>) => {
                state.currentPostComments = action.payload
                state.isLoading = false
            })
            .addCase(fetchPostCommentsById.rejected.type, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })

            .addCase(createPost.pending.type, (state) => {
                state.isLoading = true
            })
            .addCase(createPost.fulfilled.type, (state, action: PayloadAction<IPost>) => {
                state.posts = [...state.posts, action.payload]
                state.isLoading = false
            })
            .addCase(createPost.rejected.type, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })
})

export const {addPost, removePost, updatePost, setTotalCount, setPaginationType} = fetchPostsSlice.actions
export const selectPosts  = (state: RootState) => state.fetchPosts
export const selectPost = (state: RootState) =>  state.fetchPosts.currentPost
export const selectComments = (state: RootState) => state.fetchPosts.currentPostComments
export const selectError = (state: RootState) => state.fetchPosts.error
export default fetchPostsSlice.reducer
