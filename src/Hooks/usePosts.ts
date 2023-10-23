import {IPost} from "../types/types";
import {useMemo} from "react";


export const useSortPosts = (posts: IPost[], sortType: string) => {

    return useMemo(() => {
        if (sortType) {
            return [...posts].sort((a, b) => a[sortType].localeCompare(b[sortType]))
        }
        return posts

    }, [posts, sortType])

}


export const usePosts = (posts: IPost[], searchQuery: string, sortType: string) => {
    const sortedPosts = useSortPosts(posts, sortType)

    return useMemo(() => {
        if (searchQuery) {
            return [...sortedPosts].filter(post => post.body.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return sortedPosts

    }, [searchQuery, sortedPosts])
}