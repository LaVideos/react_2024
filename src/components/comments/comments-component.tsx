import React, {useEffect, useState} from 'react';
import {IComment} from "../../types/IComment";
import {services} from "../../services/services";
import CommentComponent from "./comment-component";

const CommentsComponent = () => {


    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {

        services.getAllComments().then(({data}) => setComments([...data.comments]));
    }, [])


    return (
        <div>
            {comments.length && comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;
