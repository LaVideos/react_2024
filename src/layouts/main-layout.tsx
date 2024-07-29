import React from 'react';
import {FooterComponent, HeaderComponent} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <hr/>
            <Outlet/>
            <hr/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;
