import React from 'react';
import {Link} from "react-router-dom";
import {ENDPOINTS} from "../../constants/endpoints";

const HeaderComponent = () => {
    return (
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{margin:"5px"}}><Link to={`/${ENDPOINTS.USERS}`}>Users</Link></div>
            <div style={{margin:"5px"}}><Link to={`/${ENDPOINTS.TODOS}`}>Todos</Link></div>
            <div style={{margin:"5px"}}><Link to={`/${ENDPOINTS.COMMENTS}`}>Comments</Link></div>
            <div style={{margin:"5px"}}><Link to={`/${ENDPOINTS.POSTS}`}>Posts</Link></div>
        </div>
    );
};

export default HeaderComponent;
