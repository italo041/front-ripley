import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { Navbar } from "./components/Navbar";

import { Clients } from "./Pages/Clients";
import { Home } from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { Stadistics } from "./Pages/Stadistics";

toast.configure();
export const App = () => {
  return (
    <div className="min-vh-100 h-100">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/clients" element={<Clients />} />
        <Route exact path="/stadistics" element={<Stadistics />} />
      </Routes>
    </div>
  );
};
