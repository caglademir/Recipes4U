import { useState } from 'react'
import Modal from './Components/Modals/Modal';
import NewRecipe from './Components/NewRecipe';
import Recipes from './Components/Recipes';

function App() {

const [showModal, setShowModal] = useState(false);

  return (

  <div className='h-full bg-slate-900 grid grid-rows-2 grid-flow-col gap-4'>

    <div className='flex items-center justify-center' static>
      <h1 
      className='text-white font-semibold text-8xl'>
        Recipes4U
      </h1>
      
      <div className='mt-48'>
        <button 
          onClick={() => setShowModal(true)}
          className='bg-sky-900 hover:bg-sky-700 rounded-lg p-2 text-white 
            border-2 border-sky-700 '>
          New Recipe
        </button>
      </div>

    </div>
    
    <Modal 
      isVisible={showModal} 
      onClose={() => setShowModal(false)} 
    >
      <NewRecipe/> 
    </Modal>
    
   
    <div>

    <Recipes/>
    </div>
  </div>
 
  )
}

export default App
