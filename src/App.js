import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Убрали BrowserRouter
import Header from './components/Header/header';
import Catalog from './components/Catalog/catalog';
import Registration from './components/Registration/registration';
import Footer from './components/Footer/footer';
import Login from './components/Login/login';
import ContactInf from './components/ContactInformation/contactInformation';
import Cart from './components/Cart/cart';
import GameDetails from './components/GameDetails/GameDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ContactInf tel="+79236115239" mail="hh@gmail.com"></ContactInf>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog /> } />
        <Route path="/game/:id" element={<GameDetails />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;