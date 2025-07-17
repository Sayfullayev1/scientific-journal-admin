import React from 'react'
// import './dashboardLayout.scss'


import LeftSidebar from '../../components/layoutsComponents/sidebars/leftSidebar/LeftSidebar';
import HeaderComponent from '../../components/layoutsComponents/headerComponent/HeaderComponent'
import { Outlet } from 'react-router-dom'


export default function DashboardLayout() {


  console.log("wffefe");
  
  return (
    <div className='flex h-[100vh]'>
      <div className='w-[300px] border-r-[1.6px] border-r-[#E8ECF0]'>
        <LeftSidebar/>
      </div>
      <div className="flex-1 flex flex-col bg-[#F5F7FA]">
        <HeaderComponent/>
        <Outlet/>
      </div>
    </div>
  )
}

