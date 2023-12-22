import {Button} from "../../UI/Button/Button";
import React, {useRef, useState} from "react";
import styles from "./Main.module.css"
import {Posts} from "../../Posts/Posts";
import {PostsFilter} from "../../PostsFilter/PostsFilter";
import {useAppSelector} from "../../../Hooks/redux";
import {selectPosts} from "../../../Store/Reducers/fetchPostsSlice";
import {usePosts} from "../../../Hooks/usePosts";
import {PostForm} from "../../Forms/PostForm/PostForm";
import {Checkbox} from "../../UI/Checkbox/Checkbox";
import {ModalTypeRadioButtons} from "../../Settings/ModalTypeRadioButtons/ModalTypeRadioButtons";
import {Portal} from "../../Modals/Portal/Portal";
import {ModalSwitch} from "../../Modals/ModalSwitch/ModalSwitch";
import {Pagination} from "../../UI/Pagination/Pagination";
import {getPageArray} from "../../../utils/pages";
import {PaginationOrScrollSelector} from "../../Settings/PaginationOrScrollSelector/PaginationOrScrollSelector";
import {useObserver} from "../../../Hooks/useObserver";
import {PaginationType} from "../../../types/types";


const Main = () => {
    const [isServerMode, setIsServerMode] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(10)
    const [modal, setModal] = useState<boolean>(false)
    const [modalType, setModalType] = useState<string>('Css')
    const [searchValue, setSearchValue] = useState<string>("")
    const [sortValue, setSortValue] = useState<string>("")

    const observedElement = useRef(null)

    const {posts, isLoading, error, totalCount, paginationType} = useAppSelector(selectPosts)
    const filteredAndSortedPosts = usePosts(posts, searchValue, sortValue)

    const pagesArray = getPageArray(totalCount, limit)

    useObserver(observedElement.current, page < pagesArray.length, isLoading, paginationType === PaginationType.PAGE, () => {
        setPage(prev => prev + 1)
    })

    return (
        <main className={styles.root}>
            <Button onClick={() => setModal(true)} margin="5px 0px 5px 0px">Добавить пост</Button>

            <Checkbox onChange={() => setIsServerMode(prev => !prev)} label="Добавить на сервер"/>
            <ModalTypeRadioButtons setModalType={setModalType} options={['Portal', 'Css']}/>

            <PaginationOrScrollSelector options={[
                    {name: 'Пагинация', value: PaginationType.PAGE},
                    {name: 'Бесконечная лента', value: PaginationType.INFINITY}
                ]}
            />

            <ModalSwitch modalType={modalType} isVisible={modal} setIsVisible={setModal}>
                <PostForm
                    setIsVisibleForm={setModal}
                    isServerMode={isServerMode}
                />
            </ModalSwitch>

            <hr/>

            <PostsFilter
                setSortValue={setSortValue}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setLimitPosts={setLimit}
            />

            <Posts
                posts={filteredAndSortedPosts}
                isLoadingPosts={isLoading}
                errorPosts={error}
                totalCount={totalCount}
                pageNumber={page}
                limit={limit}
            />

            {paginationType === PaginationType.PAGE
                &&
                <Pagination
                    currentPage={page}
                    setPage={setPage}
                    pages={pagesArray}
                />}

            <div ref={observedElement}></div>
        </main>
    )
}


export {Main}
