import React, {FC} from 'react';
import {IComment} from "../../types/IComment";




interface IProps{
    comment:IComment
}



const CommentComponent:FC<IProps> = ({comment}) => {



    return (
        <div style={{margin:"20px"}}>
            {
                JSON.stringify(comment)
            }
            </div>
    );
};

export default CommentComponent;
