import React from "react";
import styles from "./Posts.module.css"
import {PostBlock} from "../PostBlock/PostBlock";

const Posts = () => {
    return (
        <section className={styles.root}>
            <h4>Посты</h4>
            <PostBlock/>
        </section>
    )
}

export {Posts}