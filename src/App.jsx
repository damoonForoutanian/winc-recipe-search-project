import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipeItemPage } from './pages/RecipeItemPage';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return selectedRecipe ? (
    <RecipeItemPage
      recipe={selectedRecipe}
      onBack={() => setSelectedRecipe(null)}
    />
  ) : (
    <RecipeListPage onRecipeClick={(recipe) => setSelectedRecipe(recipe)} />
  );
};
