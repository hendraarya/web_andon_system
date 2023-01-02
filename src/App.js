import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Import Pages
import LoginPage from './pages/LoginPage';

//Import List Components
import AndonProduction from './components/AndonProduction';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <LoginPage/>
        <AndonProduction/>
        {/* <Footer/> */}
    </div>
  );
}
export default App;
