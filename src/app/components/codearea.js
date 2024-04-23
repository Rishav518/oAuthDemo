'use client';
import React, {useState, useEffect} from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { LiaCommentSolid } from "react-icons/lia";
import { GiAlienFire } from "react-icons/gi";
import { MdContentCopy } from "react-icons/md";



const Codearea = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('HTML');

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };
  return (
    <div className='flex items-center justify-center p-4 w-full max-h-screen lg:w-[65%] overflow-y-scroll scrollbar-hide pb-20'>
        <div className='flex-col flex items-center justify-center mt-40 w-full space-y-3'>
            <div className='flex font-Unbuntu items-center shadow-xl justify-center h-96 min-w-[70%] bg-white rounded-xl'>
                Preview
            </div>
            <div className='h-10 text-blue-900 w-[70%] rounded bg-white shadow-xl flex items-center justify-around'>
                <div className='flex text-lg items-center cursor-pointer space-x-1 text-red-500 hover:text-blue-900'>
                        <div className='text-2xl'><GiAlienFire /></div>
                        <div>10</div>
                </div>
                <div className='flex items-center cursor-pointer space-x-1 '>
                        <div className='text-3xl'><LiaCommentSolid /></div>
                        <div>1</div>
                </div>
                <div>22 Apr 2024</div>
                <div className='cursor-pointer hover:underline'>Rishav Kumar</div>
            </div>
            <div className='flex items-start justify-end h-96 w-[70%] bg-gray-800 overflow-hidden rounded-xl'>
                <div className='flex flex-col items-center justify-center w-full'>
                    <div className='flex items-end justify-between w-full'>
                        <div className='flex items-center space-x-1 text-white bg-gray-600 px-2 rounded py-1 cursor-pointer hover:text-red-500 hover:bg-gray-300'>
                            <div className='text-xl'><MdContentCopy/></div>
                            <div>Copy</div>
                        </div>
                        <div className='flex'>
                            <div className={`w-20 flex items-center space-x-1 py-1 text-white bg-orange-600 px-2 ${selectedLanguage === 'HTML' ? 'bg-opacity-100' : 'bg-opacity-30 cursor-pointer'}`} onClick={() => handleLanguageChange('HTML')}>
                                <FaHtml5 className='text-xl' />
                                <div>HTML</div>
                            </div>
                            <div className={`w-20 flex items-center space-x-1 py-1 text-white bg-blue-700 px-2 ${selectedLanguage === 'CSS' ? 'bg-opacity-100' : 'bg-opacity-30 cursor-pointer'}`} onClick={() => handleLanguageChange('CSS')}>
                                <IoLogoCss3 className='text-xl' />
                                <div>CSS</div>
                            </div>
                            <div className={`w-20 flex items-center space-x-1 py-1 text-white bg-yellow-500 px-2 ${selectedLanguage === 'JS' ? 'bg-opacity-100' : 'bg-opacity-30 cursor-pointer'}`} onClick={() => handleLanguageChange('JS')}>
                                <IoLogoJavascript className='text-xl' />
                                <div>JS</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-4 w-[95%] max-h-96 bg-gray-800 p-2 text-white rounded overflow-auto h-auto scroll-smooth scrollbar-hide'>
                    {selectedLanguage === 'HTML' && (
                        <div>
                            {/* HTML CODE  */}
                            HTML CODE 
                            {/* HTML CODE  */}
                        </div>
                        
                    )}
                    {selectedLanguage === 'CSS' && (
                        <div>
                        {/* CSS CODE  */}
                        CSS CODE 
                        {/* CSS CODE  */}
                        </div>
                    )}
                    {selectedLanguage === 'JS' && (
                        <div>
                        {/* JS CODE  */}
                        JS CODE 
                        {/* JS CODE  */}
                        </div>
                    )}
                    </div>
                </div>
            </div>
            <div className='text-white px-4 space-x-3 py-2 w-[70%] rounded bg-gray-900 shadow-xl flex items-center justify-between'>
            <div className='w-full'><input
            className='w-full py-2 px-4 bg-gray-900 border-none outline-none' 
            type='text'
            placeholder='Enter comment'/></div>
            <div className='px-2 py-2 hover:bg-gray-700 bg-red-500 ease-in-out duration-500 cursor-pointer rounded'>Comment</div>
            </div>
        </div>
    </div>
  )
}

export default Codearea