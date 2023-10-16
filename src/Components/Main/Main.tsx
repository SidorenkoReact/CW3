import {Button} from "../UI/Button/Button";
import React from "react";
import styles from "./Main.module.css"
import {Posts} from "../Posts/Posts";
import {PostsFilter} from "../PostsFilter/PostsFilter";


const Main = () => {
    return (
        <main className={styles.root}>
            <Button margin="5px 0px 5px 0px">Добавить пост</Button>
            <hr/>

            <PostsFilter/>
            <Posts/>
        </main>
    )
}


export {Main}