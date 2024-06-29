import React, {FC} from 'react';
import {IProduct} from "../../../interfaces";

import styles from "../product-component/ProductComponent.module.css"

interface IProps {
    product: IProduct
}


const ProductComponent: FC<IProps> = ({product}) => {

    return (
        <div className={[styles.productWrap].join(" ")}>
            <div> {product.title}</div>
            <div>{product.category}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <div className={styles.imageWrap}>
                <img className={styles.image} src={product.images[0]}/>
            </div>
        </div>);
};

export default ProductComponent;
