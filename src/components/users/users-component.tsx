import React, {useEffect, useState} from 'react';
import {services} from "../../services/json_services";
import {IUser} from "../../types/IUser";
import UserComponent from "./user-component";
import {useLocation} from "react-router-dom";
import {useAppLocation} from "../../hook/useAppLocation";

const UsersComponent = () => {


    const [users, setUsers] = useState<IUser[]>();

    useEffect(()=>{
        services.getAllUsers().then(({data})=>setUsers([...data]));
    },[])


    return (
        <div>

            {
                users?.length && users.map(user => <UserComponent key={user.id} user={user}/>)
            }

        </div>
    );
};

export default UsersComponent;
