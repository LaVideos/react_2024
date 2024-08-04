import React from 'react';
import HeaderComponent from "../components/layout-parts/header-component";
import FooterComponent from "../components/layout-parts/footer-component";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
            </div>
    );
};

export default MainLayout;
