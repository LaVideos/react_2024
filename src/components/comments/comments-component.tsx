import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {commentsAction} from "../../redux/comment-slice";
import CommentComponent from "./comment-component";
import LoadingComponent from "../loading/loading-component";

const CommentsComponent = () => {

    const {comments,isLoaded} = useAppSelector(state => state.commentsSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentsAction.getComments());
    }, []);



    return (
        <div>
            {!isLoaded&&<LoadingComponent/>}
            {comments&&comments.map(comment=><CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CommentsComponent;
