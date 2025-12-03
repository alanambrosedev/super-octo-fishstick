import { useState } from "react";

function AddRecipe({ onAdd }) {
  const [title, setTitle] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      title,
      cookTime: Number(cookTime),
      ingredients: ingredients.split(",").map((i) => i.trim()),
    };
    onAdd(newRecipe);
    setTitle("");
    setCookTime("");
    setIngredients("");
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Cook Time:</label>
        <input
          type="number"
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
        />
        <label htmlFor="">Ingredients (comma separated)</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
