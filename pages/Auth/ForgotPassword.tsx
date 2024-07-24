import React from 'react'

import { GoChevronLeft } from "react-icons/go";

const ForgotPassword = () => {
  return (
    <div className='font-sans'> <div className=" font-sans flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     <div className='flex items-center'>
        < GoChevronLeft  />
        <h5 >Back</h5>
     </div>
      <h2 className="mt-5  text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Forgot Password
      </h2>
      <p className="mt-3 text-sm text-gray-600 font-thin">
        Please Enter Your Registration Email Adress. We will send a OTP to reset your Password
      </p>
    </div>

    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="#" method="POST" className="space-y-6">
        <div className="w-100 h-12 relative flex rounded-xl">
          <input
            className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
            id="address"
            type="text"
            required
          />
          <label className="  absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-thin text-sm text-gray-400 peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150">
            Email Address
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send OTP
          </button>
        </div>
      </form>
    </div>
  </div></div>
  )
}

export default ForgotPassword