'use client';
import React, { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
// import { getServerSession } from 'next-auth/client';
import { authOptions } from '@/lib/auth';
import { LoginForm } from '../login/form';
import Image from 'next/image';
import Link from 'next/link';
import Profilemenu from './profilemenu';
import { FaRegWindowClose } from "react-icons/fa";


const Header = () => {
  // State to manage the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession(authOptions);
      setUser(session?.user);
    };

    fetchSession();
  }, []); // Run only once when the component mounts

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className='border-b-2 flex w-full items-center justify-center px-6 bg-white '>
      <div className='flex py-2 items-center justify-between max-w-7xl w-full'>
        <Link href={'/'} className='h-14'>
          <Image className='h-full w-full' src={'/images/logo.png'} height={469} width={1500} />
        </Link>
        
        <div className='hidden md:flex items-center space-x-4'>
          <Link href={'/'} className='shadow-xl px-2 py-1 rounded bg-red-500 text-white shadow-gray-400  hover:mb-2 ease-out duration-500'>About Us</Link>
          <Link href={'/'} className='shadow-xl px-2 py-1 rounded bg-red-500 text-white shadow-gray-400  hover:mb-2 ease-out duration-500'>Privacy Policy</Link>
          <Link href={'/'} className='shadow-xl px-2 py-1 rounded bg-red-500 text-white shadow-gray-400  hover:mb-2 ease-out duration-500'>Contact</Link>
          <Link href={'/'} className='shadow-xl px-2 py-1 rounded bg-red-500 text-white shadow-gray-400  hover:mb-2 ease-out duration-500'>DMCA</Link>
        </div>
        
        <div className='relative'>
          {/* Conditional rendering of user's name if logged in */}
          {user ? (
            <div className='bg-gray-200 h-12 w-12 rounded-full overflow-hidden'
            onClick={toggleDropdown}>
              <img
                src={user.image}
                alt={user.name}
                width={48}
                height={48}
              />
            </div>
          ) : (
            <div
              className='shadow-xl px-2 py-1 rounded bg-red-500 text-white shadow-gray-400 cursor-pointer hover:bg-blue-900 ease-out duration-500 transition-all'
              onClick={toggleDropdown}
            >
              {/* Conditional rendering of button text */}
              {isDropdownOpen ? <div className='px-4 text-md'>X</div> : 'Login'}
            </div>
          )}

          {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className='absolute right-0 mt-2 w-60 bg-white border rounded shadow-lg'>
                <div className='rounded overflow-hidden'>
                  {user ? (
                    <Profilemenu/>
                  ) : (
                    <LoginForm />
                  )}
                </div>
              </div>
            )}
            
        </div>
      </div>
    </div>
  );
};

export default Header;
