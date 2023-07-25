/* code block 2 */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/Signup';
import Personal from './pages/Personal';
import Navbar from './components/Navbar';
import Layout from './pages/Layout';

function App () {
  return (
    <BrowserRouter>
      <div className="container">
        <Layout>
          <Link to="/">
              <h1>REILib</h1>
            </Link>
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
          </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;