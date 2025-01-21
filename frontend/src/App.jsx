import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import Home from "./components/home";

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
        {/* Agregar rutas para las otras secciones */}
      </Routes>
    </Router>
  );
}

export default App;
