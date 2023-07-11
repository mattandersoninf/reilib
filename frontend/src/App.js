import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Personal from './pages/Personal';

/*
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
*/

const App = () => {
  const [content, setContent] = useState('home');

  const handleButtonClick = (page) => {
    setContent(page);
  };

  let pageContent;

  switch (content) {
    case 'home':
      pageContent = <Home />;
      break;
    case 'about':
      pageContent = <About />;
      break;
    case 'signin':
      pageContent = <SignIn />;
      break;
    case 'personal':
      pageContent = <Personal />;
      break;
    default:
      pageContent = <Home />;
      break;
  }

  return (
    <BrowserRouter>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <button style={styles.button} onClick={() => handleButtonClick('home')}>Home</button>
          <button style={styles.button} onClick={() => handleButtonClick('about')}>About</button>
          <button style={styles.button} onClick={() => handleButtonClick('signin')}>Sign In</button>
          <button style={styles.button} onClick={() => handleButtonClick('personal')}>Personal</button>
        </div>
        <div style={styles.main}>
          {pageContent}
        </div>
      </div>
    </BrowserRouter>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  sidebar: {
    backgroundColor: '#f5f5f5',
    width: '200px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    marginBottom: '10px',
    padding: '10px',
    border: 'none',
    backgroundColor: '#e0e0e0',
    color: '#333',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
  },
  main: {
    flex: 1,
    padding: '20px',
  },
};

export default App;
