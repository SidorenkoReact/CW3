import {Button} from "../UI/Button/Button";
import React, {useState} from "react";
import styles from "./Main.module.css"
import {Posts} from "../Posts/Posts";
import {PostsFilter} from "../PostsFilter/PostsFilter";
import {useAppSelector} from "../../Hooks/redux";
import {selectPosts} from "../../Store/Reducers/fetchPostsSlice";
import {usePosts} from "../../Hooks/usePosts";
import {Modal} from "../Modals/Modal/Modal";
import {PostForm} from "../Forms/PostForm/PostForm";
import {Checkbox} from "../UI/Checkbox/Checkbox";
import {ModalTypeRadioButtons} from "../ModalTypeRadioButtons/ModalTypeRadioButtons";
import {Portal} from "../Modals/Portal/Portal";
import {IPost} from "../../types/types";
import {ModalSwitch} from "../Modals/ModalSwitch/ModalSwitch";


const Main = () => {
    const [modal, setModal] = useState(false)
    const [modalType, setModalType] = useState('Css')
    const [searchValue, setSearchValue] = useState<string>("")
    const [sortValue, setSortValue] = useState<string>("")
    const {posts, isLoading, error} = useAppSelector(selectPosts)
    const filteredAndSortedPosts = usePosts(posts, searchValue, sortValue)



    return (
        <main className={styles.root}>
            <Button onClick={() => setModal(true)} margin="5px 0px 5px 0px">Добавить пост</Button>

            <Checkbox label="Добавить на сервер"/>
            <ModalTypeRadioButtons setModalType={setModalType} options={['Portal', 'Css']}/>

            <ModalSwitch modalType={modalType} isVisible={modal} setIsVisible={setModal}>
                <PostForm setIsVisibleForm={setModal}/>
            </ModalSwitch>

            <hr/>

            <PostsFilter
                setSortValue={setSortValue}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <Posts
                posts={filteredAndSortedPosts}
                isLoadingPosts={isLoading}
                errorPosts={error}
            />
        </main>
    )
}


export {Main}