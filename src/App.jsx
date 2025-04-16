import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="container mx-auto w-[80vw]">
      <BrowserRouter>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/home" element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="/products" element={<Card theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
