/* code block 2 */
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import Layout from './pages/Layout';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import AddNewProperty from './pages/AddNewProperty';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
          <div className="pages">
            <Routes>

              <Route
                path="/"
                element={<Home/>}
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
                path="newProp"
                element={<AddNewProperty/>}
              />

            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
};

export default App;