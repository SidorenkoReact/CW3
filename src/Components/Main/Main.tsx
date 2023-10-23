import {Button} from "../UI/Button/Button";
import React, {useState, useMemo, useEffect} from "react";
import styles from "./Main.module.css"
import {Posts} from "../Posts/Posts";
import {PostsFilter} from "../PostsFilter/PostsFilter";
import {IPost} from "../../types/types";
import {useAppSelector} from "../../Hooks/redux";
import {selectPosts} from "../../Store/Reducers/fetchPostsSlice";
import {usePosts} from "../../Hooks/usePosts";


const Main = () => {
    const [searchValue, setSearchValue] = useState<string>("")
    const [sortValue, setSortValue] = useState<string>("")
    const {posts, isLoading, error} = useAppSelector(selectPosts)
    const filteredAndSortedPosts = usePosts(posts, searchValue, sortValue)

    return (
        <main className={styles.root}>
            <Button margin="5px 0px 5px 0px">Добавить пост</Button>
            <hr/>

            <PostsFilter
                setSortValue={setSortValue}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <Posts
                posts={filteredAndSortedPosts}
                isLoadingPosts={isLoading}
                errorPosts={error}
            />
        </main>
    )
}


export {Main}