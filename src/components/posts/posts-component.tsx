import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {postsActions} from "../../redux/post-slice";
import PostComponent from "./post-component";
import LoadingComponent from "../loading/loading-component";

const PostsComponent = () => {

    const {isLoaded,posts} = useAppSelector(state => state.postSlice);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(postsActions.getPosts());
    }, []);


    return (
        <div>
            {!isLoaded&&<LoadingComponent/>}
            {
                posts&&posts.map(post=><PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;
