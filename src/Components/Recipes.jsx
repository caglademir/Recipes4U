import React from 'react'

export default function Recipes({ recipes }) {


    return (
        <div className='h-full grid grid-cols-3 gap-4 ml-4 mr-4'>
                {recipes.map((recipe) => (
            <div className='p-16'>
                    <div className='bg-white grid grid-rows-2 gap-4 p-4 rounded-lg' >
                        <div>
                            <img
                                className='mx-auto'
                                src={recipe.img}
                                alt="img"
                            />
                            <label
                                className='text-2xl font-semibold text-sky-900
                                flex justify-center mt-4'
                                htmlFor="title">{recipe.title}
                            </label>
                        </div>

                        <div className='flex justify-center'>
                            <label
                                className='text-md font-semibold text-sky-900 p-2'
                            >{recipe.desc}
                            </label>
                        </div>
                        <div className='flex items-end justify-end'>
                            <button
                                type='button'
                                className=' bg-sky-900  hover:bg-sky-700
                                    rounded-lg text-white 
                                    border-2 py-2 px-4 '>
                                Edit Recipe
                            </button>
                        </div>
                    </div>
            </div>
                ))}


        </div>
    )
}
