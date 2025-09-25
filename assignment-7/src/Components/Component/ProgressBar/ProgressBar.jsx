import React from 'react';
import vector from "../../../assets/vector-1.png"
const ProgressBar = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 max-w-9/10 mx-auto mt-10 items-center justify-center bg-gray'>
            <div className='h-[250px] w-full lg:w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center justify-between p-4 rounded-lg'>
                <img src={vector} alt="" />
                <span className='text-white font-bold whitespace-nowrap text-[30px]'>In-Progress</span>
                <img className='rotate-y-180' src={vector} alt="" />
            </div>

            <div className='h-[250px] w-full lg:w-full bg-gradient-to-r from-[#54CF68] to-[#00827A] flex items-center justify-between p-4 rounded-lg'>
                <img  src={vector} alt=""/>
                <span className='text-white font-bold text-[30px]'>Resolved</span>
                <img className='rotate-y-180' src={vector} alt="" />
            </div>
        </div>
    );
};

export default ProgressBar;