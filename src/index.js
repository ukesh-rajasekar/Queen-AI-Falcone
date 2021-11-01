import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './configs/themes';

import App from './App';

ReactDom.render(
   <ThemeProvider theme={darkTheme}>
      <App />
   </ThemeProvider>,
   document.getElementById('root')
);
