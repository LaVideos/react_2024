import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import MenuComponent from "../components/nav/menu/menu-component";

const MainLayout: FC = () => {
    return (
        <div>
            <><MenuComponent/></>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
