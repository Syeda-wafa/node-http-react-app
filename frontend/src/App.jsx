import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/HomePage/Home";
import ReadData from "./pages/ReadDataPage/ReadData";
import SaveData from "./pages/SaveDataPage/SaveData";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/read" element={<ReadData />} />

        <Route path="/save" element={<SaveData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
