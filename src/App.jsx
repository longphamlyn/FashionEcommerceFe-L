import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, Route
import "./App.css";

import PageHome from "./pages/home/PageHome";
import LoginPage from "./pages/login/LoginPage";


function App() {
  return (
    <Router>
      <Routes> {/* Sử dụng Routes để bao quanh các Route */}
        <Route path="/" element={<PageHome />} /> {/* Sử dụng 'element' thay vì 'index' */}
        <Route path="login_register" element={<LoginPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
