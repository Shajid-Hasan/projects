import React from 'react';
import { Link } from 'react-router';

const Product = ({product}) => {
    const {_id, title, price_max, seller_image} = product
    return (
        <div className="card bg-base-100 shadow-sm mb-10">
            <figure className="px-4 pt-4">
                <img 
                    src={seller_image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Title : {title}</h2>
                <h2 className="card-title">Price : ${price_max}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions">
                    <Link to={`/productDetails/${_id}`} className="btn btn-primary w-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;