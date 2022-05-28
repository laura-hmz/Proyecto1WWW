import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

//components: 
import BecasList from './components/Becas/BecasList';
import Navbar from './components/Navbar/Navbar';
import BecasForm from './components/Becas/BecasForm';
import BecaFormDetalles from './components/Becas/BecaFormDetalles';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';




//en este primer div, acomodo los margenes de todo el tablero
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <div className='container my-4'>
      <Routes>
        <Route path="/" element={<BecasList />} />
        <Route path="/becasForm" element={<BecasForm />} />
        <Route path="/updateBeca/:id" element={<BecasForm />} />
        <Route path="/detallesBecas/:id" element={<BecaFormDetalles />} />
        <Route path="/Home/" element={<BecasListPopulares />} />

      </Routes>
    </div>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
