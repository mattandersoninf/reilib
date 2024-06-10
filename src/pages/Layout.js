import React from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import languageData from './lang';
import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { useAuthContext } from '../context/AuthContext';
import AddNewProperty from './AddNewProperty';
import PropertyPage from './PropertyPage';



const Layout = ({ children }) => {

  
  const { user } = useAuthContext();

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

  // Assuming you have a function to get the current language or it's passed as a prop
  const currentLanguage = 'en'; // Replace with your logic to get the current language


  // Function to get the background image based on the current language
  const getBackgroundImage = (language) => {
    return languageData[language]?.backgroundImage || 'none';
  };

  const backgroundImage = getBackgroundImage(location.pathname, currentLanguage);

  // const backgroundColor = getBackgroundColor(location.pathname);

  return (
    <div style={{ backgroundImage, minHeight: '100vh' }}>
        <Routes>

              <Route
                path="/"
                element={user ? <Home/> : <Navigate to="/login"/>}
              />

              <Route
                path="/login"
                element={!user ? <LogIn/> : <Navigate to="/"/>}
              />
              
              <Route
                path="/signup"
                element={!user ? <SignUp/> : <Navigate to="/"/>}
              />

              <Route
                path="/newProp"
                element={<AddNewProperty/>}
              />
            
              <Route
                path={"/properties/:propertyID"}
                element={<PropertyPage/>}
              />

            </Routes>
      
    </div>
  );
};

// <main>{children}</main>

export default Layout;