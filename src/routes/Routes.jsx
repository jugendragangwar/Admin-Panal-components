import { Routes, Route } from "react-router-dom";
import LineChart from "../pages/Charts/LineChart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LineChart />} />
    </Routes>
  );
};

export default AppRoutes;