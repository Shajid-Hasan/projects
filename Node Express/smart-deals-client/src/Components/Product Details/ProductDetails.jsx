import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const ProductDetails = () => {

    // LOAD DATA FROM API
    const {_id: productID} = useLoaderData();
    const  [bids, setBids] = useState([])

    // BID PRODUCTS
    const bidModalRef = useRef(null)
    const {user} = use(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:3000/products/bids/${productID}`)
        .then(res => res.json())
            .then(data => setBids(data));
    }, [productID])

    // BID MODAL
    const handelBidModalOpen = () =>{
        bidModalRef.current.showModal()
    }

    // HANDEL BID
    const handelBidSubmit= (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const bid = e.target.bid.value;
        console.log(productID, name, email, bid)

        // BID PRODUCTS
        const newBid = {
            product : productID,
            buyer_name: name,
            buyer_email: email,
            buyer_image: user?.photoRL,
            bid_price: bid,
            status: 'pending'
        }

        // BID POST
        fetch('http://localhost:3000/bids', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                bidModalRef.current.close()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your bid has been placed.",
                    showConfirmButton: false,
                    timer: 1500
                });

                // ADD THE NEW BID TO THE STATE
                newBid._id = data.insertedId;
                const newBids = [...bids, newBid];
                newBids.sort((a, b) => b.bid_price -a.bid_price)
                setBids(newBids);
            }
        })
    }
    return (
        <div>
            {/* Product info */}
                <div>
                    <button onClick={handelBidModalOpen} className='btn btn-primary'>I want to buy this product</button>

                    <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Offer something seller can not ressist</h3>
                            <form onSubmit={handelBidSubmit}>
                                <fieldset className="fieldset">
                                    {/* NAME */}
                                    <label className="label">Name</label>
                                    <input type="text" className="input" name='name' readOnly defaultValue={user?.displayName} />
                                    {/* EMAIL */}
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name='email' readOnly defaultValue={user?.email} />
                                    {/* BID AMOUNT */}
                                    <label className="label">Bid</label>
                                    <input type="text" className="input" name='bid' placeholder='Your Bid' />
                                    <button className="btn btn-neutral mt-4">Place Your Bid</button>
                                </fieldset>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>

            {/* Bids for product */}
            <div>
                <h3 className='text-3xl'>Bids for this product : <span className='text-primary'>{bids?.length}</span></h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    SL NO.
                                </th>
                                <th>Buyer Name</th>
                                <th>Buyer Email</th>
                                <th>Bid Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bids.map((bid, index)=> 
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{bid.buyer_name}</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {bid.buyer_email}
                                    </td>
                                        <td>{bid.bid_price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                
            </div>
            </div>
    );
};

export default ProductDetails;