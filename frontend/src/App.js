/* code block 2 */
import { BrowserRouter} from 'react-router-dom';
import Layout from './pages/Layout';

function App () {
  return (
    <BrowserRouter>
      <div className="container">
        <Layout/>
      </div>
    </BrowserRouter>
  );
};

export default App;