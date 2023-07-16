/* code block 2 */
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Personal from './pages/Personal';
import Navbar from './components/Navbar';

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
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <div className="sidebar">
          <button className="button" onClick={() => handleButtonClick('home')}>Home</button>
          <button className="button" onClick={() => handleButtonClick('about')}>About</button>
          <button className="button" onClick={() => handleButtonClick('signin')}>Sign In</button>
          <button className="button" onClick={() => handleButtonClick('personal')}>Personal</button>
        </div>
        <h1>REILib</h1>
        <div className="main">
          {pageContent}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;