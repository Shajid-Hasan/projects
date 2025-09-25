import React from 'react';

const Bottle = ({bottle, handelAddToCart}) => {

    const {img, name, price, stock, seller, ratings} = bottle
    console.log(bottle)
    
    return (
        <div className='border-1 border-green-500 p-5 bg-blue-200 rounded-xl'>
            <img src={img} alt="" />
            <h3 className='font-bold mt-2'>{name}</h3>
            <h3>Price : ${price}</h3>
            <h3>Seller : {seller}</h3>
            <h3>Ratings : {ratings}</h3>
            <h3>Stock : {stock} remaining</h3>

            <button onClick={handelAddToCart} className='bg-yellow-500 my-2 p-1'>Buy Now</button>
        </div>
    );
};

export default Bottle;