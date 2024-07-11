import React, {useEffect, useState} from 'react';
import {IUser} from "../../types/IUser";
import {services} from "../../services/services";
import UserComponent from "./user-component";
import {Outlet} from "react-router-dom";


const UsersComponent = () => {


    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {


        services.getAllUsers().then(({data}) =>
            setUsers([...data.users])
        )


    }, [])

    return (
        <div>


            <div>
                <Outlet/>
            </div>

            <div>
                {

                    users.length && users.map(user => <UserComponent key={user.id} user={user}/>)
                }
            </div>


        </div>
    );
};

export default UsersComponent;
