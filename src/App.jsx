
import "./App.css";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/menuPage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

  return (
  <Router>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
