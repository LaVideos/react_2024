import React, {FC} from 'react';
import {IPost} from "../../types/IPost";
import {Link} from "react-router-dom";
import {ENDPOINTS} from "../../constants";

interface PostTypes{
    post:IPost
}


const PostComponent:FC<PostTypes> = ({post}) => {
    return (
        <div style={{margin:"20px"}}>
            <div>{post.userId}</div>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div><Link to={`/${ENDPOINTS.POST}/${post.id}/${ENDPOINTS.COMMENTS}`} state={post.id}>Go to comments</Link></div>
        </div>
    );
};

export default PostComponent;
