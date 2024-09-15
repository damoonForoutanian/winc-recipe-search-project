'use strict';

import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    white: '#F9F6EE',
    black: '#2F2F2F',
    darkBlue: '#2563DA',
    lightBlue: '#7299E6',
    healthPurple: '#E6D2FC',
    dietGreen: '#C0F6D1',
    cautionRed: '#FF6D76',
    nutrientBlue: '#99B7FA',
  },
  fonts: {
    heading: `'Helvetica', sans-serif`,
    body: `'Helvetica', sans-serif`,
  },
});

// // Future creation of a darkTheme, based on the baseTheme
// const darkTheme = extendTheme({
//   ...baseTheme,
//   styles: {
//     global: {
//       ...baseTheme.styles.global,
//       'html, body': {
//         color: 'white',
//         bg: 'gray.800',
//       },
//     },
//   },
// });

export { customTheme };
