import React from 'react';
import vector from "../../../assets/vector-1.png"
const ProgressBar = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 max-w-9/10 mx-auto mt-10 items-center justify-center'>
            <div className='h-[250px] w-full lg:w-[700px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center justify-between p-4 rounded-lg'>
                <img src={vector} alt="" />
                <span className='text-white font-bold whitespace-nowrap'>In-Progress</span>
                <img className='rotate-y-180' src={vector} alt="" />
            </div>

            <div className='h-[250px] w-full lg:w-[700px] bg-gradient-to-r from-[#54CF68] to-[#00827A] flex items-center justify-between p-4 rounded-lg'>
                <img  src={vector} alt=""/>
                <span className='text-white font-bold'>Resolved</span>
                <img className='rotate-y-180' src={vector} alt="" />
            </div>
        </div>
    );
};

export default ProgressBar;