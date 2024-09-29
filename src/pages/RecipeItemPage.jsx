import {
  useTheme,
  Box,
  Image,
  Heading,
  Text,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { Card } from '../components/ui/Card';
import { Labels } from '../components/logic/Labels';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';

export const RecipeItemPage = ({ recipe, onBack }) => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bg={theme.colors.darkBlue} minH='100vh' p={5}>
      <Card>
        <Flex justifyContent='space-between' alignItems='center'>
          <IconButton
            icon={<ArrowBackIcon />}
            onClick={onBack}
            aria-label='Go Back'
            bg='transparent'
            color={theme.colors.darkBlue}
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
            maxH={{ base: '21vh', md: '34vh', lg: '55vh', xl: '89vh' }}
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
          <Box mr={{ base: 1, md: 2, lg: 3, xl: 5 }}>
            <Heading size='sm' color='gray.500' mb={3}>
              {recipe.mealType?.join(', ').toUpperCase()}
            </Heading>
            <Heading size='lg' my={5}>
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
          <Box ml={{ base: 1, md: 2, lg: 3, xl: 5 }}>
            <Labels
              labels={recipe.healthLabels}
              color={theme.colors.healthPurple}
            />
            <Labels labels={recipe.dietLabels} color={theme.colors.dietGreen} />
            <Labels
              labelType='Cautions'
              labels={recipe.cautions}
              color={theme.colors.cautionRed}
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
              color={theme.colors.nutrientBlue}
            />
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};
