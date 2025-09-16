import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EnrollFace from "./EnrollFace";
import DetectFace from "./DetectFace";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/enroll">Enroll</Link> | <Link to="/detect">Detect</Link>
      </nav>
      <Routes>
        <Route path="/enroll" element={<EnrollFace />} />
        <Route path="/detect" element={<DetectFace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
