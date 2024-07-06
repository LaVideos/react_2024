import React, {useEffect, useState} from 'react';


import styles from "../users-component/UsersComponent.module.css"
import {IUser} from "../../../types/user-interface";
import {USER_API} from "../../../services/axios.services";
import UserComponent from "../user-component/UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    const [posts, setPosts] = useState<string>('')

    useEffect(()=>{

        USER_API.getALLUsers().then(({data})=>setUsers(data?.users));

    },[])



    const getPosts = (id:number)=>{
        USER_API.getUserPosts(id).then(({data})=>setPosts(JSON.stringify(data)))
    }


    return (
        <div>

            <div className={styles.users_wrapper}>
                {
                    users.length&&users.map((user)=><UserComponent key={user.id} user={user} getPosts={getPosts}/>)
                }
            </div>
            <hr/>
            <hr/>
            <hr/>
            <hr/>

            <div>
                {
                    posts
                }
            </div>
        </div>
    );
};

export default UsersComponent;
