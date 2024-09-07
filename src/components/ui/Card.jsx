import { Box } from '@chakra-ui/react';

export const Card = ({ children }) => {
  return (
    <Box bg='#F9F6EE' p={5} borderRadius='md' shadow='md'>
      {children}
    </Box>
  );
};
