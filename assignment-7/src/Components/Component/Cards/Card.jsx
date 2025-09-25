import React, { use } from 'react';
import dotImg from "../../../assets/dot.png"
import dateImg from "../../../assets/date.png"
const Card = ({ customerPromise }) => {
    const customerData = use(customerPromise)

    console.log(customerData)
    return (
        <div className="max-w-9/10 mx-auto">
            <h1 className="text-2xl font-bold mt-10">Customer Tickets</h1>

            <div className="grid grid-cols-3 gap-5 mt-5">
                {/* Cards Section */}
                <div className="col-span-2 grid grid-cols-2 gap-5">
                    {customerData.map((customer) => (
                        <div
                            key={customer.id}
                            className="w-full h-[210px] shadow-sm bg-white p-4 rounded-lg"
                        >
                            <div className="flex justify-between">
                                <h2 className="text-[20px] font-semibold">{customer.title}</h2>
                                <button className="flex w-[120px] text-[16px] p-2 gap-2 rounded-full bg-[#B9F8CF]">
                                    <img className="h-4 mt-1.5 pl-4" src={dotImg} alt="" />
                                    Open
                                </button>
                            </div>

                            <p className="text-[18px] mt-2">{customer.description}</p>

                            <div className="flex justify-between items-center text-[16px] mt-4">
                                <div className="flex gap-5">
                                    <span>#{customer.id}</span>
                                    <h3 className="text-red-500">{customer.priority}</h3>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <span>{customer.customer}</span>
                                    <span className="flex items-center gap-2">
                                        <img src={dateImg} alt="" />
                                        {customer.createdAt}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Aside Section */}
                <aside className="col-span-1 bg-gray-100 p-4 rounded-lg">
                    <h1 className="text-xl font-bold mb-4">Task Status</h1>
                    <p>Some extra info or filters can go here.</p>
                </aside>
            </div>
        </div>




    );
};

export default Card;