import React from 'react'
import { useState } from 'react'
import NewRecipe from "../NewRecipe";

export default function EditModal({ isVisible, onClose, catchId, recipes, setRecipes }) {
    if (!isVisible) return null;
    const [newDesc, setNewDesc] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newImg, setNewImg] = useState("");

    const saveLocal = () => {

        const updatedRecipes = recipes.map((value) => {
            if (value.id === catchId.id) {
                return {
                    ...value,
                    desc: newDesc.trim() === "" ? catchId.desc : newDesc,
                    title: newTitle.trim() === "" ? catchId.title : newTitle,
                    img: newImg.trim() === "" ? catchId.img : newImg,
                };
            }
            return value;
        });
        setRecipes(updatedRecipes);

        onClose(false);

    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-20
    backdrop-blur-sm flex justify-center items-center'>
            <div className="w-[600px]">
                <div className="bg-white p-2 rounded flex flex-col">
                    <button
                        onClick={onClose}
                        className="text-2xl place-self-end font-semibold hover:text-sky-700">
                        X
                    </button>
                    <div className=''>
                        <form className='mt-4 p-4'>
                            <label
                                className='mb-4 text-lg font-semibold text-sky-900'
                                for="url">Image URL:
                            </label>

                            <br></br>

                            <input
                                onChange={(e) => { setNewImg(e.target.value) }}
                                className='mb-4 mt-2 border-2 border-sky-900 p-1 
                        rounded-xl hover:border-sky-500'
                                type="url"
                                name="url"
                                id="url"
                                placeholder="https://example.com"
                                pattern="https://.*"
                                required
                                defaultValue={catchId.img}
                            />

                            <img
                                
                                className='float-right border-4 border-sky-700 rounded-lg'
                                src={catchId.img}
                                alt="img"
                            />

                        </form>

                        <div className='mt-4 p-4'>
                            <label
                                className='text-lg font-semibold text-sky-900'
                                htmlFor="title"> Name:
                            </label>
                            <input
                                onChange={(e) => { setNewTitle(e.target.value) }}
                                type="text"
                                id="title"
                                placeholder="..."
                                className='w-full mt-2 border-2 border-sky-900 
                        hover:border-sky-500 p-1 rounded-xl'
                                defaultValue={catchId.title}
                            />
                        </div>

                        <div className='p-4'>

                            <label
                                className='text-lg font-semibold text-sky-900'
                                htmlFor="recipe"> Recipe:
                            </label>
                            <textarea
                                onChange={(e) => { setNewDesc(e.target.value) }}
                                type="text"
                                
                                id="recipe"
                                placeholder="..."
                                className='w-full mt-2 border-2 border-sky-900 
                            hover:border-sky-500 p-1 rounded-xl'
                                defaultValue={catchId.desc}
                            />
                        </div>
                        <div>
                            <button
                                onClick={(e) => saveLocal()}
                                type='button'
                                className=' bg-sky-900  hover:bg-sky-700
                    rounded-lg text-white 
                    border-2 border-white float-right
                    py-2 px-4'
                            >
                                Save Recipe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
