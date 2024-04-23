'use client';
import React from 'react'
import { signOut } from "next-auth/react"
import Link from 'next/link';
import { FaUserAstronaut } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

const Profilemenu = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <div className='flex items-center justify-center space-x-2 w-full text-red-500 ease-out duration-500 font-medium hover:text-blue-900'>
        <div>
          <Link href={'/profile'} className='flex w-full items-center justify-center py-2  transition-all'>Profile</Link>
        </div>
        <FaUserAstronaut className='text-2xl'/>
      </div>
        <div className='flex space-x-2 items-center justify-center w-full bg-red-500 text-white hover:bg-blue-900  ease-in-out duration-500'>
          <div>
            <button onClick={() => signOut()}
            className=' w-full font-medium py-2  transition-all'
            >Logout</button>    
          </div>
            <IoIosLogOut className='text-2xl'/>
        </div>
      </div>
  )
}

export default Profilemenu