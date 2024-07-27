import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Importing icon components from react-icons library
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { MdSupervisedUserCircle } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { MdMenu, MdClose } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GiOverInfinity } from "react-icons/gi";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const nav = [
    { icon: <BiCategoryAlt />, name: "Dashboard", path: "/dashboard" },
    { icon: <IoIosPeople />, name: "All Employees", path: "/all-employees" },
    { icon: <MdSupervisedUserCircle />, name: "All Departments", path: "/all-departments" },
    { icon: <FaCalendarCheck />, name: "Attendance", path: "/employee_list" },
    { icon: <AiOutlineDollarCircle />, name: "Payroll", path: "/payroll" },
    { icon: <FaBusinessTime />, name: "Jobs", path: "/jobs" },
    { icon: <IoPeopleOutline />, name: "Candidates", path: "/candidates" },
    { icon: <MdOutlineStickyNote2 />, name: "Leaves", path: "/leaves" },
    { icon: <MdOutlineEventNote />, name: "Holidays", path: "/holidays" },
    { icon: <IoSettingsOutline />, name: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex h-screen overflow-hidden ">
      <div
        className={`fixed inset-0 flex z-40 md:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"></div>
        <div className="relative  flex flex-col max-w-xs w-full bg-white p-6">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <MdClose className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className=" overflow-y-auto">
            <div className="flex-shrink-0 flex items-center gap-2 pl-10">
              <div className=" text-3xl p-1 rounded-full bg-[#8D75F5] text-white">
                <GiOverInfinity />
              </div>
              <p className="text-black font-bold text-xl ">EMS</p>
            </div>
            <nav className=" flex flex-col gap-6 pt-6  font-medium pl-5">
              {nav.map((item, index) => (
                <div key={index}>
                  <Link href={item.path} key={index}>
                    <div className=" text-gray-900 flex gap-3  p-3 rounded-e-lg text-base items-center hover:bg-gray-200 w-full hover:text-[#8D75F5] hover:border-l-4 hover:border-[#8D75F5]">
                      <p className=" text-lg">{item.icon}</p>
                      <p className="">{item.name}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex-shrink-0 w-14"></div>
      </div>

      <div className="hidden md:flex bg-gray-50 pt-5 px-5 w-full rounded-lg">
        <div className="flex flex-col">
          <div className=" flex items-center gap-2">
            <div className=" text-3xl p-1 rounded-full bg-[#8D75F5] text-white">
              <GiOverInfinity />
            </div>
            <p className="text-black font-bold text-xl ">EMS</p>
          </div>
          <div className="flex flex-col bg-gray-50 gap-5 pt-7">
            <nav className=" flex flex-col  font-medium ">
              {nav.map((item, index) => (
                <div key={index}>
                  <Link href={item.path} key={index}>
                    <div className="text-gray-900 flex gap-3 p-3 rounded-e-lg text-sm items-center hover:bg-gray-200 w-full hover:text-[#8D75F5] hover:border-l-4 hover:border-[#8D75F5]">
                      <p className="text-base md:text-lg">{item.icon}</p>
                      <p className="md:text-lg text-sm">{item.name}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <button
          className="px-4 text-gray-500 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <CgMenuLeftAlt className="w-6 h-6" aria-hidden="true" />
        </button>
      </div> */}
    </div>
  );
}
