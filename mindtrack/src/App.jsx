import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Shared/Layout';
import Login from './pages/Auth/Login';
import StudentDashboard from './pages/Student/Dashboard';
import MentorDashboard from './pages/Mentor/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/mentor/dashboard" element={<MentorDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}