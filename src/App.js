import "./App.css";
import React, { Component, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./domain-andonsys/components-andon/layout/header";
import Area60t from "../src/domain-andonsys/components-andon/60T2RT";
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
      <Header />
      <Routes>
        <Route path="/" element={<AndonProduction />} />
        <Route path="/60T2RT" element={<Area60t />} />
      </Routes>
    </div>
  );
};
export default App;
