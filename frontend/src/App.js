/* code block 2 */
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import Layout from './pages/Layout';
import Navbar from './components/Navbar';
import Home from './pages/Home'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar></Navbar>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;