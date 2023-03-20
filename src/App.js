import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

//Import Pages
import LoginPage from "../src/domain-andonsys/pages/LoginPage";

//Import List Components
import AndonProduction from "../src/domain-andonsys/components/AndonProduction";
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <LoginPage />
      <AndonProduction />
      {/* <Footer/> */}
    </div>
  );
};
export default App;
