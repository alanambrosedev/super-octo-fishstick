import RecipeCard from "./components/RecipeCard";
import recipes from "./data/recipe";

function App() {
  return (
    <div>
      <h1>Recipe App</h1>
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
