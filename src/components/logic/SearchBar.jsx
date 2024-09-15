import { useTheme, Input } from '@chakra-ui/react';

export const SearchBar = ({ value, onChange }) => {
  const theme = useTheme();

  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder='Search recipes'
      _placeholder={{ color: theme.colors.lightBlue }}
      size='lg'
      maxW={377}
      bg={theme.colors.whiteish}
      color={theme.colors.darkBlue}
      border='none'
      borderRadius='md'
      boxShadow='md'
    />
  );
};
