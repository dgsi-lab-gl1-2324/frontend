import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/landing-page/LandingPage";
import HomeClientes from "./components/landing-page/ClientesLandingPage";
import HomeEmpleados from "./components/landing-page/EmpleadosLandingPage";
import Contratar from "./components/landing-page/Contratar";
import Contrataciones from "./components/landing-page/Contrataciones";
import GestionContratas from "./components/landing-page/GestionContratas";
        //TODO Add more routes here

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeClientes" element={<HomeClientes />} />
        <Route path="/HomeEmpleados" element={<HomeEmpleados />} />
        <Route path="/HomeClientes/Contratar" element={<Contratar />} />
        <Route path="/HomeClientes/Contrataciones" element={<Contrataciones />} />
        <Route path="/HomeEmpleados/GestionContratas" element={<GestionContratas />} />
      </Routes>
    </Router>
  );
}
export default App;

