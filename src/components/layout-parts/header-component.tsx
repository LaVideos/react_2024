import React from 'react';
import {Link} from "react-router-dom";
import {ENDPOINTS} from "../../constants/endpoints";

const HeaderComponent = () => {
    return (
        <div>

            <div> <Link to={`/${ENDPOINTS.USERS}`}>Users</Link> </div>
            <div> <Link to={`/${ENDPOINTS.POSTS}`}>Posts</Link> </div>
            <div> <Link to={`/${ENDPOINTS.COMMENTS}`}>Comments</Link> </div>
            <div> <Link to={`/${ENDPOINTS.TODOS}`}>Todos</Link> </div>

            </div>
    );
};

export default HeaderComponent;
