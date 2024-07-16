import React, {useEffect, useState} from 'react';
import {services} from "../../services/json_services";
import {IComment} from "../../types/IComment";
import CommentComponent from "./comment-component";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]|undefined>()


    useEffect(()=>{

        services.getAllComments().then(({data})=>setComments([...data]));

    },[])


    return (
        <div>

            {
                comments?.length && comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>)
            }

            </div>
    );
};

export default CommentsComponent;
