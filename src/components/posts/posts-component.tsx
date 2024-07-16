import React, {useEffect, useState} from 'react';
import {services} from "../../services/json_services";
import {IPost} from "../../types/IPost";
import PostComponent from "./post-component";
import {useAppLocation} from "../../hook/useAppLocation";
import {ENDPOINTS} from "../../constants/urls";

const PostsComponent = () => {


    const appLocation = useAppLocation();

    const [posts, setPosts] = useState<IPost[]>()


    useEffect(()=>{
        if (appLocation.pathname.startsWith(ENDPOINTS.POSTS,1)){
            services.getAllPosts().then(({data})=>setPosts([...data]));
        }else {
            services.getPostsByUserId(appLocation?.state as string).then(({data})=>setPosts([...data]))

        }
    },[appLocation.pathname])


    return (

        <div>
            {
                posts?.length && posts.map(post=> <PostComponent post={post} key={post.id}/>)
            }
        </div>


    );
};

export default PostsComponent;
