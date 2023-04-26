import React from "react";
import { Route, Routes } from "react-router-dom";
import AppNavbar from "./navbar/AppNavbar";
import ManhattanPopulationExplorer from "./pages/ManhattanPopulationExplorer";
import StatsLineChart from "./chart/StatsLineChart";
import HorizontalBarChartData from "./chart/HorizontalBarChartData";
import AboutPage from "./pages/AboutPage";

const Router = () => {
  return (
    <div>
      <AppNavbar />
      <Routes>
        <Route path="/home" element={<ManhattanPopulationExplorer />} />
        <Route path="/story" element={<ManhattanPopulationExplorer />} />
        <Route path="/stats" element={<StatsLineChart />} />
        <Route path="/data" element={<HorizontalBarChartData />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default Router;
