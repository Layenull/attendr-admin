import React from 'react'
import Image from 'next/image';
import { BiBell } from "react-icons/bi";
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='flex justify-between pl-48 pr-12 pt-7 pb-8  border-b border-gray-300'>

            <div className="flex items-center rounded-md bg-gray-100 px-4 py-2 w-80">
                <div className="flex items-center w-full">
                    <FaSearch className="w-6 h-6 mr-2 text-gray-400" />
                    <span className="text-gray-600">Search</span>
                </div>
            </div>


            <div className='flex items-center space-x-5'>
                <BiBell className=' w-6 h-6 ' />
                <div className='rounded-full overflow-hidden'>
                    <Image src="/the-admin-pic.png" width={40} height={40} alt='profile-pic' />
                </div>

                <span>John E</span>
            </div>







        </div>
    )
}

export default Header