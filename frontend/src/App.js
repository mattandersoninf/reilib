import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {

  const title = 'REILib';

  const [content, setContent] = useState('home');

  const handleButtonClick = (page) => {
    setContent(page);
  };

  let pageContent;

  switch (content) {
    case 'home':
      pageContent = (
        <>
          <h1>REI Library</h1>
          <p>This is some content on my website.</p>
        </>
      );
      break;
    case 'about':
      pageContent = (
        <>
          <h1>About</h1>
          <p>The mssion of this website is to allow investors to track investment opportuinites and provide insight into the parameters that make good optimal deals.</p>
        </>
      );
      break;
    case 'signin':
      pageContent = (
        <>
          <h1>Sign In</h1>
          <p>Please sign in to access the members-only area of my website.</p>
          <form>
            <label>Email:</label>
            <input type="email" required /><br />
            <label>Password:</label>
            <input type="password" required /><br />
            <button type="submit">Sign In</button>
          </form>
        </>
      );
      break;
    case 'personal':
      pageContent = (
        <>
          <h1>personal</h1>
          <p>Check out my latest personal posts!</p>
        </>
      );
      break;
    default:
      pageContent = (
        <>
          <h1>Welcome to my website!</h1>
          <p>This is some content on my website.</p>
        </>
      );
      break;
  }

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <button style={styles.button} onClick={() => handleButtonClick('home')}>Home</button>
        <button style={styles.button} onClick={() => handleButtonClick('about')}>About</button>
        <button style={styles.button} onClick={() => handleButtonClick('signin')}>Sign In</button>
        <button style={styles.button} onClick={() => handleButtonClick('personal')}>personal</button>
      </div>
      <div style={styles.main}>
        {pageContent}
      </div>
    </div>
  );
}

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
