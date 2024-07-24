import React, {FC} from 'react';
import {IUser} from "../../types/IUsers";
import {Link} from "react-router-dom";
import {ENDPOINTS} from "../../constants/urls"
import styles from './user-component.module.css'

interface UserType{
    user:IUser;
}


const UserComponent:FC<UserType> = ({user}) => {
    return (
        <div className={styles.userCard}>
            <Link to={`/${ENDPOINTS.USERS}/${user.id}`} state={user}>
                <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className={styles.userImage}/>
                <div className={styles.userDetails}>
                    <div className={styles.userName}>{`${user.firstName} ${user.lastName}`}</div>
                    <div className={styles.userEmail}>{user.email}</div>
                    <div className={styles.userLink}>View Profile</div>
                </div>
            </Link>
        </div>
    );
};

export default UserComponent;
