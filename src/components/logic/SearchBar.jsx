import { Input } from '@chakra-ui/react';

export const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      size='lg'
      maxW='610px'
    />
  );
};
