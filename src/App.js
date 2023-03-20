import "./App.css";
import React, { Component, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import ProtectedRoutes from "../src/utils/protectedRoutes";

//Import Pages
// import LoginPage from "../src/domain-andonsys/layout";

//Import List Components
import AndonProduction from "../src/domain-andonsys/components-andon/AndonProduction";
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AndonProduction />} />
      </Routes>
    </div>
  );
};
export default App;
