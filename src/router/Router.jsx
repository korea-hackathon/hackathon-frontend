import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import PresentCondition from "../pages/PresentCondition";
import { Login } from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Condition' element={<PresentCondition />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
