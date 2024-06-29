import React, {FC, useEffect, useState} from 'react';
import ProductComponent from "../product-component/ProductComponent";
import {IProduct} from "../../../interfaces";

const ProductsComponent:FC = () => {

    const [products, setProducts] = useState<IProduct[]>([])

   useEffect(()=>{
       fetch('https://dummyjson.com/products')
           .then(res => res.json()).then(res=>setProducts(res.products));
   },[])

console.log(products)


    return (
        <div>
            {products.map(item => <ProductComponent key={item.id} product={item} />)}
        </div>
    );
};

export default ProductsComponent;
