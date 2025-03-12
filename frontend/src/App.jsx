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
import Comparacion from "./components/comparacion";
import Listapuestos from "./components/listapuestos";
import Planaccion from "./components/planaccion";
import InfoResultado from "./components/inforesultado";
import Configuracion from "./components/configuracion";
import InfoNivelSatis from "./components/infonivelsatis";
import Formulario from "./components/Formulario";
//importacion de react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Consumo from "./components/consumo";
import Ajustes from "./components/ajustes";
import Perfil from "./components/perfil";
import Tableinterpretacion from "./components/tableinterpretacion";
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
        <Route path="dimensiones" element={<Dimensiones />}></Route>
        <Route path="preguntas" element={<Preguntas />}></Route>
        <Route path="escalas" element={<Escalas />}></Route>
        <Route path="resultados" element={<Resultados />}></Route>
        <Route path="nivelsatisfaccion" element={<Nivelsatisfaccion />}></Route>
        <Route path="comparacion" element={<Comparacion />}></Route>
        <Route path="listapuestos" element={<Listapuestos />}></Route>
        <Route path="planaccion" element={<Planaccion />}></Route>
        <Route path="inforesultado" element={<InfoResultado />} />
        <Route path="configuracion" element={<Configuracion />}></Route>
        <Route path="infonivelsatis" element={<InfoNivelSatis />} />
        {/* agregar la ruta de formulario */}
        <Route path="Formulario" element={<Formulario />} />
        {/* ruta de consumos */}
        <Route path="Consumo" element={<Consumo />}></Route>

        {/* Ruta para los ajustes */}
        <Route path="Ajustes" element={<Ajustes />}></Route>
        {/* Ruta para mi perfil  */}
        <Route path="Perfil" element={<Perfil />}></Route>

        {/* Agregar rutas para tabla de interpretaciones */}
        <Route path="tableinterpretacion" element={<Tableinterpretacion />} />
      </Routes>
    </Router>
  );
}

export default App;
