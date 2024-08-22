import React from "react";
import { Header } from "./Ui/Header";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./Ui/Start";
import Pitchmark from "./Ui/Pitchmark";
import Variable from "./Ui/Variable";
function App() {
  return (
    <div style={{backgroundColor: "#b6def2", height: "100vh"}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Pitchmark" element={<Pitchmark />} />
          <Route path="/Variable" element={<Variable />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
