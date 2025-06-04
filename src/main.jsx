import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './redux/store';
=======
>>>>>>> dfa3e013da58f959b10a3ff06bd586455ebbd671
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
=======
    <App />
>>>>>>> dfa3e013da58f959b10a3ff06bd586455ebbd671
  </React.StrictMode>
);