import React, {useEffect, useState} from 'react';
import {services} from "../../services/json_services";
import {IPost} from "../../types/IPost";
import PostComponent from "./post-component";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]|undefined>(undefined)


    useEffect(()=>{
        services.getAllPosts().then(({data})=>setPosts([...data]));
    },[])


    return (

        <div>
            {
                posts?.length && posts.map(post=> <PostComponent post={post} key={post.id}/>)
            }
        </div>


    );
};

export default PostsComponent;
