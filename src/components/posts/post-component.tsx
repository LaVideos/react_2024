import React, {FC} from 'react';
import {IPost} from "../../types/IPost";


type PostType = {
    post:IPost
}


const PostComponent:FC<PostType> = ({post}) => {
    return (
        <div>
          <div>{post.title}</div>
          <div>{post.body}</div>
            <hr/>
        </div>
    );
};

export default PostComponent;
