import { useState } from "react";
import AddRecipe from "./components/AddRecipe";
import RecipeCard from "./components/RecipeCard";
import recipeData from "./data/recipe";

function App() {
  const [recipes, setRecipes] = useState(recipeData);
  function HandleAddRecipe(recipe) {
    setRecipes([...recipes, recipe]);
  }
  return (
    <div>
      <h1>Recipe App</h1>
      <AddRecipe onAdd={HandleAddRecipe}></AddRecipe>
      {recipes.map((item) => (
        <RecipeCard
          key={item.id}
          title={item.title}
          cookTime={item.cookTime}
          ingredients={item.ingredients}
        ></RecipeCard>
      ))}
    </div>
  );
}

export default App;
