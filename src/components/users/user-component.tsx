import React, {FC} from 'react';
import {IUser} from "../../types/IUser";


type UserType = {
    user:IUser
}

const UserComponent:FC<UserType> = ({user}) => {
    return (
        <div>
            <div>{user.name} {user.username}</div>
            <hr/>
        </div>
    );
};

export default UserComponent;
