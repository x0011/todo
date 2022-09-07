import { ReactElement } from "react";
import "./styles.css";
import { Navbar } from "./components/navbar/navbar";
import { TodoPage } from "./pages/TodoPage";
import { AboutPage } from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";

export default function App(): ReactElement {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  );
}
