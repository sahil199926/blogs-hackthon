'use client';
import Sidebar from './Sidebar';
import React, { useState } from 'react';
import Bloglist from './Bloglist';
import { Menu } from 'lucide-react';
import CreateBlogs from './CreateBlogs';

function Cms() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block md:w-1/4 bg-gray-800 text-white p-4">
        <Sidebar 
            activeTab='dashboard'
            setActiveTab={setActiveTab}
        />
      </div>

      {/* Sidebar as a slide-in menu on mobile */}
      <div className="md:hidden fixed top-0 left-0 w-full p-4 bg-gray-800 text-white flex justify-between items-center">
        <Menu className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 text-white p-4 w-3/4 h-full z-50 transition-transform transform translate-x-0">
          <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>X</button>
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}
      
      {/* Bloglist taking remaining width */}
      <div className="w-full md:w-2/3 p-4">
      {
        activeTab === "dashboard" ? (
          <Bloglist />) : (
            <CreateBlogs />
            )
      }
       
      </div>
    </div>
  );
}

export default Cms;
