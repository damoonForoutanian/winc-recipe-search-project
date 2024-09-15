import { useTheme, Box, Image, Heading, Text } from '@chakra-ui/react';
import { Labels } from '../logic/Labels';

export const RecipeItemCard = ({ recipe, onClick }) => {
  const filteredHealthLabels = recipe.healthLabels.filter(
    (label) => label === 'Vegan' || label === 'Vegetarian'
  );

  const theme = useTheme();

  return (
    <Box
      bg='#F9F6EE'
      borderRadius='lg'
      overflow='hidden'
      onClick={onClick}
      cursor='pointer'
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        objectFit='cover'
        w='100%'
        h='144px'
      />
      <Box p={3}>
        <Text color='gray.500' textAlign='center' mb={2}>
          {recipe.mealType?.join(', ').toUpperCase()}
        </Text>
        <Heading size='md' textAlign='center' mb={5}>
          {recipe.label}
        </Heading>
        <Labels labels={filteredHealthLabels} color='#E6D2FC' />
        <Labels labels={recipe.dietLabels} color='#C0F6D1' />
        <Text my={2} ml={2}>
          Dish: <strong>{recipe.dishType?.join(', ')}</strong>
        </Text>
        {recipe.cautions.length > 0 && (
          <Box>
            <Text mb={-2} ml={2}>
              Cautions:
            </Text>
            <Labels labels={recipe.cautions} color='#FF6D76' />
          </Box>
        )}
      </Box>
    </Box>
  );
};
