import React, {useEffect, useState} from 'react';
import {IComment} from "../../types/IComment";
import {services} from "../../services";
import CommentComponent from "./comment-component";
import {useAppLocation} from "../../hooks/useAppLocation";
import {ENDPOINTS} from "../../constants";
import {useParams} from "react-router-dom";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>();
    const appLocation = useAppLocation();
    const params = useParams();

    useEffect(() => {
      if(appLocation.pathname===`/${ENDPOINTS.COMMENTS}`)
          services.getAllComments().then(({data})=>setComments([...data]));
      else if(appLocation.pathname.startsWith(ENDPOINTS.POST,1))
          services.getCommentsByPostId(params.id as string)
              .then(({data})=>setComments([...data]));
    }, [appLocation]);


    return (
        <div>
            {
                comments?.length&&comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>)
            }
            </div>
    );
};

export default CommentsComponent;
