import {Button} from "../UI/Button/Button";
import React from "react";
import styles from "./Header.module.css"


const Header = () => {
    return (
        <header className={styles.root}>
            <Button margin={"0px 0px 0px 10px"}>Войти</Button>
            <nav className={styles.links}>
                <a href="">О сайте</a>
                <a href="">Посты</a>
            </nav>
        </header>
    )
}


export {Header}