import React, {useEffect, useState} from 'react';
import {ICart} from "../../types/ICart";
import {services} from "../../services/services";
import CartComponent from "./cart-component";
import {useAppLocation} from "../../hooks/useAppLocation";
import {ENDPOINTS} from "../../constants/urls";
import {useParams} from "react-router-dom";
import styles from "./carts-component.module.css"

const CartsComponent = () => {
    const appLocation = useAppLocation<any>();
    const params = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        if (appLocation.pathname === "/carts") {
            services.getAllCarts().then(({ data }) => setCarts([...data.carts]));
        } else {
            services.getCartsByUserId(params.id as string).then(({ data }) => setCarts([...data.carts]));
        }
    }, [params, appLocation.pathname]);

    console.log(carts)


    return (
        <div className={styles.cartsContainer}>
            {carts.length > 0 ? (
                carts.map(cart => <CartComponent key={cart.id} cart={cart} />)
            ) : (
                <div className={styles.noCartsMessage}>No carts available</div>
            )}
        </div>
    );
};

export default CartsComponent;
