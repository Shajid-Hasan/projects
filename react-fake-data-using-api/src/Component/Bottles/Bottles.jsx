import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import { addtoStoredCart, getStoreCart } from '../../Utilities/Localstorage';

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise)

    // useEffect

    useEffect ( () => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles)

        const storedCart = [];
        for(const id of storedCartIds){
            // console.log(id)

            const cartBottle = bottles.find(bottle => bottle.id === id);
            if ( cartBottle ) {
                storedCart.push(cartBottle);
            }
        }

        console.log('Stored Cart', storedCart)
        setCart(storedCart)


    }, [bottles])
    

    const handelAddToCart = (bottle) => {
        // console.log("Bottle will be added to the cart", bottle)
        const newCart = [...cart, bottle]
        setCart(newCart)

        // SAVE THE BOTTLE ID IN THE STORAGE
        addtoStoredCart(bottle.id)
    }


    console.log(bottles)

    return (
        <div>
            <h3>Bottle : {bottles.length}</h3>
            <p>Added to cart : {cart.length} </p>
            <div className='max-w-11/12 mx-auto grid grid-cols-3 gap-10'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handelAddToCart={()=> handelAddToCart(bottle)}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;