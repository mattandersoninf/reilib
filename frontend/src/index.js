
/*code block 1 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PropertiesContextProvider } from './context/PropertyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PropertiesContextProvider>
      <App />
    </PropertiesContextProvider>
  </React.StrictMode>
);

