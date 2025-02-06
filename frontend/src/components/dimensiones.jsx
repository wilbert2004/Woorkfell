import React from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
const dimensiones = () => {
  return (
    <Home>
      <div className="container-fluid">
        <div className="navbar">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/configuracion" className="link-secondary">
                  <CiUser style={{ marginRight: "3px" }} />
                </Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ marginTop: "2px" }}
              >
                {/*Esto me ridirige a un lugar */}
                <Link to="/dimensiones" className="link-secondary">
                  Dimensiones
                </Link>
              </li>
            </ol>
          </nav>
        </div>

        <div>
          <p className="text-muted">Indicacionces: En este modulo podra agregar , editar  y eliminar las dimensiones para su encuestas.Selecciona unicamente lo que para ti es importante segmentar, por ejemplo genero, edad, departamentom etc. Si seleccionas una segmentacion como activa, esta aparecera al inicio de la encuesta para cada encuestado , si no deseas seleccionaria solamente indicala como inactiva .Debes de seleccionar al menos una segmentacion activa</p>
        </div>


      </div>


    </Home >
  );
};

export default dimensiones;
