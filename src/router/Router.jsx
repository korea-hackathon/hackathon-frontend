import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import Quest from "../pages/Quest";
import AlramPage from "../pages/alram";
import TodoPage from "../pages/todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Quest />} />
        <Route path="/" element={<Login />} />
        <Route path="/alram" element={<AlramPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
