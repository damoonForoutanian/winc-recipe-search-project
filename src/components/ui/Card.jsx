import { useTheme, Box } from '@chakra-ui/react';

export const Card = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      bg={theme.colors.whiteish}
      mx={{ xl: 233 }}
      p={5}
      borderRadius='md'
      shadow='md'
    >
      {children}
    </Box>
  );
};
