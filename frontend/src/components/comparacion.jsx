import React from "react";
import Home from "./home";
import { BsReceipt } from "react-icons/bs";

import { Link } from "react-router-dom";

const Comparacion = () => {
  return (
    <Home>
      <div className="container">
        <div className="navbar">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/Comparacion" className="link-secondary">
                  <BsReceipt style={{ marginRight: "10px" }} />
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/Comparacion" className="link-secondary">
                  Resultados
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="row justify-content-center col-md-10  text-muted">
          <p>
            Indicaciones: En este modulo podras comparar los resultados entre
            dos periodos de manera elegidos , podras mostrar las variables
            <br />
            -grupos o las preguntas o ambas cosas en elemento de visualizacion y
            filtrar
          </p>
        </div>
      </div>
    </Home>
  );
};

export default Comparacion;
