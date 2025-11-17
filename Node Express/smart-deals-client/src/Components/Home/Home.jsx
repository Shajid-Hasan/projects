import React from 'react';
import LatestProducts from '../Latest Prodducts/LatestProducts';

const latestProductsPromise = fetch('http://localhost:3000/latest-products')
    .then(res => res.json());

const Home = () => {
    
    return (
        <div>
            <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
        </div>
    );
};

export default Home;