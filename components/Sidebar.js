import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { PiStudentLight } from "react-icons/pi";
import { LuCreditCard } from "react-icons/lu";
import { GrSchedules } from "react-icons/gr"


const Sidebar = ({ children }) => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const isLinkActive = (link) => {
        return activeLink === link;
    };
    return (
        <div className='flex'>
            <div className='fixed w-56 h-screen bg-white border-r-[1px] flex flex-col '>
                <div className='flex justify-center'>
                    <Image src="/trinity-logo.jpg" width={130} height={130} alt='logo' />
                </div>

                <div className='flex flex-col justify-center items-center pt-6 '>
                    <div className='rounded-full overflow-hidden'>

                        <Image src="/the-admin-pic.png" width={80} height={80} alt='profile-pic' />
                    </div>
                    <span className=' pt-3'>John Emmanuel</span>
                    <span className='border-b-[1px] border-gray-200 w-48 p-2'></span>


                </div>

                <div className='flex flex-col items-center pt-8 space-y-6'>
                    <Link href='/'>
                        <div
                            onClick={() => handleLinkClick('students')}
                            className={`p-3 w-52 rounded-lg flex items-center ${isLinkActive('students') ? ' bg-customBlue' : 'bg-transparent'
                                }`}
                        >
                            <div className='w-8 mr-2'>
                                <PiStudentLight size={20} className='mx-auto' />
                            </div>
                            <span>Students</span>
                        </div>
                    </Link>

                    <Link href='/'>
                        <div
                            onClick={() => handleLinkClick('attendance')}
                            className={`p-3 w-52 rounded-lg flex items-center ${isLinkActive('attendance') ? 'bg-customBlue' : 'bg-transparent'
                                }`}
                        >
                            <div className='w-8 mr-2'>
                                <LuCreditCard size={20} className='mx-auto' />
                            </div>
                            <span>Attendance</span>
                        </div>
                    </Link>

                    <Link href='/'>
                        <div
                            onClick={() => handleLinkClick('schedule')}
                            className={`p-3 w-52 rounded-lg flex items-center ${isLinkActive('schedule') ? 'bg-customBlue' : 'bg-transparent'
                                }`}
                        >
                            <div className='w-8 mr-2'>
                                <GrSchedules size={20} className='mx-auto' />
                            </div>
                            <span>Schedule</span>
                        </div>
                    </Link>


                </div>

            </div>

            <main className=' ml-20 w-full'>{children}</main>
        </div>
    )
}

export default Sidebar