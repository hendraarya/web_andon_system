import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

//Import Pages
import LoginPage from './pages/LoginPage';
import Headers from './components/Header';

//Start all page of Andon System
import Andon110t2rt from './pages/andon_system/Andon110t2rtPage';
import Andonlinesim from './pages/andon_system/AndonsimlinePage';
//End all page of Andon System

//Import List Components
import AndonProduction from './components/AndonProduction';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
      {/* <Headers/> */}
       {/* <LoginPage/> */}
      <Routes>
        <Route path="andonline110t2rt" element={<Andon110t2rt/>}/>
        <Route path="andonlinesim" element={<Andonlinesim/>}/>
      </Routes>
      {/* <Andonlinesim/> */}
        {/* <LoginPage/> */}
        {/* <AndonProduction/> */}
        {/* <Footer/> */}
    </div>
    </>
    
  );
}
export default App;
