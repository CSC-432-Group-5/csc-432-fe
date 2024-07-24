import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Layout from "../layout/layout";
import Personal from "./Personal";
import Professional from "./Professional";

export default function AddEmployee() {
const [personal, setPersonal] = useState(true)
const [professional, setProfessional] = useState(false)

const handleOpen = () => {
  setPersonal(false)
}

const handleOpen2 = () => {
  setPersonal(true)
}

  return (
    <Layout>
      <div className="p-4 h-full w-full">
        <div className="h-full  flex flex-col gap-5">
          {/* upper  */}
          <div className="grid grid-cols-2">
            <div>
              <div className="text-[#16151C] text-xl font-semibold">
                Add New Employee
              </div>
              <div className=" flex items-center gap-1 font-light text-sm">
                <div>All Employee</div>
                <div className="flex justify-center items-center font-light text-2xl ">
                  <RiArrowRightSLine />
                </div>
                <div>Add New Employee</div>
              </div>
            </div>
          </div>

          {/* lower  */}
          <div className={` ${personal ? "block" : "hidden"}`}>
            <Personal handleOpen={handleOpen} />
          </div>
          <div className={` ${personal ? "hidden" : "block"}`}>
            <Professional handleOpen2={handleOpen2}/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
