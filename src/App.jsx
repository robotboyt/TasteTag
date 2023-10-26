import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import Temp from "./components/Temp/Temp";

function App() {
  return (
    <div className="main">
      <Navbar />
      <h1>Hello world</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </div>
  );
}

export default App;
