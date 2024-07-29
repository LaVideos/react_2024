import React from 'react';
import {Link} from "react-router-dom";
import {ENDPOINTS} from "../../../constants/urls";

const MenuComponent = () => {
    return (
        <div>

            <div><Link to={`/${ENDPOINTS.AUTH}`}>{ENDPOINTS.AUTH}</Link></div>
            <div><Link to={`/${ENDPOINTS.REGISTRATION}`}>{ENDPOINTS.REGISTRATION}</Link></div>
            <div><Link to={`/${ENDPOINTS.CARS}`}>{ENDPOINTS.CARS}</Link></div>

            </div>
    );
};

export default MenuComponent;
