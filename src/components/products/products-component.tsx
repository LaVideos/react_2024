import React, {useEffect, useState} from 'react';
import {IProduct} from "../../types/IProduct";
import {services} from "../../services/services";
import ProductComponent from "./product-component";
import styles from "./products-component.module.css"

const ProductsComponent = () => {

    const [products, setProducts] = useState<IProduct[]>();

    useEffect(() => {
        services.getAllProducts().then(({data}) => setProducts([...data.products]))
    }, []);

console.log(1)
    return (
        <div className={styles.productsContainer}>
            {
                products?.length && products.map(product => <ProductComponent key={product.id} product={product}/>)
            }
        </div>
    );
};

export default ProductsComponent;
