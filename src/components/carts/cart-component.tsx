import React, {FC, useEffect} from 'react';
import {ICart} from "../../types/ICart";
import ProductComponent from "../products/product-component";
import {IProduct} from "../../types/IProduct";
import styles from './cart-component.module.css';


interface CartTypes{
    cart:ICart;
}

const CartComponent: FC<CartTypes> = ({ cart }) => {
    return (
        <div className={styles.cartContainer}>
            <div className={styles.productList}>
                {cart.products.map(product => (
                    <ProductComponent key={product.id} product={product} />
                ))}
            </div>
            <div className={styles.cartSummary}>
                <div className={styles.summaryItem}>Total products: <span>{cart.totalProducts}</span></div>
                <div className={styles.summaryItem}>Total quantity: <span>{cart.totalQuantity}</span></div>
                <div className={styles.summaryItem}>Total without discount: <span>{cart.total}</span></div>
                <div className={styles.summaryItem}>Price: <span>{cart.discountedTotal}</span></div>
            </div>
        </div>
    );
};

export default CartComponent;
