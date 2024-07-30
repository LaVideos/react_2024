import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import {ENDPOINTS} from "../constants/urls";
import {AuthPage, CarsPage} from "../pages";

const router = createBrowserRouter([
    {path:"/",element:<MainLayout/>,children:[
            {index:true, element:<AuthPage/>},
            {path:`/${ENDPOINTS.AUTH}`, element:<AuthPage/>},
            {path:`/${ENDPOINTS.CARS}`,element:<CarsPage/>}
        ]}
])


export {router}
