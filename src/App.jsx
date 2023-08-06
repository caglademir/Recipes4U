import { useState } from 'react'
import Modal from './Components/Modals/Modal';
import NewRecipe from './Components/NewRecipe';




function App() {

const [showModal, setShowModal] = useState(false);

  return (

  <div id='root' className='h-screen bg-slate-900 flex justify-center items-center'>

    <button 
      onClick={() => setShowModal(true)}
      className='bg-sky-900 hover:bg-sky-700 rounded-lg p-2 text-white 
        border-2 border-sky-700'>
      New Recipe
    </button>
    <Modal 
      isVisible={showModal} 
      onClose={() => setShowModal(false)} 
    >
      <NewRecipe/>
    </Modal>
  </div>
 
  )
}

export default App
