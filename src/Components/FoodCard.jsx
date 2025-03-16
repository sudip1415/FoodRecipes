import React from 'react'
import Button from './Button';

function FoodCard({ recipe }) {
    return (
        <>
            <div className='bg-transparent min-h-52 h-96 text-center border m-auto rounded-md p-2 flex flex-col justify-evenly items-center'>
                <h2 className=' text-lg font-semibold'>{recipe.strMeal}</h2>
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className='w-48 h-48 object-cover rounded-2xl mt-3'
                />
                <Button label="Get Recipe" />
            </div>
        </>
    )
}

export default FoodCard;