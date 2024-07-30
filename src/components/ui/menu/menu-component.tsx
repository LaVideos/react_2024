import React from 'react';
import {Link} from "react-router-dom";
import {ENDPOINTS} from "../../../constants/urls";

const MenuComponent = () => {
    return (
        <div>
            <div><Link to={`/${ENDPOINTS.AUTH}`}>Auth</Link></div>
            <div><Link to={`/${ENDPOINTS.CARS}`}>Cars</Link></div>
        </div>
    );
};

export default MenuComponent;
