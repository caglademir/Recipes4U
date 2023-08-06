import { useState } from 'react'
import Modal from './Components/Modals/Modal';
import NewRecipe from './Components/NewRecipe';




function App() {

const [showModal, setShowModal] = useState(false);

  return (

  <div className='h-screen bg-slate-900'>

    <div className='flex justify-center' static>
      <h1 
      className='text-white font-semibold text-8xl mt-16'>
        Recipes4U
      </h1>
      
    <button 
      onClick={() => setShowModal(true)}
      className='bg-sky-900 hover:bg-sky-700 rounded-lg p-2 text-white 
        border-2 border-sky-700 absolute mt-48'>
      New Recipe
    </button>

    </div>

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
