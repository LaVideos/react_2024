import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import UserComponent from "./user-component";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {userActions} from "../../redux/user-slice";
import LoadingComponent from "../loading/loading-component";

const UsersComponents = () => {

    const {users,isLoaded} = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.getUsers())
    }, []);



    return (
        <div>
            {!isLoaded&&<LoadingComponent/>}
            {users&&users.map(user=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponents;
