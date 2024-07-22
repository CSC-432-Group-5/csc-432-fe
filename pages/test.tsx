//How to use the Modal

import Modal from '@/components/Modal'
import React, { useState } from 'react'


export default function test() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="App">
   <button onClick={openModal} >Open Modal</button>
   <Modal action={setIsModalOpen} open={isModalOpen}  >
      <h2>Modal Title</h2>
      <p>This is a reusable modal component</p>
      
    </Modal>
  </div>
  )
}
