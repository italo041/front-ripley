import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Clients } from "./Pages/Clients";
import { Home } from "./Pages/Home";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export const App = () => {
  return (
    <div className="min-vh-100 h-100">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </div>
  );
};
