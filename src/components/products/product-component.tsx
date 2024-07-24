import React, {FC} from 'react';
import {IProduct} from "../../types/IProduct";
import styles from "./product-component.module.css"
import {IProductCart} from "../../types/ICart";
import {Link} from "react-router-dom";
import {ENDPOINTS} from "../../constants/urls";
import TagsComponent from "../tags/tags-component";

interface ProductProps {
    product: IProduct | IProductCart;
}

const ProductComponent: FC<ProductProps> = ({ product }) => {
    const isFullProduct = (product: IProduct | IProductCart): product is IProduct =>
        (product as IProduct).description !== undefined;

    return (
            <div className={styles.productCard}>
                <Link to={`/${ENDPOINTS.PRODUCTS}/${product.id.toString()}`} state={product}>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className={styles.productImage}
                />
                <div className={styles.productInfo}>
                    <div className={styles.productTitle}>{product.title}</div>

                    {isFullProduct(product) && product.description && (
                        <div className={styles.productDescription}>{product.description}</div>
                    )}

                    <div className={styles.productPrice}>${product.price.toFixed(2)}</div>
                    <div className={styles.productFooter}>
                        {isFullProduct(product) && product.rating && (
                            <div className={styles.productRating}>
                                ⭐ {product.rating.toFixed(1)}
                            </div>
                        )}
                        <button className={styles.productButton}>Add to Cart</button>
                    </div>
                    {isFullProduct(product) && product.tags.length > 0 && (
                        <div className={styles.productTags}>
                            {product.tags.map((tag,index) => (
                               <TagsComponent key={index} tag={tag}/>
                            ))}
                        </div>
                    )}
                </div>
                </Link>
            </div>

    );
};

export default ProductComponent;
