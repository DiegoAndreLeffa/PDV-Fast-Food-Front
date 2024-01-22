import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesMain;
