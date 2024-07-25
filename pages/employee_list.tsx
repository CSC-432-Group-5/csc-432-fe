import Layout from "@/components/layout/layout";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { employeeData } from "@/components/data/EmployeeData";

export default function employee_list() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployeeData = employeeData.filter((employee) =>
    employee.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Layout>
        <div className=" flex flex-col gap-5">
          <div className="flex justify-between w-full">
            <div className="hidden md:flex flex-col pb-3">
              <div className="font-semibold text-sm md:text-base">
                Hello Robert👋
              </div>
              <div className="text-xs text-gray-500">Good Morning</div>
            </div>
            <div>
              <div className="flex items-center border border-gray-300 rounded-md p-2 ">
                <CiSearch className="mr-2 text-2xl font-medium" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full outline-none text-sm"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
          <div>
            <div className=" flex w-full text-gray-500 text-base font-light pb-1">
              <div className="w-[30%]">Employee Name</div>
              <div className="w-[25%]">Designation</div>
              <div className="w-[15%]">Type</div>
              <div className="w-[20%]">Check In Time</div>
              <div className="w-[10%]">Status</div>
            </div>
            {filteredEmployeeData.map((employee, index) => (
              <div className="" key={index}>
                <div className=" flex w-full   text-gray-900 text-sm pb-1 py-2 items-center border-t">
                  <div className="w-[30%] flex gap-2 items-center">
                    <img
                      src={employee.img}
                      alt=""
                      className="w-9 h-9 object-cover object-center  rounded-[50%]"
                    />
                    <div>{employee.employeeName}</div>
                  </div>
                  <div className="w-[25%]">{employee.designation}</div>
                  <div className="w-[15%]">{employee.type}</div>
                  <div className="w-[20%]">{employee.checkInTime}</div>
                  <div className="w-[10%]">
                    <span
                      className={`px-2 py-1 rounded ${
                        employee.status === "On Time"
                          ? "bg-[#E6F9F0] text-[#3FC28A]"
                          : "text-[#FF0000] bg-[#FFCCCC]"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
