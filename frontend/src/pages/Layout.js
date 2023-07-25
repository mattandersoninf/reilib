import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  const location = useLocation();

  // Function to get the background color based on the current pathname
  const getBackgroundColor = (pathname) => {
    switch (pathname) {
      case '/':
        return '#f0f0f0'; // Background for the home page
      case '/login':
        return '#f7ffe6'; // Background for the services page
      case '/personal':
        return '/signup'; // Background for the contact page
      default:
        return '#fff'; // Default background color
    }
  };

  const backgroundColor = getBackgroundColor(location.pathname);

  return (
    <div style={{ backgroundColor, minHeight: '100vh' }}>
      {children}
    </div>
  );
};

export default Layout;