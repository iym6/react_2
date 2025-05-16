import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Catalog from "./components/Catalog/catalog";
import Registration from "./components/Registration/registration";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";
import Cart from "./components/Cart/cart";
import PersonalAccount from "./components/PersonalAccount/personalAccount/personalData";
import GameDetails from "./components/GameDetails/GameDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/login" element={<PersonalAccount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
