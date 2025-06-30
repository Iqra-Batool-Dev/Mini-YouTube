import React, { useState } from 'react'
import Header from '@/components/Header/Header';
import Sidebar2 from '@/components/SideBar/Sidebar2';
import Sidebar from '@/components/SideBar/Sidebar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className=" w-full flex flex-col min-h-screen flex-wrap ">
    <Header onMenuToggle={toggleSidebar} />
    <Sidebar2 isOpen={isSidebarOpen} onMenuToggle={toggleSidebar} />
    <div className=" w-full flex flex-row  flex-1">
      <Sidebar />
      <main className=" w-[100%] xl:w-[85%] px-10 py-2 border-amber-200 border-2 ">
        Home part:
        <Outlet />
      </main>
    </div>
  </div>
  )
}

export default MainLayout
