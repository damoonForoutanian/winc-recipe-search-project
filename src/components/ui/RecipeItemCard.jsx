import { Box, Image, Heading, Text } from '@chakra-ui/react';
import { Labels } from '../logic/Labels';

export const RecipeItemCard = ({ recipe, onClick }) => {
  return (
    <Box
      bg='#F9F6EE'
      borderRadius='lg'
      overflow='hidden'
      onClick={onClick}
      cursor='pointer'
    >
      <Image src={recipe.image} objectFit='cover' w='100%' h='144px' />
      <Box p={4}>
        <Text color='gray.500' textAlign='center'>
          {recipe.mealType?.join(', ').toUpperCase()}
        </Text>
        <Heading size='md' isTruncated textAlign='center'>
          {recipe.label}
        </Heading>
        <Labels labelType='' labels={recipe.healthLabels} color='#E6D2FC' />
        <Labels labelType='' labels={recipe.dietLabels} color='#C0F6D1' />
        <Text>
          Dish: <strong>{recipe.dishType?.join(', ')}</strong>
        </Text>
        {recipe.cautions.length > 0 && (
          <Box>
            <Text>Cautions:</Text>
            <Labels labels={recipe.cautions} color='#FF6D76' />
          </Box>
        )}
      </Box>
    </Box>
  );
};
