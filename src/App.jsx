import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:projectName" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
