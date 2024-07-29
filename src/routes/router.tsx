import {createBrowserRouter} from "react-router-dom";
import React from "react";
import {MainLayout} from "../layouts";
import {ENDPOINTS} from "../constants/urls";
import AuthPage from "../pages/auth-page";
import RegistrationPage from "../pages/registration-page";
import CarsPage from "../pages/cars-page";

export const router = createBrowserRouter([{path:"/",element:<MainLayout/>,children:[
        {
            path:`/${ENDPOINTS.AUTH}`, element:<AuthPage/>
        },
        {
            index:true,element:<AuthPage/>
        },
        {
            path:`/${ENDPOINTS.REGISTRATION}`, element:<RegistrationPage/>
        },
        {
            path:`/${ENDPOINTS.CARS}`, element:<CarsPage/>
        }

    ]}])
