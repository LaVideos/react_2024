import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {commentsAction} from "../../redux/comments.slice";
import CommentComponent from "./comment-component";
import LoadingComponent from "../loading/loading-component";

const CommentsComponent = () => {

    const {comments,isLoaded} = useAppSelector(state => state.commentsSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(commentsAction.loadComments());
    }, []);

    return (
        <div>
            {!isLoaded&&<LoadingComponent/>}
            {comments&&comments.map(comment=><CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CommentsComponent;
