import React, {useEffect, useState} from 'react';
import {USER_API} from "../../../services/axios.services";
import {IUser} from "../../../types/user-interface";
import UserComponent from "../user-component/UserComponent";


import styles from "../users-component/UsersComponent.module.css"

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    const [posts, setPosts] = useState<any>(undefined);

    useEffect(()=>{
        USER_API.getAllUsers().then(({data})=>setUsers(data?.users));
    },[])


    const getPosts=(id:number)=>{
        USER_API.getAllUsersPost(id).then(({data})=>setPosts(data))
    }


    console.log(users)

    return (
        <div>

            <div className={styles.users_wrapper}>
                {
                    users && users.map((user) => <UserComponent getPosts={getPosts} user={user} key={user.id}/>)
                }
            </div>
            <hr/>
            <hr/>
            <hr/>
            <hr/>

            <div>
                {posts&&JSON.stringify(posts)}
            </div>
        </div>
    );
};

export default UsersComponent;
