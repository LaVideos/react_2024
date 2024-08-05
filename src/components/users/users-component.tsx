import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {usersAction} from "../../redux/users.slice";
import UserComponent from "./user-component";
import LoadingComponent from "../loading/loading-component";

const UsersComponent = () => {

    const {users,isLoaded} = useAppSelector(state => state.usersSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(usersAction.loadUsers());
    }, []);

    return (
        <div>
            {!isLoaded&&<LoadingComponent/>}

            {
                users&&users.map(user=><UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;
