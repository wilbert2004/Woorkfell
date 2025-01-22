import React, { useEffect, useState } from "react";
import axios from "axios";
import Periodo from "./components/periodo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import Home from "./components/home";
import Dimensiones from "./components/dimensiones";
import Preguntas from "./components/preguntas";
import Escalas from "./components/escala";
import Resultados from "./components/resultados";
import Nivelsatisfaccion from "./components/nivelsatisfaccion";

//importacion de react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        setData(response.data);
        console.log("base de datos corriendo " + response.data);
      })
      .catch((error) => {
        console.error("Hubo un error:", error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/periodo" element={<Periodo />}></Route>
        <Route path="/dimensiones" element={<Dimensiones />}></Route>
        <Route path="/preguntas" element={<Preguntas />}></Route>
        <Route path="/escalas" element={<Escalas />}></Route>
        <Route path="/resultados" element={<Resultados />}></Route>
        <Route
          path="/nivelsatisfaccion"
          element={<Nivelsatisfaccion />}
        ></Route>
        {/* Agregar rutas para las otras secciones */}
      </Routes>
    </Router>
  );
}

export default App;
