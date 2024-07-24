import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <div><Link to={"/users"}>Users</Link></div>
            <div><Link to={"/products"}>Products</Link></div>
            <div><Link to={"/quotes"}>Quotes</Link></div>
            <div><Link to={"/carts"}>Carts</Link></div>
            <div><Link to={"/todos"}>todos</Link></div>
        </div>
    );
};

export default MenuComponent;
