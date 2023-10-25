import './css/App.css';

import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Homepage from './components/Homepage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Homepage/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
