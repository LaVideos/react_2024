import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import UserPage from "../pages/user-page";
import PostsPage from "../pages/posts-page";
import CommentsPage from "../pages/comments-page";
import PostDetailComponent from "../components/posts/post-detail-component";
import UserDetailComponent from "../components/users/user-detail-component";

export const router = createBrowserRouter([
    {path:'/', element : <MainLayout/> , children:[
            {index:true,element:<PostsPage/>},
            {path:'users', element:<UserPage/>,children:[{path:':id', element:<UserDetailComponent/>}]},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>},
            {path:'posts/:id', element:<PostDetailComponent/>}
        ] }
])
