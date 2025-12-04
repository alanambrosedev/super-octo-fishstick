import { useState } from "react";
import AddRecipe from "./components/AddRecipe";
import RecipeCard from "./components/RecipeCard";
import recipeData from "./data/recipe";

function App() {
  const [recipes, setRecipes] = useState(recipeData);
  const [editRecipe, setEditRecipe] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editCookTime, setEditCookTime] = useState("");
  const [editIngredients, setEditIngredients] = useState("");
  const HandleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };
  const HandleDelete = (id) => {
    setRecipes(recipes.filter((item) => item.id !== id));
  };
  const HandleEditRecipe = (id) => {
    const recipeToEdit = recipes.find((item) => item.id === id);
    setEditRecipe(recipeToEdit);
    setEditTitle(recipeToEdit.title);
    setEditCookTime(recipeToEdit.cookTime);
    setEditIngredients(recipeToEdit.ingredients.join(", "));
  };
  const HandleUpdateRecipe = () => {
    const updateRecipe = {
      id: editRecipe.id,
      title: editTitle,
      cookTime: editCookTime,
      ingredients: editIngredients.split(",").map((i) => i.trim()),
    };
    const updatedList = recipes.map((item) =>
      item.id === editRecipe.id ? updateRecipe : item
    );
    setRecipes(updatedList);
    setEditRecipe(null);
  };

  return (
    <div>
      <h1>Recipe App</h1>
      <AddRecipe onAdd={HandleAddRecipe}></AddRecipe>
      {recipes.map((item) => (
        <RecipeCard
          key={item.id}
          id={item.id}
          title={item.title}
          cookTime={item.cookTime}
          ingredients={item.ingredients}
          onDelete={HandleDelete}
          onEdit={HandleEditRecipe}
        ></RecipeCard>
      ))}
      {editRecipe && (
        <div
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <h2>Edit Recipe</h2>
          <label>Title:</label>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          ></input>
          <label>Cook Time:</label>
          <input
            type="text"
            value={editCookTime}
            onChange={(e) => setEditCookTime(e.target.value)}
          ></input>
          <label>Ingredients:</label>
          <input
            type="text"
            value={editIngredients}
            onChange={(e) => setEditIngredients(e.target.value)}
          ></input>
          <br></br>
          <button onClick={HandleUpdateRecipe}>Update Recipe</button>
        </div>
      )}
    </div>
  );
}

export default App;
