import React, {FC} from 'react';
import {IPost} from "../../types/IPost";
import {Link} from "react-router-dom";

interface IProps{
    post:IPost
}


const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div style={{margin: "20px"}}>

            {JSON.stringify(post)}

            <button><Link to={post.id.toString()} state={post.id}>more details</Link></button>
        </div>
    );
};

export default PostComponent;
