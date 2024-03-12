import logo from'../assets/images/large.png'
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';

const Header=()=>{
    const [showSearchBox,setShowSearchBox]=useState(false);
    const searchBoxHandler=()=>{
        setShowSearchBox(!showSearchBox);
    }
    return (
        <div className='flex justify-between items-center ml-36 mr-36'>
            <div className='flex'>
                <img src={logo} alt='log-image' className='rounded-full w-20 mt-4'/>
                <span className='mt-8 ml-2 text-3xl font-serif'>SankalpCoaching</span>
            </div>
            <div>
                <ul className='flex'>
                    <li className='mr-4 ml-4 hover:cursor-pointer hover:text-blue-700'>Home</li>
                    <li className='mr-4 ml-4 hover:cursor-pointer hover:text-blue-700'>Blogs</li>
                    <li className='mr-4 ml-4 hover:cursor-pointer hover:text-blue-700'>Coaching</li>
                    <li className='mr-4 ml-4 hover:cursor-pointer hover:text-blue-700'>About Us</li>
                    <li className='mr-4 ml-4 hover:cursor-pointer hover:text-blue-700'>Contact</li>
                    
                </ul>

            </div>
            <div className='flex'>
                <span className='mr-3 mt-1'><IoSearch /></span>
                <button className='ml-3 bg-black text-white p-2 w-24 rounded-md '>Contact Us</button>
            </div>
        </div>
    )
}

export default Header;