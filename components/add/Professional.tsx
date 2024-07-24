import React from "react";
import { FaUser } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";


export default function Professional({ handleOpen2 }) {
  return (
    <div className="border h-full w-full rounded-lg p-4 flex flex-col gap-5">
      <div className="flex gap-5 border-b ">
        <div className="flex gap-3 font-light text-base ">
        <FaUser/>
            Personal Information</div>
        <div className="flex gap-3 font-light text-base border-b-2 border-[#7152F3] text-[#7152F3]">
        <MdBusinessCenter />
          Professional Information
        </div>
        {/* <div className=" font-light text-base">Documents</div>
        <div className=" font-light text-base">Account Access</div> */}
      </div>

      <div className=" flex flex-col gap-4">
        <div className="w-full  grid grid-cols-2 gap-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Employee ID"
            className="border p-3 rounded-lg border-[#A2A1A833]"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="User Name"
            className="border p-3 rounded-lg border-[#A2A1A833]"
          />
        </div>
        <div className="w-full  grid grid-cols-2 gap-3">
          <select
          name=""
          id=""
          className="border p-3 rounded-lg text-gray-500 border-[#A2A1A833]">
            <option value="" className="border p-3 rounded-lg border-[#A2A1A833">Select Employee Type</option>
          </select>
          <input
            type="text"
            name=""
            id=""
            placeholder="Email Address"
            className="border p-3 rounded-lg border-[#A2A1A833]"
          />
        </div>
        <div className="w-full  grid grid-cols-2 gap-3">
          <select
            name=""
            id=""
            className="border p-3 rounded-lg text-gray-500 border-[#A2A1A833]"
          >
            <option
              value=""
              className="border p-3 rounded-lg border-[#A2A1A833"
            >
              Select Department
            </option>
          </select>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Designation"
            className="border p-3 rounded-lg border-[#A2A1A833]"
          />
        </div>
        <div className="w-full  grid grid-cols-2 gap-3">
          <select
            name=""
            id=""
            className="border p-3 rounded-lg text-gray-500 border-[#A2A1A833]"
          >
            <option
              value=""
              className="border p-3 rounded-lg border-[#A2A1A833"
            >
              Select Working Days
            </option>
          </select>
          <input
            type="date"
            name=""
            id=""
            placeholder="Select Joining Date"
            className="border p-3 rounded-lg border-[#A2A1A833]"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Office Location"
            className="w-full border p-3 rounded-lg border-[#A2A1A833]"
          />
        </div>
      </div>

      <div className=" w-full flex gap-4 justify-end">
        <div
          className=" p-4 border rounded-xl font-light text-base bg-[#7152F3] text-white"
          onClick={handleOpen2}
        >
          Done
        </div>
      </div>
    </div>
  );
}
