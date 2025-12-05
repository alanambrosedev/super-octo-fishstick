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
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
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

  const filterRecipes = recipes.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedRecipe = [...filterRecipes].sort((a, b) => {
    if (sortBy === "title_asc") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "title_desc") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });
  return (
    <div>
      <h1>Recipe App</h1>
      <input
        type="text"
        placeholder="Search recipes"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="none">No Sort</option>
        <option value="title_asc">Title (A-Z)</option>
        <option value="title_desc">Title (Z-A)</option>
      </select>
      <AddRecipe onAdd={HandleAddRecipe}></AddRecipe>
      {sortedRecipe.map((item) => (
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
