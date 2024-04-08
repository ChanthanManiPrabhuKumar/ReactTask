import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Slidebar.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Products from './Pages/Products.jsx';
import MasterData from './Pages/MasterData.jsx';
import WorkOrders from './Pages/WorkOrders.jsx';
import Guides from './Pages/Guides.jsx';
import Headers from './Pages/Header.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Headers/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Guides" element={<Guides />} />
          <Route path="/MasterData" element={<MasterData />} />
          <Route path="/WorkOrders" element={<WorkOrders />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

