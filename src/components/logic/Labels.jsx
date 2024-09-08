import { Box, Text } from '@chakra-ui/react';

export const Labels = ({ labelType, labels, color, filter }) => {
  if (!labels) return null;

  const filteredLabels = filter
    ? Object.keys(labels)
        .filter((key) => filter.includes(key))
        .map((key) => labels[key])
    : labels;

  return (
    <Box mt={2}>
      {labelType && filteredLabels.length > 0 && (
        <Text fontWeight='bold'>{labelType}:</Text>
      )}
      {filteredLabels.length > 0 &&
        filteredLabels.map((label, index) => (
          <Text
            key={index}
            display='inline-block'
            bg={color}
            p={1}
            borderRadius='md'
            m={1}
            ml={2}
          >
            {label.label || label}
          </Text>
        ))}
    </Box>
  );
};
