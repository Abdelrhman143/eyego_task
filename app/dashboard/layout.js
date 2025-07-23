"use client";

import Sidebar from "../_components/Sidebar";
import Header from "../_components/Header";
import { useState } from "react";

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col">
      {isSidebarOpen && (
        <div className="md:hidden z-40">
          <div
            className="absolute inset-0 bg-black/10"
            onClick={toggleSidebar}
          ></div>
          <div className="absolute z-10 bg-white h-full w-52 border-r border-gray-100">
            <Sidebar toggleSidebar={toggleSidebar} />
          </div>
        </div>
      )}

      <Header toggleSidebar={toggleSidebar} />

      <div className=" md:flex container">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <main className="ml-5 flex-1">{children}</main>
      </div>
    </div>
  );
}
