import React, {FC} from 'react';
import {IUser} from "../../types/IUser";

interface UserType {
    user:IUser
}

const UserComponent:FC<UserType> = ({user}) => {
    return (
        <div style={{margin:"20px"}}>
            <div>{user.username}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>

            </div>
    );
};

export default UserComponent;
