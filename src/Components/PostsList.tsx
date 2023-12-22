import {IPost} from "../types/types";
import {PostBlock} from "./PostBlock/PostBlock";
import React from "react";


interface IPostsListProps {
    posts: IPost[];
    isLoadingPosts: boolean;
    errorPosts: string;
    setCurrentPost: React.Dispatch<React.SetStateAction<IPost | undefined>>
    setModal: React.Dispatch<React.SetStateAction<boolean>>


}

const PostsList: React.FC<IPostsListProps> = ({posts, isLoadingPosts, errorPosts, setCurrentPost, setModal}) => {
    return (
        <div>
            {errorPosts && errorPosts}
            {posts.map((post) => <PostBlock post={post} setModal={setModal} setCurrentPost={setCurrentPost} key={Math.random()}/>)}
            {isLoadingPosts && <h4>Загрузка...</h4>}
        </div>
    )
}


export {PostsList}
