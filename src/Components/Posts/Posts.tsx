import React, {useEffect, useState} from "react";
import styles from "./Posts.module.css"
import {useAppDispatch} from "../../Hooks/redux";
import {fetchAllPosts} from "../../Store/asyncActions/fetchPosts";
import {IPost} from "../../types/types";
import {Modal} from "../Modals/Modal/Modal";
import {EditPostForm} from "../Forms/EditPostForm/EditPostForm";
import {PostsList} from "../PostsList";


interface Props {
    isServerMode: boolean;
    posts: IPost[];
    isLoadingPosts: boolean;
    errorPosts: string;
    pageNumber: number;
    limit: number;
}

const Posts: React.FC<Props> = ({isServerMode, posts, isLoadingPosts, errorPosts, pageNumber, limit}) => {

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
                    isServerMode={isServerMode}
                    setIsActive={setModal}
                    post={currentPost}
                />
            </Modal>
            <h4>Посты</h4>
            <PostsList
                isServerMode={isServerMode}
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
