import React, {FC} from 'react';
import {IUser} from "../../types/IUser";
import {Link, Outlet} from "react-router-dom";
interface IProps{
    user:IUser
}


const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div style={{margin:"20px", backgroundColor:""}}>
            <div>
                <div>{user.firstName + " " + user.lastName}</div>
                <div>{user.age}</div>
                <div>{user.role}</div>
                <div><button><Link to={user.id.toString()}>more details</Link></button></div>
            </div>

        </div>
    );
};

export default UserComponent;
