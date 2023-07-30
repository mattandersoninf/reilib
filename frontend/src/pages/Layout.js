import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import languageData from './lang';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/Signup';
import Personal from '../pages/Personal';



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
        <header>
            <Navbar/>
        </header>
        <Routes>
            <Route
                path = "/"
                element= {<Home/>}
            />
            <Route
                path="/login"
                element={<LogIn/>}
            />
            <Route
                path="/signup"
                element={<SignUp/>}
            />
            <Route
                path="/personal"
                element={<Personal/>}
            />
        </Routes>
      <main>{children}</main>
    </div>
  );
};

export default Layout;