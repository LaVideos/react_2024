import React, {FC} from 'react';
import {IComment} from "../../types/IComment";


type CommentType = {
    comment: IComment
}


const CommentComponent:FC<CommentType> = ({comment}) => {
    return (
        <div>
            <div>{comment.name} {comment.email}</div>
            <div>{comment.body}</div>
            <hr/>
        </div>
    );
};

export default CommentComponent;
