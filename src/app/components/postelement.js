import React from 'react'
import { GiAlienFire } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";
import Link from 'next/link'

const Postelement = () => {
  return (
    <>
            <Link href={'/post'} className="">
              <div className='rounded-lg overflow-hidden shadow-lg'>
              <div className='bg-gray-100 min-w-60 h-60'>
                {/* Preview window */}
              </div>
              </div>
              <div className='px-4 my-2 text-gray-600 font-medium flex items-center justify-between'>
                <div class="bg-gradient-to-r from-fuchsia-500 via-red-500 to-yellow-500 text-lg cursor-pointer inline-block text-transparent bg-clip-text">Rishav Kumar</div>
                <div className='flex space-x-3'>
                    <div className='flex items-center space-x-1 bg-gradient-to-r from-fuchsia-500 via-red-500 to-yellow-500 px-2 py-1 rounded text-white hover:text-gray-200 '>
                        <FaCode />
                        <div>Code</div>
                    </div>
                    <div className='flex items-center space-x-1 text-red-500 hover:text-blue-900'>
                      <div className='text-2xl'><GiAlienFire /></div>
                      <div>10</div>
                    </div>
                </div>
              </div>
            </Link>
    </>
  )
}

export default Postelement