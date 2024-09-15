import { useTheme, Center, Heading, Grid, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { data } from '../utils/data';
import { SearchBar } from '../components/logic/SearchBar';
import { RecipeItemCard } from '../components/ui/RecipeItemCard';

export const RecipeListPage = ({ onRecipeClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = data.hits.filter(
    (hit) =>
      hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hit.recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const theme = useTheme();

  return (
    <Box bg={theme.colors.darkBlue} minH='100vh' p={8}>
      {' '}
      <Center flexDir='column' mb={8}>
        {' '}
        <Heading color={theme.colors.white} mb={5}>
          Winc Recipe Checker
        </Heading>
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Center>
      {filteredRecipes.length === 0 ? (
        <Center color={theme.colors.white}>No matches found</Center>
      ) : (
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
            '2xl': 'repeat(5, 1fr)',
          }}
          gap={8}
          mx={{ base: 5, md: 8, lg: 13 }}
          mb={5}
        >
          {filteredRecipes.map((hit) => (
            <RecipeItemCard
              key={hit.recipe.label}
              recipe={hit.recipe}
              onClick={() => onRecipeClick(hit.recipe)}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
};
