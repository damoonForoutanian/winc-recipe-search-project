import ReactDOM from 'react-dom/client';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';
import customTheme from './theme/customTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
