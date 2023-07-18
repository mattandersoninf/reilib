/* code block 2 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/Signup';
import Personal from './pages/Personal';
import Navbar from './components/Navbar';

function App () {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <h1>REILib</h1>
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
      </div>
    </BrowserRouter>
  );
};

export default App;