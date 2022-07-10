import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Date from "./Date";
import Trash from "./Trash";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="date" element={<Date />} />
        <Route path="trash" element={<Trash />} />
      </Routes>
    </BrowserRouter>
  );
}
