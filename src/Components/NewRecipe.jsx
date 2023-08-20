import React from 'react'


export default function NewRecipe({ name, setName, desc, setDesc, img, setImg, recipes, setRecipes, setShowModal }) {

    const addLocal = (e) => {

        const recipe = {
            title: name,
            desc: desc,
            img: img,
            id: Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        }
        const newData = [...recipes, recipe];
        setRecipes(newData);
        setShowModal(false);
    }

    return (
        <div className=''>
            <form className='mt-4 p-4'>
                <label
                    className='mb-4 text-lg font-semibold text-sky-900'
                    for="url">Image URL:
                </label>

                <br></br>

                <input
                    onChange={(e) => { setImg(e.target.value) }}
                    className='mb-4 mt-2 border-2 border-sky-900 p-1 
                        rounded-xl hover:border-sky-500'
                    type="url"
                    name="url"
                    id="url"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    required
                />

                <img
                    className='float-right'
                    src="https://www.file-extension.info/images/resource/formats/img.png"
                    alt="img"
                />

            </form>

            <div className='mt-4 p-4'>
                <label
                    className='text-lg font-semibold text-sky-900'
                    htmlFor="title"> Name:
                </label>
                <input
                    onChange={(e) => { setName(e.target.value) }}
                    type="text"
                    id="title"
                    placeholder="..."
                    className='w-full mt-2 border-2 border-sky-900 
                        hover:border-sky-500 p-1 rounded-xl'
                />
            </div>

            <div className='p-4'>

                <label
                    className='text-lg font-semibold text-sky-900'
                    htmlFor="recipe"> Recipe:
                </label>
                <input
                    onChange={(e) => { setDesc(e.target.value) }}
                    type="text"
                    maxlength="500" size="550"
                    id="recipe"
                    placeholder="..."
                    className='w-full mt-2 border-2 border-sky-900 
                            hover:border-sky-500 p-1 rounded-xl'
                />
            </div>
            <div>
                <button
                    onClick={(e) => addLocal()}
                    type='button'
                    className=' bg-sky-900  hover:bg-sky-700
                    rounded-lg text-white 
                    border-2 border-white float-right
                    py-2 px-4'
                >
                    Add Recipe
                </button>
            </div>
        </div>
    )
}
