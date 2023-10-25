import './css/App.css';

// import { useRoutes } from 'react-router-dom';
// import router from './Router';

// import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav'
import Footer from './components/Footer'
import Homepage from './components/Homepage';

function App() {

  return (
    <div className='App'>
      <Nav/>
      <Homepage/>
      <Footer/>
      {/* <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/bro' element={<Footer/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
