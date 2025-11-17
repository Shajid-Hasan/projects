import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, signOutFunc, setUser } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handelSignOut = () => {
        signOutFunc()
            .then(() => {
                toast.success('Sign Out successfully');
                setUser(null);
                setOpen(false); // close dropdown after signout
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const links = (
        <>
            <li><NavLink to='/' className="hover:text-[#632EE3]">Home</NavLink></li>
            <li><NavLink to='/allproducts' className="hover:text-[#632EE3]">All Products</NavLink></li>
            <li><NavLink to='/myproducts' className="hover:text-[#632EE3]">My Products</NavLink></li>
            <li><NavLink to='/myBids' className="hover:text-[#632EE3]">My Bids</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-base-100 shadow-md">
            <div className="navbar container mx-auto">

                {/* Left side (Logo + Mobile Menu) */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10m-10 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    {/* LOGO */}
                    <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">
                        <span className="text-gray-800">Smart</span>
                        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Deal</span>
                    </Link>
                </div>

                {/* Center links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                    </ul>
                </div>

                {/* Right side */}
                <div className="navbar-end gap-4">
                    {user ? (
                        <div className="relative">
                            {/* Profile Avatar/Button */}
                            <div onClick={() => setOpen(!open)} className="cursor-pointer text-center space-y-1 flex flex-col items-center">
                                <img
                                    src={user?.photoURL || "https://via.placeholder.com/88"}
                                    className="h-12 w-12 rounded-full border"
                                    alt="profile"
                                />
                            </div>

                            {/* Dropdown Menu */}
                            {open && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl p-4 z-50">
                                    <p className="text-sm font-semibold mb-2">{user.displayName}</p>
                                    <p className="text-xs text-gray-600 mb-2">{user.email}</p>
                                    <button
                                        onClick={handelSignOut}
                                        className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link
                                to='/signin'
                                className="btn btn-outline btn-sm border-[#632EE3] text-[#632EE3] hover:bg-[#632EE3] hover:text-white"
                            >
                                Login
                            </Link>
                            <Link
                                to='/signup'
                                className="btn btn-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:opacity-90"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;
