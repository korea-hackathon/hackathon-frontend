import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestPage from "../pages/QuestPage";
import PresentCondition from "../pages/PresentCondition";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quest" element={<QuestPage />} />
        <Route path="/Condition" element={<PresentCondition />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
