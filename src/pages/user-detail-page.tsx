import React from 'react';
import UserDetailComponent from "../components/users/user-detail-component";
import {Outlet} from "react-router-dom";

const UserDetailPage = () => {
    return (
        <>
         <UserDetailComponent/>
        </>
    );
};

export default UserDetailPage;
