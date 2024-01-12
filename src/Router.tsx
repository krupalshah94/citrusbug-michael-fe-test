// src/Router.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AvailableDocument from "./Components/Document/AvailableDocument";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={AvailableDocument} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
