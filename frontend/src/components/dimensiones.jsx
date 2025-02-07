import React from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
const dimensiones = () => {
  return (
    <Home>
      <div className="container-fluid">
        <div className="container">
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

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 text-center">
                  <p className="text-muted">
                    Indicaciones: En este módulo podrás consultar los resultados de los periodos evaluados. En todo los casos, los resultados mostrados son promedios aritméticos. Podrás seleccionar el filtro de acuerdo a tus necesidades. Primero deberás seleccionar el periodo y después podrás seleccionar los criterios que deseas filtrar.
                  </p>
                </div>
              </div>
            </div>


            <div
              className="container border text-center w-100 d-flex flex-column justify-content-evenly align-items-center"
            >
              <div bg="secondary" className="col-md-10">
                <p className="h2 text-muted">
                  Dimensiones
                </p>
              </div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dimensiones o Rangos
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
              <div className="col-md-10">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Agregar Dimensiones"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Agregar
                  </button>
                </div>
              </div>




            </div>


          </div>
        </div>
      </div>

    </Home >
  );
};

export default dimensiones;
