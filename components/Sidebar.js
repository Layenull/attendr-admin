import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PiStudentLight } from "react-icons/pi";
import { LuCreditCard } from "react-icons/lu";
import { BsCalendarDate } from "react-icons/bs";
import { GoHome } from "react-icons/go"


const Sidebar = ({ children }) => {

    const [activeLink, setActiveLink] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedLink = localStorage.getItem('activeLink');
        if (storedLink && router.pathname === `/${storedLink}`) {
            setActiveLink(storedLink);
        }
    }, [router.pathname]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        localStorage.setItem('activeLink', link);
    };

    const isLinkActive = (link) => {
        return activeLink === link;
    };

    return (

        <div className='flex'>
            <div className='fixed w-56 h-screen bg-gray-50  border-r-[1px] flex flex-col'>
                <div className='flex pt-2 justify-center'>
                    <Image src="/logo-tu.png" width={130} height={130} alt='logo' />
                </div>

                <div className='flex flex-col items-center pt-8 space-y-6'>
                    <Link href='/'>
                        <div
                            onClick={() => handleLinkClick('home')}
                            className={`p-3 w-56  flex items-center ${isLinkActive('home') ? '' : 'bg-transparent'
                                }`}
                            style={{
                                borderLeft: isLinkActive('home') ? '3px solid #3B82F6' : 'none'
                            }}
                        >
                            <div className={`w-8 mr-2 ${isLinkActive('home') ? '' : ''}`}>
                                <div className={`w-8 mr-2 ${isLinkActive('home') ? 'text-blue-500' : 'text-gray-500'}`}>
                                    <GoHome size={20} className='mx-auto' />
                                </div>
                            </div>
                            <span className={`text-base font-medium ${isLinkActive('home') ? 'text-blue-500' : 'text-gray-600'}`}>Home</span>
                        </div>
                    </Link>

                    {/* Student */}

                    <Link href='/Students'>
                        <div
                            onClick={() => handleLinkClick('students')}
                            className={`p-3 w-56  flex items-center ${isLinkActive('students') ? '' : 'bg-transparent'
                                }`}
                            style={{
                                borderLeft: isLinkActive('students') ? '3px solid #3B82F6' : 'none'
                            }}
                        >
                            <div className={`w-8 mr-2 ${isLinkActive('students') ? '' : ''}`}>
                                <div className={`w-8 mr-2 ${isLinkActive('students') ? 'text-blue-500' : 'text-gray-500'}`}>
                                    <PiStudentLight size={20} className='mx-auto' />
                                </div>
                            </div>
                            <span className={`text-base font-medium ${isLinkActive('students') ? 'text-blue-500' : 'text-gray-600'}`}>Students</span>
                        </div>
                    </Link>
                    {/* Student-end */}



                    {/* attendance */}

                    <Link href='/Attendance'>
                        <div
                            onClick={() => handleLinkClick('attendance')}
                            className={`p-3 w-56  flex items-center ${isLinkActive('attendance') ? '' : 'bg-transparent'
                                }`}
                            style={{
                                borderLeft: isLinkActive('attendance') ? '4px solid #3B82F6' : 'none'
                            }}
                        >
                            <div className={`w-8 mr-2 ${isLinkActive('attendance') ? '' : ''}`}>
                                <div className={`w-8 mr-2 ${isLinkActive('attendance') ? 'text-blue-500' : 'text-gray-500'}`}>
                                    <LuCreditCard size={20} className='mx-auto' />
                                </div>
                            </div>
                            <span className={`text-base font-medium ${isLinkActive('attendance') ? 'text-blue-500' : 'text-gray-600'}`}>Attendance</span>
                        </div>
                    </Link>

                    {/* attendance-end */}



                    {/* Schedule */}

                    <Link href='/schedule'>
                        <div
                            onClick={() => handleLinkClick('schedule')}
                            className={`p-3 w-56  flex items-center ${isLinkActive('schedule') ? '' : 'bg-transparent'
                                }`}
                            style={{
                                borderLeft: isLinkActive('schedule') ? '4px solid #3B82F6' : 'none'
                            }}
                        >
                            <div className={`w-8 mr-2 ${isLinkActive('schedule') ? '' : ''}`}>
                                <div className={`w-8 mr-2 ${isLinkActive('schedule') ? 'text-blue-500' : 'text-gray-500'}`}>
                                    <BsCalendarDate size={20} className='mx-auto' />
                                </div>
                            </div>
                            <span className={`text-base font-medium ${isLinkActive('schedule') ? 'text-blue-500' : 'text-gray-600'}`}>Schedule</span>
                        </div>
                    </Link>

                    {/* Schedule-end */}


                </div>
            </div>

            <main className='ml-20 w-full'>{children}</main>
        </div>
    )
}

export default Sidebar