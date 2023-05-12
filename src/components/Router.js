import React from "react";
import { Route, Routes } from "react-router-dom";
import AppNavbar from "./navbar/AppNavbar";
import ManhattanPopulationExplorer from "./pages/ManhattanPopulationExplorer";
import StatsLineChart from "./chart/StatsLineChart";
import HorizontalBarChartData from "./chart/HorizontalBarChartData";
import AboutPage from "./pages/AboutPage";
import ThreeDChart from "./chart/ThreeDChart";
import HorizontalBarChartDataNew from "./HorizontalBarChartDataNew";

const Router = () => {
  return (
    <div>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<ManhattanPopulationExplorer />} />
        <Route path="/home" element={<ManhattanPopulationExplorer />} />
        <Route path="/visual" element={<ThreeDChart />} />
        <Route path="/stats" element={<StatsLineChart />} />
        {/* <Route path="/data" element={<HorizontalBarChartData />} /> */}
        <Route path="/data" element={<HorizontalBarChartDataNew />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default Router;
