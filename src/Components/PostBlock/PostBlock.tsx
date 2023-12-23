import {Button} from "../UI/Button/Button";
import React, {useEffect} from "react";
import styles from "./PostsBlock.module.css"
import {IPost} from "../../types/types";
import {useAppDispatch} from "../../Hooks/redux";
import {removePost} from "../../Store/Reducers/fetchPostsSlice";
import {Modal} from "../Modals/Modal/Modal";
import {EditPostForm} from "../Forms/EditPostForm/EditPostForm";
import {Portal} from "../Modals/Portal/Portal";
import {useNavigate} from "react-router-dom";
import {PostService} from "../../API/PostService";
import {deletePostById} from "../../Store/asyncActions/fetchPosts";

interface Props {
    post: IPost
    setCurrentPost: React.Dispatch<React.SetStateAction<IPost | undefined>>
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const PostBlock: React.FC<Props> = ({post, setCurrentPost, setModal}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onClickButtonPostOpen = (id: number) => {
        navigate('/post/' + id)
    }

    const onClickButtonPostRemove = (id: number) => {
        // dispatch(removePost(id))
        dispatch(deletePostById(id))
    }

    const onClickButtonPostEdit = (post: IPost) => {
        setCurrentPost(post)
        setModal(true)
    }


    return (
        <article className={styles.root}>
            <div>
                <h6>{post.title}</h6>
                <p>
                    {post.body}
                </p>
            </div>

            <div className={styles.buttons}>
                <Button onClick={() => onClickButtonPostOpen(post.id)}>Открыть</Button>
                <Button
                    onClick={() => onClickButtonPostRemove(post.id)}
                    margin={"5px 0px 0px 0px"}
                    width={"74px"}
                >Удалить</Button>
                <Button
                    onClick={() => onClickButtonPostEdit(post)}
                    margin={"5px 0px 0px 0px"}
                >Редакт...</Button>
            </div>
        </article>
    )
}


export {PostBlock}
