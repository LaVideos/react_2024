import React, {useEffect, useState} from 'react';
import {IPost} from "../../types/IPost";
import {services} from "../../services";
import PostComponent from "./post-component";
import {useAppLocation} from "../../hooks/useAppLocation";
import {ENDPOINTS} from "../../constants";
import {useParams} from "react-router-dom";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>()
    const appLocation = useAppLocation();
    const params = useParams();

    useEffect(() => {

        if(appLocation.pathname==="/posts") services.getAllPosts()
            .then(({data})=>setPosts([...data]));
        else if (appLocation.pathname.startsWith(ENDPOINTS.USER,1))
            services.getPostsByUserId(params.id as string)
                .then(({data})=>setPosts([...data]));

    }, [appLocation]);


    return (
        <div>
            {
                posts?.length && posts.map(post=><PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;
