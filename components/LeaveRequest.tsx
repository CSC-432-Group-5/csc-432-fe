import React, { useState } from "react";
import Modal from "./Modal";

export default function LeaveRequest({isModalOpen, setIsModalOpen, closeModal}) {
  
 

  return (
    <div>
        
      <Modal action={setIsModalOpen} open={isModalOpen}>
        <div>
          <div className="flex flex-col h-full  gap-4">
            <div className=" flex justify-start font-normal text-3xl py-4">
              Request For Leave
            </div>
            <div className="grid grid-cols-2 items-center ">
              <div className="flex justify-start font-normal text-xl">Type</div>
              <div className="w-full ">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Select leave type"
                  className="w-full border p-3 rounded-lg border-[#A2A1A833]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center ">
              <div className="flex justify-start font-normal text-xl">
                Start Date
              </div>
              <div className="w-full ">
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder="Select leave type"
                  className="w-full border p-3 rounded-lg border-[#A2A1A833]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center ">
              <div className="flex justify-start font-normal text-xl">
                End Date
              </div>
              <div className="w-full ">
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder="Select leave type"
                  className="w-full border p-3 rounded-lg border-[#A2A1A833]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center ">
              <div className="flex justify-start font-normal text-xl">
                Reason
              </div>
              <div className="w-full ">
                {/* <input
                type="text"
                name=""
                id=""
                placeholder="Select leave type"
                className="w-full border p-3 rounded-lg border-[#A2A1A833]"
              /> */}
                <textarea
                  name=""
                  id=""
                  placeholder="Enter Your Reason"
                  className=" w-full border p-7 rounded-lg border-[#A2A1A833]"
                ></textarea>
              </div>
            </div>

            <div className=" w-full flex gap-4 justify-end">
              <div className=" px-7 py-3  rounded-xl font-light text-base bg-[#3354F4] text-white" onClick={closeModal}>
                Done
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
