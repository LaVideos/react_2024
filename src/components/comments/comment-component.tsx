import React, {FC} from 'react';
import {IComment} from "../../types/IComment";

interface CommentType{
    comment:IComment
}


const CommentComponent:FC<CommentType> = ({comment}) => {
    return (
        <div style={{margin:"20px"}}>
            <div style={{fontStyle:"italic"}}>{comment.name}</div>
            <div style={{fontStyle:"italic"}}>{comment.postId}</div>
            <div>{comment.email}</div>
            <div>{comment.body}</div>
        </div>
    );
};

export default CommentComponent;
