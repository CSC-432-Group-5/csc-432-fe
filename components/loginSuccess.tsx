//How to use the Modal

import Modal from '@/components/Modal'
import React, { useState } from 'react'


export default function LoginSuccess() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
   <button onClick={openModal} >Open Modal</button>
   <Modal action={setIsModalOpen} open={isModalOpen}  >
    <div>
        <div className='items-center flex justify-center'>
        <img src="/welcome.jpg" alt="" />
        </div>
        <p className='text-3xl font-semibold mt-5'>Password Updated <br />
        Successfully</p>
        <p className='text-[#A2A1A8] mt-4 mb-8'>Your password has been updated successfully</p>
        <button onClick={closeModal} className='bg-[#7152F3] md:w-[400px] w-[350px] py-4 rounded-xl text-white'>Back to login</button>
    </div>
    </Modal>
  </div>
  )
}
