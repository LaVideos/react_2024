import React, {FC} from 'react';
import {IUser} from "../../../types/user-interface";

import styles from "../user-component/UserComponent.module.css"

interface IProps {
    user:IUser,
    getPosts:(id:number)=>void,
}



const UserComponent:FC<IProps> = ({user,getPosts}) => {
    return (
        <div className={styles.user_wrapper}>
            <div className={styles.user_info}>{user.id + ". "+ user.firstName + user.lastName}</div>
            <div className={styles.user_btn}>
                <button onClick={()=>getPosts(user.id)}>Press Me</button>
            </div>
        </div>
    );
};

export default UserComponent;
