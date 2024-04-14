import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/landing-page/LandingPage";
import HomeClientes from "./components/landing-page/ClientesLandingPage";
import HomeEmpleados from "./components/landing-page/EmpleadosLandingPage";
        //TODO Add more routes here

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeClientes" element={<HomeClientes />} />
        <Route path="/HomeEmpleados" element={<HomeEmpleados />} />
        {/*TODO Add more routes here*/}
      </Routes>
    </Router>
  );
}
export default App;

