import {Input} from "../UI/Input/Input";
import {Select} from "../UI/Select/Select";
import React from "react";
import styles from "./PostsFilter.module.css"


const PostsFilter = () => {
    return (
        <div className={styles.root}>
            <Input width="100%" margin="10px 0px 0px 0px" type="search" placeholder="Найти..."/>

            <Select margin={"10px 0px 0px 0px"} options={[
                {name: 'По Названию', value: 'title'},
                {name: 'По Описанию', value: 'description'}
            ]} defaultValue="Сортировать"/>

            <Select margin="2px 0px 0px 0px" options={[
                {name: "5", value: "5"},
                {name: "10", value: "10"},
                {name: "25", value: "25"},
                {name: "Показать все", value: "-1"},
            ]} defaultValue={"Количество постов"}/>
        </div>
    )
}


export {PostsFilter}