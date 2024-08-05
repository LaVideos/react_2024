import React, {FC} from 'react';
import {IComment} from "../../types/IComment";

type CommentType = {
    comment:IComment
}


const CommentComponent:FC<CommentType> = ({comment}) => {
    return (
        <div>
<div>{comment.email}</div>
<div>{comment.body}</div>
            <div>                {`                    ${comment.email}`}</div>
            <hr/>
        </div>
    );
};

export default CommentComponent;
