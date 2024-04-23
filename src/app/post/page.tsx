import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Codearea from '../components/codearea'
import SidebarAds from '../components/sidebarAds'

const Page = () => {
  return (
    <div className='h-screen overflow-hidden'>
        <Header />
        <div className='flex flex-col lg:flex-row w-full'>
        <Sidebar />
        <Codearea />
        <SidebarAds />
      </div>

    </div>
  )
}

export default Page