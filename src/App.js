/* App.js */
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import AddNewProperty from './pages/AddNewProperty';
import PropertyPage from './pages/PropertyPage';


function App () {

  const { user } = useAuthContext();

  return (
    <div className="App">
      <Router>
       <Navbar/>
          <div className="pages">
            <Routes>
                <Route
                  path="/" exact
                  element={user ? <Home/> : <Navigate to="/login"/>
                  }
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
                  path="/properties/:propertyID"
                  element={<PropertyPage/>}
                />
            </Routes>
          </div>
      </Router>
    </div>
  );
};

export default App;