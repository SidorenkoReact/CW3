import {Input} from "../../UI/Input/Input";
import {Textarea} from "../../UI/Textarea/Textarea";
import {Button} from "../../UI/Button/Button";
import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../../../Hooks/redux";
import {updatePost} from "../../../Store/Reducers/fetchPostsSlice";
import {IPost} from "../../../types/types";
import styles from "./EditPostForm.module.css"
import {PostService} from "../../../API/PostService";
import {updatePostById} from "../../../Store/asyncActions/fetchPosts";

interface PropsType {
    isServerMode: boolean;
    post: IPost | undefined;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditPostForm: React.FC<PropsType> = ({isServerMode, post, setIsActive}) => {
    const [inputValue, setInputValue] = useState('')
    const [textareaValue, setTextareaValue] = useState('')
    const dispatch = useAppDispatch()

    const onClickButtonEdit = (event: React.SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if (post) {
            const editedPost: IPost = {
                ...post,
                title: inputValue,
                body: textareaValue,
            }

            if (isServerMode)
                dispatch(updatePostById({id: post.id, post: editedPost}))
            else
                dispatch(updatePost(editedPost))

        }
        setIsActive(false)
    }

    const onChangeInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    const onChangeTextarea = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.currentTarget.value)
    }

    useEffect(() => {
        if (post) {
            setInputValue(post.title)
            setTextareaValue(post.body)
        }
    }, [post])

    return (
        <form className={styles.root}>
            <label>Редактировать пост</label>
            <Input
                onChange={onChangeInput}
                value={inputValue}
                type="text"
            />
            <Textarea
                onChange={onChangeTextarea}
                value={textareaValue}
            />
            <div className={styles.buttons_container}>
                <Button onClick={onClickButtonEdit}>Изменить</Button>
                <Button margin={"0px 0px 0px 5px"} onClick={() => setIsActive(false)}>Отмена</Button>
            </div>
        </form>
    )
}

export {EditPostForm}
