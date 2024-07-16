import React from 'react';
import {IPost} from "../../types/IPost";


interface PostType{
    post: IPost
}



const PostComponent  : React.FC<PostType>  = ({post}) => {

    return (
        <div style={{margin:"20px"}}>
            <div style={{fontStyle:"italic"}}>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default PostComponent;
