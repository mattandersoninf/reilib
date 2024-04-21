/* code block 2 */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import AddNewProperty from './pages/AddNewProperty';

function App () {

  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
          <div className="pages">
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

            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
};

export default App;