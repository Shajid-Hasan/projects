import React from 'react';

const Navbar = () => {
    return (
        <div className='max-w-9/10 mx-auto'>
            <div className="shadow-md border-b-[0.5px] border-gray-300">
                <nav className="px-8 py-4 flex justify-between items-center">
                    <h1 className="md:text-xl text-sm font-bold">CS — Ticket System</h1>
                    <div className="md:flex hidden items-center gap-6">
                        <a href="#" className="text-[#000000]   text-[14px]">
                            Home
                        </a>
                        <a href="#" className="text-[#000000] text-[14px]">
                            FAQ
                        </a>
                        <a href="#" className="text-[#000000] text-[14px]">
                            Changelog
                        </a>

                        <a href="#" className="text-[#000000] text-[14px]">
                            Blog
                        </a>
                        <a href="#" className="text-[#000000] text-[14px]">
                            Download
                        </a>
                        <a href="#" className="text-[#000000] text-[14px]">
                            Contact
                        </a>
                        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 text-[13px] hover:cursor-pointer">
                            + New Ticket
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;