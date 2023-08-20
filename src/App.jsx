import { useEffect, useState } from 'react'
import Modal from './Components/Modals/Modal';
import NewRecipe from './Components/NewRecipe';
import Recipes from './Components/Recipes';
import EditModal from './Components/Modals/EditModal';

function App() {



  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [recipeTitle, setRecipeTitle] = useState();
  const [recipeDesc, setRecipeDesc] = useState();
  const [recipeImg, setRecipeImg] = useState();
  const [recipes, setRecipes] = useState(() => { return JSON.parse(localStorage.getItem("recipesData")) || [] });
  const [catchId, setCatchId] = useState();

  useEffect(() => {
    localStorage.setItem("recipesData", JSON.stringify(recipes))
    
  }, [recipes])


  return (

    <div className='min-h-screen bg-slate-900'>

      <div className='flex items-center justify-center'>
        <h1
          className='text-white font-semibold text-8xl'>
          Recipes4U
        </h1>

        <div className='mt-48 mb-48 ml-10'>
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
        onClose={() => setShowModal(false)}>
        <NewRecipe
          name={recipeTitle}
          setName={setRecipeTitle}
          desc={recipeDesc}
          setDesc={setRecipeDesc}
          img={recipeImg}
          setImg={setRecipeImg}
          recipes={recipes}
          setRecipes={setRecipes}
          setShowModal={setShowModal}
        />
      </Modal>

      <EditModal
        isVisible={editModal}
        onClose={() => setEditModal(false)}
        catchId={catchId}
        recipes={recipes}
        setRecipes={setRecipes}
      ></EditModal>
      <div>
        <Recipes recipes={recipes} setRecipes={setRecipes} isVisible={setEditModal} setCatchId={setCatchId} />
      </div>
    </div>

  )
}

export default App
