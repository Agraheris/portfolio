import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Bienvenue from "../components/pages/Bienvenue";
import Spice from "../components/pages/Spice";
import Moodflix from "../components/pages/Moodflix";
import Adopte from "../components/pages/Adopte";
import Virtuart from "../components/pages/Virtuart";
import Dino from "../components/pages/Dino";
import Frontend from "../components/pages/Frontend";
import Backend from "../components/pages/Backend";
import Wild from "../components/pages/Wild";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Bienvenue />} />
          <Route path="/spice" element={<Spice />} />
          <Route path="/moodflix" element={<Moodflix />} />
          <Route path="/adopte" element={<Adopte />} />
          <Route path="/virtuart" element={<Virtuart />} />
          <Route path="/dino" element={<Dino />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/wild" element={<Wild />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
