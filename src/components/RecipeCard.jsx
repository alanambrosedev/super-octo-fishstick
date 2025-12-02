import { useState } from "react";

function RecipeCard({ title, cookTime, ingredients }) {
  const [showIngredients, setShowIngredients] = useState(false);
  function toggleIngredients() {
    setShowIngredients(!showIngredients);
  }
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>Cook Time: {cookTime} mins</p>
      <button onClick={toggleIngredients}>
        {showIngredients ? "Hide Ingredients" : "Show Ingredients"}
      </button>
      {showIngredients && (
        <>
          <br />
          <strong>Ingredients:</strong>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default RecipeCard;
