import { useTheme, Box } from '@chakra-ui/react';

export const Card = ({ children }) => {
  const theme = useTheme();

  return (
    <Box bg={theme.colors.whiteish} p={5} borderRadius='md' shadow='md'>
      {children}
    </Box>
  );
};
