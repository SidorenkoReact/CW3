import {Button} from "../Button/Button";
import React from "react";
import styles from "./Pagination.module.css"

interface PaginationPropsType {
    pages: number[];
    currentPage: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<PaginationPropsType> = ({pages, currentPage, setPage}) => {
    return (
        <nav className={styles.root}>
            {pages.map(page => <Button onClick={() => setPage(page)} isActive={currentPage === page} width="2px" margin="2px" key={page}>{page}</Button>)}
        </nav>
    )
}


export {Pagination}