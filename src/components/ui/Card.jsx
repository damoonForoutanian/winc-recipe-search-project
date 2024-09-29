import { useTheme, Box } from '@chakra-ui/react';

export const Card = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      bg={theme.colors.whiteish}
      my={{ lg: 5, xl: 3 }}
      mx={{ lg: 89, xl: 377 }}
      p={5}
      borderRadius='md'
      shadow='md'
    >
      {children}
    </Box>
  );
};
