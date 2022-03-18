import React from 'react';
import './Product.css'
const Product = (props) => {
    const {title,image,price} = props.product;
    return (
        <div className='product card'>
            <div className='text-center'>   
            <img className='w-50' src={image} alt="" />
            </div>
            <h4>{title}</h4>
            <p>${price}</p>
            <footer>
            <button onClick={props.handler} className='btn btn-success text-white me-2'>Add to Cart</button>
            </footer>
            </div>
    );
};

export default Product;