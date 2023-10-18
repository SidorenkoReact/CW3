import {Button} from "../UI/Button/Button";
import React from "react";
import styles from "./PostsBlock.module.css"
import {IPost} from "../../types/types";

interface Props {
    post: IPost
}

const PostBlock: React.FC<Props> = ({post}) => {
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
                <Button margin={"5px 0px 0px 0px"} width={"74px"}>Удалить</Button>
            </div>
        </article>
    )
}


export {PostBlock}