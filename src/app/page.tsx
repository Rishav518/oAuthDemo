'use client';
import React, { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import MainBody from './components/mainbody';

const Page = () => {

  return (
    <div className={`flex flex-col h-screen overflow-hidden`}>
      <Header/>
      <div className='flex flex-col lg:flex-row w-full'>
        <Sidebar />
        <MainBody />
      </div>
    </div>
  );
};

export default Page;
