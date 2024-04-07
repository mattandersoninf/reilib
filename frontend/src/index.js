
/*index.js*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PropertiesContextProvider } from './context/PropertyContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/*
    <AuthContextProvider>
*/}
      <PropertiesContextProvider>
        <App />
      </PropertiesContextProvider>
    {/*</AuthContextProvider>*/}
  </React.StrictMode>
);

