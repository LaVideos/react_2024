import React, {useEffect, useState} from 'react';
import {IUser} from "../../types/IUsers";
import {services} from "../../services/services";
import UserComponent from "./user-component";
import styles from "./users-component.module.css"

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>();

    useEffect(() => {
        services.getAllUsers().then(({data})=>setUsers([...data.users]));
    }, [users]);



    return (
        <div className={ styles.usersContainer}>
            {
                users?.length && users.map(user=><UserComponent  key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;
