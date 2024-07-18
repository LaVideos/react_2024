import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import {ENDPOINTS} from "../constants";
import UserPage from "../pages/user-page";
import PostPage from "../pages/post-page";
import CommentPage from "../pages/comment-page";
import TodoPage from "../pages/todo-page";
import PostsComponent from "../components/posts/posts-component";

export const router = createBrowserRouter(
    [
        {
            element:<MainLayout/>,
            path:"/",
            children:[
                {path:ENDPOINTS.USERS,element:<UserPage/>},
                {path:ENDPOINTS.POSTS,element:<PostPage/>},
                {path:ENDPOINTS.COMMENTS,element:<CommentPage/>},
                {path:ENDPOINTS.TODOS,element:<TodoPage/>},
                {path:`${ENDPOINTS.USER}/:id/${ENDPOINTS.POSTS}`,element:<PostPage/>},
                {path:`${ENDPOINTS.POST}/:id/${ENDPOINTS.COMMENTS}`,element:<CommentPage/>},
            ]
        }
    ]
)
