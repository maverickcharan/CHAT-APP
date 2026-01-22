import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-container">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<LoginPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
    </Routes >
     </div>
  );
}

export default App;
