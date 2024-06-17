/* code block 2 */
import { BrowserRouter as Router, Routes, Route, Navigate, Redirect, Switch } from 'react-router-dom';
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
              <Switch>
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
                <Redirect
                  path = "/"
                />
              </Switch>
            </Routes>
          </div>
      </Router>
    </div>
  );
};

export default App;