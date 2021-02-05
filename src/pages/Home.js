import React from "react";
import RecipeList from "../components/RecipeList";
import SearchForm from "../components/SearchForm";
export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    async function getRecipe() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        const { meals } = data;
        if (meals) {
          const newRecipe = meals.map((item) => {
            const { idMeal, strMeal, strMealThumb } = item;

            return {
              id: idMeal,
              name: strMeal,
              image: strMealThumb,
            };
          });
          setRecipes(newRecipe);
        } else {
          setRecipes([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    getRecipe();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList recipes={recipes} loading={loading} />
    </main>
  );
}
