import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import PresentCondition from "../pages/PresentCondition";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Condition' element={<PresentCondition />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
