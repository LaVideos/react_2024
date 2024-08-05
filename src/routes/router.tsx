import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import {ENDPOINTS} from "../constants/endpoints";
import UsersPage from "../pages/users-page";
import PostsPage from "../pages/posts-page";
import CommentsPage from "../pages/comments-page";
import TodosPage from "../pages/todos-page";

export const router = createBrowserRouter([{
    path:"/",
    element:<MainLayout/>,
    children:[
        {index:true, element:<UsersPage/>},
        {path:`/${ENDPOINTS.USERS}`, element:<UsersPage/>},
        {path:`/${ENDPOINTS.POSTS}`, element:<PostsPage/>},
        {path:`/${ENDPOINTS.COMMENTS}`, element:<CommentsPage/>},
        {path:`/${ENDPOINTS.TODOS}`, element:<TodosPage/>},
    ]
}])
