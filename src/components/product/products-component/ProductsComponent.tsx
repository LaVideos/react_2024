import React, {FC, useEffect, useState} from 'react';
import ProductComponent from "../product-component/ProductComponent";
import {IProduct} from "../../../types/interfaces";

import styles from "../products-component/ProductsComponents.module.css"

const ProductsComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([]);


    useEffect(()=>{
        fetch('https://dummyjson.com/products').then(r=>r.json()).then(r=>setProducts(r.products));
    },[])



    return (
        <div className={[styles.wrapper].join("")}>

            {
                products&&products.map((value,index) => <ProductComponent product={value} key={index} />)
            }
        </div>
    );
};

export default ProductsComponent;
