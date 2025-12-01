import recipes from "./data/recipe";

function App() {
  return (
    <div>
      <h1>Recipe App</h1>
      <pre>{JSON.stringify(recipes, null, 2)}</pre>
    </div>
  );
}

export default App;
