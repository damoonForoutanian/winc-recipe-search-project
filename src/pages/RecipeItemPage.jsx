import { Box, Image, Heading, Text, Flex, IconButton } from '@chakra-ui/react';
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
            bg='transparent'
            color='#2563DA'
            size='lg'
          />
          <Image
            src='/src/assets/WincAcademy-logo.png'
            h='55px'
            alt='Winc Academy'
          />
        </Flex>
        <Flex justifyContent='center' mt={3}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            position='relative'
            overflow='hidden'
            borderRadius='md'
            h={{ base: '37vh', md: '55vh' }}
            width={{ base: '100%', md: '55%' }}
          >
            <Image
              src={recipe.image}
              alt={recipe.label}
              objectFit='cover'
              h='100%'
              w='auto'
              maxH='55vh'
              maxW='100%'
              margin='auto'
            />
          </Box>
        </Flex>
        <Flex justifyContent='space-between' mt={5}>
          <Box mr={3}>
            <Heading size='sm' color='gray.500' mb={3}>
              {recipe.mealType?.join(', ').toUpperCase()}
            </Heading>
            <Heading size='lg' isTruncated my={5}>
              {recipe.label}
            </Heading>
            <Box mt={2}>
              <Text size='sm'>Cooking time:</Text>
              <Heading size='sm' fontWeight='normal'>
                <strong>{recipe.totalTime} Minutes</strong>
              </Heading>
              <Text size='sm' mt={2}>
                Servings: <strong>{recipe.yield}</strong>
              </Text>
              <Heading size='md' mt={5} mb={3}>
                Ingredients:
              </Heading>
              {recipe.ingredientLines.map((ingredient, index) => (
                <Box key={index} mb={3}>
                  {ingredient}
                </Box>
              ))}
            </Box>
          </Box>
          <Box ml={3}>
            <Labels labels={recipe.healthLabels} color='#E6D2FC' />
            <Labels labels={recipe.dietLabels} color='#C0F6D1' />
            <Labels
              labelType='Cautions'
              labels={recipe.cautions}
              color='#FF6D76'
            />
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
