import React, { useState } from "react";

import NavBar from "./components/NavBar";
import MockupGen from "./pages/MockupGen";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/generate" element={<MockupGen/>}/>

      </Routes>
      
      
    </div>
  );
};

export default App;
