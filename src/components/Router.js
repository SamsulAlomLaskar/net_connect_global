import React from "react";
import { Route, Routes } from "react-router-dom";
import AppNavbar from "./navbar/AppNavbar";
import ManhattanPopulationExplorer from "./pages/ManhattanPopulationExplorer";

const Router = () => {
  return (
    <div>
      <AppNavbar />
      <Routes>
        <Route path="/story" element={<ManhattanPopulationExplorer />} />
      </Routes>
    </div>
  );
};

export default Router;
