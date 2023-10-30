import './css/App.css';

// import { useRoutes } from 'react-router-dom';
// import router from './Router';

// import { Routes, Route } from 'react-router-dom';

// import Nav from './components/Nav'
import Footer from './components/Footer'
// import Homepage from './components/Homepage';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Footer/>
      {/* <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/bro' element={<Footer/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
