import React from 'react';
import {useParams} from "react-router-dom";

const UserDetailComponent = () => {

    const params = useParams();

    return (
        <div>
            {JSON.stringify(params)}
        </div>
    );
};

export default UserDetailComponent;
