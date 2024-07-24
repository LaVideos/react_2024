import React, {useEffect, useState} from 'react';
import {useAppLocation} from "../../hooks/useAppLocation";
import {Link, Outlet, useParams} from "react-router-dom";
import {services} from "../../services/services";
import {IUser} from "../../types/IUsers";
import useToggle from "../../hooks/useToggle";
import styles from "./user-detail-component.module.css"
import {ENDPOINTS} from "../../constants/urls";
import * as fs from "node:fs";


const UserDetailComponent = () => {
    const appLocation = useAppLocation<IUser>();
    const params = useParams();
    const [user, setUser] = useState<IUser>();
    const [isCartVisible, toggleCart] = useToggle();

    useEffect(() => {
        !appLocation.state ? services.getUserById(params.id as string).then(({data}) => setUser(data)) : setUser(appLocation.state)
    }, []);
    return (
        <div className={styles.userDetailContainer}>
            <div className={styles.userHeader}>
                {user && (
                    <>
                        <img src={user.image} alt={user.firstName} className={styles.userImage} />
                        <div>
                            <div className={styles.userName}>{user.firstName} {user.lastName}</div>
                            <div className={styles.userInfo}>
                                <div>Email: {user.email}</div>
                                <div>Phone: {user.phone}</div>
                                <div>Address: {user.address.address}, {user.address.city}</div>
                                <div>Age: {user.age}</div>
                                <div>Gender: {user.gender}</div>
                                <div>University: {user.university}</div>
                                <div>Birth Date: {user.birthDate}</div>
                            </div>
                        </div>
                    </>
                )}
                <Link to={ENDPOINTS.CARTS}>
                    <button className={styles.cartButton} onClick={() => toggleCart()}>
                        User's Cart
                    </button>
                </Link>
            </div>

            {isCartVisible && (
                <div className={styles.cartSection}>
                    <h3>{user?.firstName}'s Cart</h3>
                    <Outlet />
                </div>
            )}
        </div>
    );
};

export default UserDetailComponent;
