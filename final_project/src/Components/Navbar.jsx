import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-10 py-7 bg-white'>
            {/* Left Section - Navigation Links */}
            <div className='flex-1'>
                <ul className='flex gap-6'>
                    <li className='flex items-center gap-1 text-gray-800 font-medium cursor-pointer hover:text-gray-600 transition-colors'>
                        SHOP 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </li>
                    <li className='flex items-center gap-1 text-gray-800 font-medium cursor-pointer hover:text-gray-600 transition-colors'>
                        PRODUCTS 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </li>
                    <li className='flex items-center gap-1 text-gray-800 font-medium cursor-pointer hover:text-gray-600 transition-colors'>
                        BLOGS 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </li>
                    <li className='flex items-center gap-1 text-gray-800 font-medium cursor-pointer hover:text-gray-600 transition-colors'>
                        PAGES 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </li>
                </ul>
            </div>

            {/* Center Section - Brand Logo */}
            <div className='absolute left-1/2 transform -translate-x-1/2'>
                <img src="https://gearonextjs.vercel.app/images/logo/logo.svg" alt="GearO Logo" className='h-8' />
            </div>

            {/* Right Section - Utility Icons */}
            <div className='flex-1 flex justify-end'>
                <ul className='flex gap-6'>
                    <li className='text-xl text-gray-700 cursor-pointer hover:text-gray-900 transition-colors'>
                        <CiSearch />
                    </li>
                    <li className='text-xl text-gray-700 cursor-pointer hover:text-gray-900 transition-colors'>
                        <CiUser />
                    </li>
                    <li className='text-xl text-gray-700 cursor-pointer hover:text-gray-900 transition-colors'>
                        <CiHeart />
                    </li>
                    <li className='text-xl text-gray-700 cursor-pointer hover:text-gray-900 transition-colors relative'>
                        <CiShoppingCart />
                        <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                            1
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar