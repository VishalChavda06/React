import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center px-1 py-5'>
            <div>
                <ul className='flex gap-4'>
                    <li className='flex items-center gap-1'>SHOP <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="M6 9l6 6 6-6"/></svg></span> </li>
                    <li className='flex items-center gap-1'>PRODUCTS <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="M6 9l6 6 6-6"/></svg></span> </li>
                    <li className='flex items-center gap-1'>BLOG <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="M6 9l6 6 6-6"/></svg></span> </li>
                    <li className='flex items-center gap-1'>PAGES <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="M6 9l6 6 6-6"/></svg></span> </li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>
                    <img src="https://gearonextjs.vercel.app/images/logo/logo.svg" alt="" />
                </h1>
            </div>
            <div>
                <ul className='flex gap-4'>
                    <li className='text-2xl cursor-pointer' ><CiSearch /></li>
                    <li className='text-2xl cursor-pointer'><CiUser /></li>
                    <li className='text-2xl cursor-pointer'><CiShoppingCart /></li>
                    <li className='text-2xl cursor-pointer'><CiHeart /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar