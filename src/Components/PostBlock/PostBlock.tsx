import {Button} from "../UI/Button/Button";
import React, {useEffect} from "react";
import styles from "./PostsBlock.module.css"
import {IPost} from "../../types/types";
import {useAppDispatch} from "../../Hooks/redux";
import {removePost} from "../../Store/Reducers/fetchPostsSlice";
import {Modal} from "../Modals/Modal/Modal";
import {EditPostForm} from "../Forms/EditPostForm/EditPostForm";
import {Portal} from "../Modals/Portal/Portal";

interface Props {
    post: IPost
    setCurrentPost: React.Dispatch<React.SetStateAction<IPost | undefined>>
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const PostBlock: React.FC<Props> = ({post, setCurrentPost, setModal}) => {
    const dispatch = useAppDispatch()

    const onClickButtonPostRemove = (id: number) => {
        dispatch(removePost(id))
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
                <Button>Открыть</Button>
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