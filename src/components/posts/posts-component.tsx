import React, {useEffect, useState} from 'react';
import {IPost} from "../../types/IPost";
import {services} from "../../services/services";
import PostComponent from "./post-component";

const PostsComponent = () => {


    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(()=>{

        services.getAllPosts().then(({data})=>setPosts([...data.posts]))


    },[])



    return (
        <div>
            {
                posts.length&&posts.map(post=> <PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostsComponent;
