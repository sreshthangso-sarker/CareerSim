import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Simulation from "./pages/Simulation";
import Result from "./pages/Result";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simulation" element={<Simulation />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}
