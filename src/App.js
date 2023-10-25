import './css/App.css';

import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Homepage from './components/Homepage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Nav/>
      <Homepage/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
