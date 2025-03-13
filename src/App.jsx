import { useState } from "react";

function App() {
  const baseUrl = "https://www.themealdb.com/api/json/v1/1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState({}); // Track expanded state for each recipe

  const fetchRecipe = async () => {
    if (!search.trim()) return;
    try {
      const response = await fetch(`${baseUrl}/search.php?s=${search}`);
      const data = await response.json();
      setRecipes(data.meals || []);
      setExpanded({}); // Reset expanded state when new recipes are fetched
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
          onClick={fetchRecipe}
        >
          Get Recipe
        </button>
      </div>

      <div className="w-full p-5 grid grid-cols-1 bg-slate-700 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => {
          const isExpanded = expanded[recipe.idMeal];
          return (
            <div key={recipe.idMeal} className="bg-transparent w-[80%] m-auto rounded-md p-4">
              <h2 className="text-white text-lg font-semibold">{recipe.strMeal}</h2>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-32 object-cover rounded-2xl mt-3 transition-transform transform hover:scale-110"
              />
              <p className="text-white mt-2">
                {isExpanded ? recipe.strInstructions : `${recipe.strInstructions.substring(0, 150)}...`}
              </p>
              {recipe.strInstructions.length > 150 && (
                <button
                  className="text-blue-400 underline mt-2"
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [recipe.idMeal]: !isExpanded,
                    }))
                  }
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
