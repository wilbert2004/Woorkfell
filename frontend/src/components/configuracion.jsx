import React from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { RiUserSettingsLine } from "react-icons/ri";
const Configuracion = () => {
  return (
    <Home>
      <div className="container">
        <div className="navbar">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/configuracion" className="link-secondary">
                  <RiUserSettingsLine style={{ marginRight: "3px" }} />
                </Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ marginTop: "2px" }}
              >
                <Link to="/configuracion" className="link-secondary">
                  Configuracion
                </Link>
              </li>
            </ol>
          </nav>
        </div>

        <div
          className="container border text-center w-100 d-flex flex-column justify-content-evenly align-items-center"
        >
          <div>
            <p className="h2 text-muted">
              Selecciona el periodo
            </p>
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Rango de interpretacion de grupos o variables
            </button>
            <ul className="dropdown-menu">
              {["Soporte IT", "RRHH", "Contabilidad", "Mantenimiento", "Gerencia"].map((dept) => (
                <li key={dept}>
                  <button className="dropdown-item" type="button">
                    {dept}
                  </button>
                </li>
              ))}
            </ul>
          </div>





        </div>


      </div>
    </Home>
  );
};

export default Configuracion;
