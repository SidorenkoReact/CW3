import React, {useEffect, useState} from "react";
import styles from "./Posts.module.css"
import {PostBlock} from "../PostBlock/PostBlock";
import {useAppDispatch, useAppSelector} from "../../Hooks/redux";
import {selectPosts} from "../../Store/Reducers/fetchPostsSlice";
import {fetchAllPosts} from "../../Store/asyncActions/fetchPosts";
import {IPost} from "../../types/types";
import {Modal} from "../Modals/Modal/Modal";
import {EditPostForm} from "../Forms/EditPostForm/EditPostForm";
import {Button} from "../UI/Button/Button";
import {Pagination} from "../UI/Pagination/Pagination";
import {PostsList} from "../PostsList";


interface Props {
    posts: IPost[];
    totalCount: number;
    isLoadingPosts: boolean;
    errorPosts: string;
    pageNumber: number;
    limit: number;
}

const Posts: React.FC<Props> = ({posts, isLoadingPosts, errorPosts, totalCount, pageNumber, limit}) => {

    const [currentPost, setCurrentPost] = useState<IPost>()
    const [modal, setModal] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllPosts({pageNumber, limit}))
        // throw new Error('dsadasd')
    }, [pageNumber, limit])


    return (
        <section className={styles.root}>
            <Modal isVisible={modal} setIsVisible={setModal}>
                <EditPostForm
                    setIsActive={setModal}
                    post={currentPost}
                />
            </Modal>
            <h4>Посты</h4>
            <PostsList
                posts={posts}
                isLoadingPosts={isLoadingPosts}
                errorPosts={errorPosts}
                setCurrentPost={setCurrentPost}
                setModal={setModal}
            />
        </section>
    )
}

export {Posts}
