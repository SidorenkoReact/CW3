import React, {useEffect, useState} from "react";
import styles from "./Posts.module.css"
import {PostBlock} from "../PostBlock/PostBlock";
import {useAppDispatch, useAppSelector} from "../../Hooks/redux";
import {selectPosts} from "../../Store/Reducers/fetchPostsSlice";
import {fetchAllPosts} from "../../Store/asyncActions/fetchPosts";
import {IPost} from "../../types/types";
import {Modal} from "../Modals/Modal/Modal";
import {EditPostForm} from "../Forms/EditPostForm/EditPostForm";


interface Props {
    posts: IPost[];
    isLoadingPosts: boolean;
    errorPosts: string;
}

const Posts: React.FC<Props> = ({posts, isLoadingPosts, errorPosts}) => {
    const [currentPost, setCurrentPost] = useState<IPost>()
    const [modal, setModal] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllPosts())
    }, [])


    return (
        <section className={styles.root}>
            <Modal isVisible={modal} setIsVisible={setModal}>
                <EditPostForm
                    setIsActive={setModal}
                    post={currentPost}
                />
            </Modal>
            <h4>Посты</h4>
            {errorPosts && errorPosts}
            {isLoadingPosts
                ? <h4>Загрузка...</h4>
                : posts.map((post) => <PostBlock post={post} setModal={setModal} setCurrentPost={setCurrentPost} key={post.id}/>)}

        </section>
    )
}

export {Posts}