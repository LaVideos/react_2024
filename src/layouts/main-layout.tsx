import React from 'react';
import HeaderComponent from "../components/page-parts/header-component";
import {Outlet} from "react-router-dom";
import FooterComponent from "../components/page-parts/footer-component";

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
