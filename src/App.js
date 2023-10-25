import './css/App.css';

// import { useRoutes } from 'react-router-dom';
// import router from './Router';

import Nav from './components/Nav'
import Footer from './components/Footer'
import Homepage from './components/Homepage';

function App() {

  return (
    <div className='App'>
      <Nav/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
