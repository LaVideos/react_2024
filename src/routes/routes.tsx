import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import UsersPage from "../pages/users-page";
import PostsPage from "../pages/posts-page";
import CommentsPage from "../pages/comments-page";
import TodosPage from "../pages/todos-page";
import {ENDPOINTS} from "../constants/urls";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {path:`${ENDPOINTS.USERS}`,element:<UsersPage/>},
            {path:`${ENDPOINTS.POSTS}`,element:<PostsPage/>},
            {path:`${ENDPOINTS.COMMENTS}`,element:<CommentsPage/>},
            {path:`${ENDPOINTS.TODOS}`,element:<TodosPage/>},
            {path:`user/:id/${ENDPOINTS.POSTS}`,element:<PostsPage/>},
            {path:`post/:id/${ENDPOINTS.COMMENTS}`,element:<CommentsPage/>},
        ]
    }
])

export {router}
