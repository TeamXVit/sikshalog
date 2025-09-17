import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import StudentProfile from './components/StudentProfile';
import Attendance from './components/Attendance';
import AttendanceHistory from './components/AttendanceHistory';
import Reports from './components/Reports';
import Teachers from './components/Teachers';
import RegisterStudent from "./components/RegisterStudent";
import DetectStudent from "./components/DetectStudent";
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/students/:id" element={<StudentProfile />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/attendance/history" element={<AttendanceHistory />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/register" element={<RegisterStudent />} />
              <Route path="/detect" element={<DetectStudent />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
