import React from 'react';
import {Outlet} from "react-router-dom";
import {FooterComponent, HeaderComponent} from "../components";

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
