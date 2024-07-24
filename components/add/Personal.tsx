import React from "react";
import { FaCamera } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

export default function Personal({ handleOpen }) {
  return (
    <div className="border h-full w-full rounded-lg p-4 flex flex-col gap-5">
      <div className="flex gap-5 border-b ">
        <div className="flex gap-3 font-light text-base border-b-2 border-[#7152F3] text-[#7152F3]">
            <FaUser/>
          Personal Information
        </div>
        <div className="flex gap-3 font-light text-base">
        <MdBusinessCenter />Professional Information</div>
        {/* <div className=" font-light text-base">Documents</div>
        <div className=" font-light text-base">Account Access</div> */}
      </div>

      <div className="h-32 w-32 rounded-xl bg-[#A2A1A80D] flex justify-center items-center text-3xl">
        <FaCamera />
      </div>

      <div className=" flex flex-col gap-4">
        <div className="w-full  grid grid-cols-2 gap-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="First Name"
            className="border p-3 rounded-lg border-[#A2A1A833]"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Last Name"
            className="border p-3 rounded-lg border-[#A2A1A833]"
          />
        </div>
        <div className="w-full  grid grid-cols-2 gap-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Mobile Number"
            className="border p-3 rounded-lg border-[#A2A1A833]"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email Address"
            className="border p-3 rounded-lg border-[#A2A1A833]"
          />
        </div>
        <div className="w-full  grid grid-cols-2 gap-3">
          <input
            type="date"
            name=""
            id=""
            placeholder="Date of Birth"
            className="border p-3 rounded-lg border-[#A2A1A833]"
          />
          <select
            name=""
            id=""
            className="border p-3 rounded-lg text-gray-500 border-[#A2A1A833]"
          >
            <option
              value=""
              className="border p-3 rounded-lg border-[#A2A1A833"
            >
              Marital Status
            </option>
          </select>
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
              Gender
            </option>
          </select>
          <select
            name=""
            id=""
            className="border p-3 rounded-lg text-gray-500 border-[#A2A1A833]"
          >
            <option
              value=""
              className="border p-3 rounded-lg border-[#A2A1A833"
            >
              Nationality
            </option>
          </select>
        </div>
        <div className="w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Address"
            className="w-full border p-3 rounded-lg border-[#A2A1A833]"
          />
        </div>
        <div className="w-full  grid grid-cols-3 gap-3">
          <select
            name=""
            id=""
            className="border p-3 rounded-lg text-gray-500 border-[#A2A1A833]"
          >
            <option
              value=""
              className="border p-3 rounded-lg border-[#A2A1A833"
            >
              City
            </option>
          </select>
          <select
            name=""
            id=""
            className="border p-3 rounded-lg text-gray-500 border-[#A2A1A833]"
          >
            <option
              value=""
              className="border p-3 rounded-lg border-[#A2A1A833"
            >
              State
            </option>
          </select>
          <select
            name=""
            id=""
            className="border p-3 rounded-lg text-gray-500 border-[#A2A1A833]"
          >
            <option
              value=""
              className="border p-3 rounded-lg border-[#A2A1A833"
            >
              ZIP Code
            </option>
          </select>
        </div>
      </div>

      <div className=" w-full flex gap-4 justify-end">
        <div className=" p-4 border rounded-xl font-light text-base ">
          Cancel
        </div>
        <div
          className=" p-4 border rounded-xl font-light text-base bg-[#7152F3] text-white"
          onClick={handleOpen}
        >
          Next
        </div>
      </div>
    </div>
  );
}
