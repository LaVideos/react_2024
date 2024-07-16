import React, {useEffect, useState} from 'react';
import {services} from "../../services/json_services";
import {IComment} from "../../types/IComment";
import CommentComponent from "./comment-component";
import {useAppLocation} from "../../hook/useAppLocation";
import {ENDPOINTS} from "../../constants/urls";

const CommentsComponent = () => {

    const appLocation = useAppLocation();

    const [comments, setComments] = useState<IComment[]|undefined>()


    useEffect(()=>{

       if (appLocation.pathname.startsWith(ENDPOINTS.COMMENTS,1)){
           services.getAllComments().then(({data})=>setComments([...data]));
       }else {
           services.getCommentsByPostId(appLocation.state as string).then(({data})=>setComments([...data]))
       }

    },[appLocation.pathname])


    return (
        <div>

            {
                comments?.length && comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>)
            }

            </div>
    );
};

export default CommentsComponent;
