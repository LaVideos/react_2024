import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import ProductsPage from "../pages/products-page";
import {ENDPOINTS} from "../constants/urls";
import UsersPage from "../pages/users-page";
import CartsPage from "../pages/carts-page";
import QuotePage from "../pages/quote-page";
import TodosPage from "../pages/todos-page";
import UserDetailPage from "../pages/user-detail-page";
import CartsComponent from "../components/carts/carts-component";
import ProductDetailPage from "../pages/product-detail-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:
            [
                {path: ENDPOINTS.PRODUCTS, element: <ProductsPage/>},
                {path:`${ENDPOINTS.PRODUCTS}/:id`,element:<ProductDetailPage/>},
                {path: ENDPOINTS.QUOTES, element: <QuotePage/>},
                {path:ENDPOINTS.CARTS,element:<CartsPage/>},
                {path:ENDPOINTS.USERS,element:<UsersPage/>},
                {path:ENDPOINTS.TODOS,element:<TodosPage/>},
                {path:`${ENDPOINTS.USERS}/:id`,element:<UserDetailPage/>,children:[
                        {path:ENDPOINTS.CARTS,element:<CartsComponent/>}
                    ]},
            ]
    }
])
