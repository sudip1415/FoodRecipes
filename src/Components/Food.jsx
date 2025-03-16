import React, { useState } from 'react'
import fetchRecipes from '../services/fetchRecipes';
import Button from './Button';
import FoodCard from './FoodCard';

function Food() {
    const [search, setSearch] = useState("")
    const [recipes, setRecipes] = useState([]);

    const handleRecipes = async () => {
        const result = await fetchRecipes(search);
        setRecipes(result);
    }
    return (
        <>
            <div className='flex flex-col items-center p-6 text-black'>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter food"
                    className='m-4 px-3 py-3 rounded border border-black'
                />
                <Button label="Search" onClick={handleRecipes} />
            </div>
            <div className='w-full p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
                {recipes.map((recipe) => (
                    <FoodCard key={recipe.idMeal} recipe={recipe} />
                ))}
            </div>
        </>
    )
}

export default Food