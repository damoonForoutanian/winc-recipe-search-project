import { Box, Image, Heading, Flex, IconButton } from '@chakra-ui/react';
import { Card } from '../components/ui/Card';
import { Labels } from '../components/logic/Labels';
import { ArrowBackIcon } from '@chakra-ui/icons';

export const RecipeItemPage = ({ recipe, onBack }) => {
  return (
    <Box bg='#2563DA' minH='100vh' p={5}>
      <Card>
        <Flex justifyContent='space-between' alignItems='center'>
          <IconButton
            icon={<ArrowBackIcon />}
            onClick={onBack}
            aria-label='Go Back'
          />
          <Image
            src='/src/assets/WincAcademy-logo.png'
            h='34px'
            alt='Winc Academy'
          />
        </Flex>
        <Image src={recipe.image} objectFit='cover' borderRadius='md' mt={5} />
        <Flex justifyContent='space-between' mt={5}>
          <Box>
            <Heading size='md' color='gray.500'>
              {recipe.mealType?.join(', ').toUpperCase()}
            </Heading>
            <Heading size='lg' isTruncated>
              {recipe.label}
            </Heading>
            <Box mt={2}>
              <Heading size='sm'>
                Total cooking time: <strong>{recipe.totalTime} Minutes</strong>
              </Heading>
              <Heading size='sm'>
                Servings: <strong>{recipe.yield}</strong>
              </Heading>
              <Heading size='md' mt={4}>
                Ingredients:
              </Heading>
              {recipe.ingredientLines.map((ingredient, index) => (
                <Box key={index}>{ingredient}</Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Labels
              labelType='Health labels'
              labels={recipe.healthLabels}
              color='#E6D2FC'
            />
            <Labels
              labelType='Diet'
              labels={recipe.dietLabels}
              color='#C0F6D1'
            />
            <Labels
              labelType='Cautions'
              labels={recipe.cautions}
              color='#FF6D76'
            />
            <Heading size='md' mt={4}>
              Total nutrients:
            </Heading>
            <Labels
              labelType='Total nutrients'
              labels={recipe.totalNutrients}
              filter={[
                'ENERC_KCAL',
                'PROCNT',
                'FAT',
                'CHOCDF',
                'SUGAR',
                'CHOLE',
                'NA',
              ]}
              color='#99B7FA'
            />
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};
