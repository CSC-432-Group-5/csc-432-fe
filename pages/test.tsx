import LeaveRequest from '@/components/LeaveRequest'
import LoginSuccess from '@/components/loginSuccess'
import React, { useState } from 'react'

export default function test() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* <LoginSuccess/> */}
      <button onClick={openModal} >Open Modal</button>
      <LeaveRequest isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} closeModal={closeModal}/>
    </div>
  )
}
