import { BrowserRouter, Routes, Route } from "react-router-dom";
import PresentCondition from "../pages/PresentCondition";
import { Login } from "../pages/Login";
import Quest from "../pages/Quest";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Main' element={<Quest />} />
        <Route path='/' element={<Login />} />
        <Route path='/Condition' element={<PresentCondition />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
