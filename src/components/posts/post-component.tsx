import React from 'react';
import {IPost} from "../../types/IPost";
import {Link} from "react-router-dom";
import {ENDPOINTS} from "../../constants/urls";


interface PostType{
    post: IPost
}



const PostComponent  : React.FC<PostType>  = ({post}) => {

    return (
        <div style={{margin:"20px"}}>
            <div style={{fontStyle:"italic"}}>{post.title}</div>
            <div>{post.userId}</div>
            <div>{post.body}</div>
            <Link to={`/${ENDPOINTS.POST}/${post.id}/${ENDPOINTS.COMMENTS}`} state={post.id}>Go to comments</Link>
        </div>
    );
};

export default PostComponent;
