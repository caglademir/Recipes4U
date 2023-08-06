import { useState } from 'react'
import Modal from './Components/Modal';
function App() {

const [showModal, setShowModal] = useState(false);

  return (

  <div id='root' className='h-screen bg-slate-900 flex justify-center items-center'>

    <button 
    onClick={() => setShowModal(true)}
    className='bg-sky-500/75 rounded-lg p-2 text-white 
      border-2 border-white'>
          New Recipes
    </button>
    <Modal 
      isVisible={showModal} 
      onClose={() => setShowModal(false)} 
    >
      Create Modal
    </Modal>

  </div>
 
  )
}

export default App
