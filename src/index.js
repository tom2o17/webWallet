import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Function from './components/function';
import {StoreProvider} from './store'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
