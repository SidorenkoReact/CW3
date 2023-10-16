import {Button} from "../UI/Button/Button";
import React from "react";
import styles from "./PostsBlock.module.css"

const PostBlock = () => {
    return (
        <article className={styles.root}>
            <div>
                <h6>Заголовок</h6>
                <p>
                    Текст поста
                </p>
            </div>

            <div className={styles.buttons}>
                <Button>Открыть</Button>
                <Button margin={"5px 0px 0px 0px"} width={"74px"}>Удалить</Button>
            </div>
        </article>
    )
}


export {PostBlock}