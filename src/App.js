import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import MyRequests from "./pages/MyRequests";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-requests" element={<MyRequests />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
