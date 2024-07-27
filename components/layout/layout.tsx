import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import Sidebar from "../sidebar";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full h-full bg-white p-5">
      <div className="md:w-[25%]">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <div className="flex flex-col px-2 md:px-5 w-full">
        <div className="flex justify-between w-full items-center pb-8">
          <div className="md:hidden flex" onClick={() => setSidebarOpen(true)}>
            <CgMenuLeftAlt className="w-6 h-6" aria-hidden="true" />
          </div>
          <div></div>

          <div className="flex gap-3 items-center ">
            {/* <div>
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-4 border  outline-none rounded-lg"
              />
            </div> */}

            <div className="bg-gray-100 p-3 flex text-sm md:text-lg rounded-lg">
              <CiBellOn />
            </div>

            <div className="border p-1 flex gap-2 items-center rounded-lg">
              <img
                src="/profileimg.png"
                alt="Profile"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <div className="md:text-sm text-xs">Robert Allen</div>
                <div className="text-xs text-gray-500">HR Manager</div>
              </div>
              <IoIosArrowDown className="text-sm md:text-lg" />
            </div>
          </div>
        </div>

        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
