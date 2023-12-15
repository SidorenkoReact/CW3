import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../Hooks/redux";
import {fetchPostById, fetchPostCommentsById} from "../../../Store/asyncActions/fetchPosts";
import {selectPost, selectComments, selectError} from "../../../Store/Reducers/fetchPostsSlice";



const Post = () => {
    const post = useAppSelector(selectPost)
    const comments = useAppSelector(selectComments)
    const error = useAppSelector(selectError)

    const dispatch = useAppDispatch()
    const params = useParams()




    useEffect(() => {
        if (params.id) {
            dispatch(fetchPostById(params.id))
            dispatch(fetchPostCommentsById(params.id))
        }

    }, [])

    return (
        <article>
            <h4>Страница поста {params?.id}</h4>
            <h5>{post?.title}</h5>
            <p>{post?.body}</p>

            <h6>Коментарии:</h6>
            {error && error}
            {comments?.map(comment => <section>
                <h6>
                    {comment.email}
                </h6>
                <p>
                    {comment.body}
                </p>
            </section>)}

        </article>
    )
}


export {Post}
