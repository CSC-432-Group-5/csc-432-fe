import React, { useState } from 'react'

export default function Otp() {
    const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
    return (
        <div className='flex'>
            
            <div className='lg:block hidden w-[55%] h-[495px] bg-[#7152F30D] m-7 rounded-3xl'></div>

            <div className=' lg:m-0 m-5 flex items-center justify-center h-screen'>
            <div>
                <div className=' flex'>
                    <img src="/arrow-left.svg" alt="" />
                    <p className='ml-2'>Back</p>
                </div>
                <div>
                    <p className=' text-3xl font-semibold mt-6'>Enter Otp</p>
                    <p className=' text-[#A2A1A8] mt-2'>We have share a code of your registered email address
                        robertallen@example.com</p>
                </div>

                <div className='flex  items-center space-x-2 my-7'>
                    {otp.map((num, index) =>
                        <div key={index}>
                            <input type="number" className='w-12 h-12 border rounded bg-transparent outline-none text-center font-semibold text-xl border-gray-400 focus:border-[#7152F3] spin-button-none' />
                        </div>
                    )}

                </div>
                
                    <button className='bg-[#7152F3] md:w-[445px] w-[360px] py-4 rounded-xl text-white'>Verify</button>
                
            </div>
            </div>
        </div>
    )
}
