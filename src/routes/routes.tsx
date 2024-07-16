import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import UsersPage from "../pages/users-page";
import PostsPage from "../pages/posts-page";
import CommentsPage from "../pages/comments-page";
import TodosPage from "../pages/todos-page";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {path:"users",element:<UsersPage/>},
            {path:"posts",element:<PostsPage/>},
            {path:"comments",element:<CommentsPage/>},
            {path:"todos",element:<TodosPage/>},
        ]
    }
])

export {router}
