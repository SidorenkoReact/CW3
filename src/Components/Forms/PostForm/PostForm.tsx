import {Input} from "../../UI/Input/Input";
import {Textarea} from "../../UI/Textarea/Textarea";
import {Button} from "../../UI/Button/Button";
import React from "react";
import styles from "./PostForm.module.css"
import {useAppDispatch} from "../../../Hooks/redux";
import {IPost} from "../../../types/types";
import {addPost} from "../../../Store/Reducers/fetchPostsSlice";


interface PropsType {
    setIsVisibleForm: React.Dispatch<React.SetStateAction<boolean>>
}


const PostForm: React.FC<PropsType> = ({setIsVisibleForm}) => {
    const dispatch = useAppDispatch()

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)

        const newPost: IPost = {
            userId: Math.random(),
            id: Math.random(),
            title: form.get('title') as string || '',
            body:  form.get('message') as string || '',
        }

        dispatch(addPost(newPost))
        setIsVisibleForm(false)
    }

    return (
        <form onSubmit={handleSubmitForm} className={styles.root}>
            <label>Создать пост</label>
            <Input
                name="title"
                margin="0px 0px 5px 0px"
                type="text" placeholder="Тема..."
            />
            <Textarea
                name="message"
                placeholder="Сообщение..."
            />
            <div className={styles.buttons_container}>
                <Button type="submit">Добавить</Button>
                <Button
                    type="reset"
                    onClick={() => setIsVisibleForm(false)}
                    margin="0px 0px 0px 5px"
                >Отмена</Button>
            </div>
        </form>
    )
}


export {PostForm}