import React, {FC} from 'react';
import {IUser} from "../../types/IUser";
import {Link} from "react-router-dom";
import {ENDPOINTS} from "../../constants/urls";

interface UserType {
    user: IUser
}

const UserComponent: FC<UserType> = ({user}) => {
    return (
        <div style={{margin: "20px"}}>
            <div>{user.username}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
            <Link to={`/${ENDPOINTS.USER}/${user.id}/${ENDPOINTS.POSTS}`} state={user.id}>Go to posts</Link>
        </div>
    );
};

export default UserComponent;
