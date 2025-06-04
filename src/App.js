import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Catalog from "./components/Catalog/catalog";
import Registration from "./components/Registration/registration";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";
import Cart from "./components/Cart/cart";
import { AuthProvider } from "./components/Login/AuthContext";
import Favorites from "./components/Favourites/Favourites";
import PersonalAccount from "./components/PersonalAccount/personalAccount/personalData";
import GameDetails from "./components/GameDetails/GameDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<PersonalAccount />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;
