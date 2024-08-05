import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import PostComponent from "./post-component";
import {postsAction} from "../../redux/posts.slice";
import LoadingComponent from "../loading/loading-component";

const PostsComponent = () => {

    const dispatch = useAppDispatch();
    const {posts,isLoaded} = useAppSelector(state => state.postsSlice);
    useEffect(() => {
        dispatch(postsAction.loadPosts())
    }, []);


    return (
        <div>
            {!isLoaded&&<LoadingComponent/>}
            {posts&&posts.map(post=><PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsComponent;
