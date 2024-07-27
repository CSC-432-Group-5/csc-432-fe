import React from "react";
import Modal from "./Modal";

export default function Filter({ isModalOpen, setIsModalOpen, closeModal }) {
  return (
    <div>
      <Modal action={setIsModalOpen} open={isModalOpen}>
        <div>
          <div className="flex flex-col h-full w-[400px] gap-6">
            <div className=" flex justify-start font-normal text-3xl py-2 border-b-2">
              Filter
            </div>

            <div className="flex items-center ">
              <div className="w-full ">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Filter Employee"
                  className="w-full border p-3 rounded-lg border-[#A2A1A833]"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-5">
              <div className="flex  font-semibold text-base">Faculty</div>
              <div className="w-full grid grid-cols-2 ">
                <div className=" flex gap-3 justify-start">
                  <div>
                    <input className="h-5 w-5" type="checkbox" name="" id="" />
                  </div>
                  Design
                </div>
                <div className=" flex gap-3 justify-start">
                  <div>
                    <input className="h-5 w-5" type="checkbox" name="" id="" />
                  </div>
                  HR
                </div>
              </div>
              <div className="w-full grid grid-cols-2  ">
                <div className=" flex gap-3 justify-start">
                  <div>
                    <input className="h-5 w-5" type="checkbox" name="" id="" />
                  </div>
                  Sales
                </div>
                <div className=" flex gap-3 justify-start">
                  <div>
                    <input className="h-5 w-5" type="checkbox" name="" id="" />
                  </div>
                  Business Analysis
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <div className="flex  font-semibold text-base">Department</div>
              <div className="w-full grid grid-cols-2  ">
                <div className=" flex gap-3 justify-start">
                  <div>
                    <input className="h-5 w-5" type="checkbox" name="" id="" />
                  </div>
                  Design
                </div>
                <div className=" flex gap-3 justify-start">
                  <div>
                    <input className="h-5 w-5" type="checkbox" name="" id="" />
                  </div>
                  HR
                </div>
              </div>
              <div className="w-full grid grid-cols-2  ">
                <div className=" flex gap-3 justify-start">
                  <div>
                    <input className="h-5 w-5" type="checkbox" name="" id="" />
                  </div>
                  Sales
                </div>
                <div className=" flex gap-3 justify-start">
                  <div>
                    <input className="h-5 w-5" type="checkbox" name="" id="" />
                  </div>
                  Business Analysis
                </div>
              </div>
            </div>

            <div className=" w-full flex gap-4 justify-center">
              <div
                className=" px-7 py-3  rounded-xl font-light text-base border hover:bg-blue-gray-50"
                onClick={closeModal}
              >
                Cancel
              </div>
              <div
                className=" px-7 py-3  rounded-xl font-light text-base bg-[#3354F4] text-white"
                onClick={closeModal}
              >
                Apply
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
