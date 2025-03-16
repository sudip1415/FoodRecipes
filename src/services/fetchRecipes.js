const baseUrl = "https://www.themealdb.com/api/json/v1/1";
const fetchRecipes = async (searchQuery) => {
    if (!searchQuery.trim()) return [];
    try {
        const response = await fetch(`${baseUrl}/search.php?s=${searchQuery}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching recipe : ", error);
        return [];
    }
}
export default fetchRecipes;