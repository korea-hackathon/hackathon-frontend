import { BrowserRouter, Routes, Route } from "react-router-dom";
import PresentCondition from "../pages/PresentCondition";
import { Login } from "../pages/Login";
import Quest from "../pages/Quest";
import InnerInfo from "../pages/InnerInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Quest />} />
        <Route path="/" element={<Login />} />
        <Route path="/Condition" element={<PresentCondition />} />
        <Route path="/InnerInfo" element={<InnerInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
