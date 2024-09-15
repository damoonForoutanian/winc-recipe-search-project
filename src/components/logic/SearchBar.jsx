import { useTheme, Input } from '@chakra-ui/react';

export const SearchBar = ({ value, onChange }) => {
  const theme = useTheme();

  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder='Search recipes'
      _placeholder={{ color: '#7299E6' }}
      size='lg'
      maxW='610px'
      bg='#F9F6EE'
      color='#2563DA'
      border='none'
      borderRadius='md'
      boxShadow='md'
    />
  );
};
