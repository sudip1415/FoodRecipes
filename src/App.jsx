import { useState } from "react";

function App() {
  const baseUrl = "https://www.themealdb.com/api/json/v1/1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const fetchRecipe = async () => {
    if (!search.trim()) return;
    try {
      const response = await fetch(`${baseUrl}/search.php?s=${search}`);
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.log("Error occurred:", error);
      setRecipes([]);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center p-6 bg-zinc-700 text-white">
        <input
          className="m-4 px-5 py-3 rounded border"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter food"
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => fetchRecipe(search)} // Fixed function call
        >
          Get Recipe
        </button>
      </div>

      <div className="w-full p-5 grid grid-cols-1 bg-slate-700 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-transparent w-[80%] m-auto rounded-md p-4 ">
            <h2 className="text-white text-lg font-semibold">{recipe.strMeal}</h2>
            <img 
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-32 object-cover rounded-2xl mt-3 transition-transform transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
