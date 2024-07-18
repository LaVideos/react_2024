import React, {useEffect, useState} from 'react';
import {IUser} from "../../types/IUser";
import {services} from "../../services";
import UserComponent from "./user-component";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>()

    useEffect(() => {
        services.getAllUsers().then(({data})=>setUsers([...data]));
    }, []);



    return (
        <div>
            {
                users?.length&&users.map(user=><UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;
