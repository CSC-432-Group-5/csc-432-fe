import LeaveRequest from '@/components/LeaveRequest'
import Layout from '@/components/layout/layout';
import LoginSuccess from '@/components/loginSuccess'
import React, { useState } from 'react'

export default function test() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Layout>

      {/* <LoginSuccess/> */}
      <button onClick={openModal} >Open Modal</button>
      <LeaveRequest isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} closeModal={closeModal}/>
      </Layout>
    </div>
  )
}
