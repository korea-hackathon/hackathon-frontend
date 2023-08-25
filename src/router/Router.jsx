import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestPage from "../pages/QuestPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/quest' element={<QuestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
