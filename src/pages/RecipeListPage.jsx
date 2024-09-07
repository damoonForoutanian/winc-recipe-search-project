import { useState } from 'react';
import { Center, Grid, Heading, Box } from '@chakra-ui/react';
import { SearchBar } from '../components/logic/SearchBar';
import { RecipeItemCard } from '../components/ui/RecipeItemCard';
import { data } from '../utils/data';

export const RecipeListPage = ({ onRecipeClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = data.hits.filter((hit) => {
    const recipe = hit.recipe;
    const query = searchQuery.toLowerCase();
    return (
      recipe.label.toLowerCase().includes(query) ||
      recipe.healthLabels.some((label) => label.toLowerCase().includes(query))
    );
  });

  return (
    <Box bg='#2563DA' minH='100vh' p={5}>
      <Center flexDir='column'>
        <Heading color='white' mb={5}>
          Winc Recipe Checker
        </Heading>
        <SearchBar
          placeholder='Search recipes'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredRecipes.length === 0 ? (
          <Heading size='md' mt={3} color='white'>
            No matches found
          </Heading>
        ) : (
          <Grid
            templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
            gap={5}
            mt={3}
          >
            {filteredRecipes.map((hit, index) => (
              <RecipeItemCard
                key={hit.recipe.label + index}
                recipe={hit.recipe}
                onClick={() => onRecipeClick(hit.recipe)}
              />
            ))}
          </Grid>
        )}
      </Center>
    </Box>
  );
};
