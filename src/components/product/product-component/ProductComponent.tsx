import React, {FC} from 'react';
import {IProduct} from "../../../types/interfaces";

import styles from "../product-component/ProductComponent.module.css"

interface IProductComponent {
    product:IProduct
}



const ProductComponent:FC<IProductComponent> = ({product}) => {
    return (
        <div className={[styles.productWrapper].join("")}>
            <div>{product.title}</div>
            <div>{product.category}</div>
            <div>{product.price}</div>
            <img className={styles.image} src={product.images[0]}  alt={""}/>
        </div>
    );
};

export default ProductComponent;
