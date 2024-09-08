import { Input } from '@chakra-ui/react';

export const SearchBar = ({ value, onChange }) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder='Search recipes'
      _placeholder={{ color: '#2563DA' }}
      size='lg'
      maxW='610px'
      bg='#F9F6EE'
      color='#7299E6'
      border='none'
      borderRadius='md'
    />
  );
};
