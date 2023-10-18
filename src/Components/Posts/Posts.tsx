import React, {useEffect, useState} from "react";
import styles from "./Posts.module.css"
import {PostBlock} from "../PostBlock/PostBlock";
import {IPost} from "../../types/types";
import {PostService} from "../../API/PostService";
import {useFetching} from "../../Hooks/useFetching";


const Posts = () => {
    const  [posts, setPosts] = useState<IPost[]>([])

    const [fetchPosts, isLoadingPosts, errorPosts] = useFetching(async () => {
        const response = await PostService.getAll()
        setPosts(response.data)
    })


    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <section className={styles.root}>
            <h4>Посты</h4>
            {errorPosts && errorPosts}
            {isLoadingPosts
                ? <h4>Загрузка...</h4>
                : posts.map((post) => <PostBlock post={post} key={post.id}/>)}

        </section>
    )
}

export {Posts}