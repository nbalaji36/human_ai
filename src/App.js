import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import WatermarkPage from "./pages/WatermarkPage";
import LabelPage from "./pages/LabelPage";
import ReportingPage from "./pages/ReportingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watermark" element={<WatermarkPage />} />
        <Route path="/label" element={<LabelPage />} />
        <Route path="/reporting" element={<ReportingPage />} />
      </Routes>
    </Router>
  );
}

export default App;