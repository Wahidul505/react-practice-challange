import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Header from '../Header/Header';
import './Products.css';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    const [count,setCount] = useState(0);
    const increaseCount = ()=> setCount(count + 1);
    return (
       <div>
            <Header count = {count}></Header>
            <div className='products-container'>
            {
                products.map(product => <Product key={product.id} product ={product} handler = {increaseCount} ></Product>)
            }
            </div>
       </div>
    );
};

export default Products;