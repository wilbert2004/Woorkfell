import React, { useState } from "react";
import Home from "./home";
import { Link, useNavigate } from "react-router-dom";
import listapuestos from "./listapuestos";
import Checkboxutili from "./checkboxutili";
import { BsCalendar2Date, BsReceipt } from "react-icons/bs";
import Filtroresulta from "./filtroresulta";
const Resultados = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/inforesultado");
  };
  return (
    <Home>
      <div className="container">
        <div className="navbar">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/Resultados" className="link-secondary">
                  <BsReceipt style={{ marginRight: "10px" }} />
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/Resultados" className="link-secondary">
                  Resultados
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="row ">
          <div
            className="col-md-10 "
            style={{
              //agregar este color a las letras ACAAAA
              color: "#ACAAAA",
            }}
          >
            <p className="">
              Indicaciones: En este modulo podras consultar los resultados de
              los periodos evaluados . En todo los casos los resultados
              mostrados son promedios aritmeticos , podras seleccionar el filtro
              de acuerdo a sus necesidades. primero deberas de seleccionar el
              periodo y despues podras seleccionar los criterios que deseas
              filtrar{" "}
            </p>
          </div>
          <div className="col-md-2 ">
            <button className="btn btn-primary  m-1">Exportar a word </button>
            <button className="btn btn-primary m-1">Exportar a excel</button>
            <button className="btn btn-primary m-1">Exportar a PDF</button>
          </div>
          {/* contenedor del menu principal de dos desplamientos   */}
          <div
            className="container border mt-4 p-3 d-flex flex-column align-items-center justify-content-around rounded text-center"
            style={{
              paddingBottom: "0.9em",
            }}
          >
            {/* contenedor de periodo */}
            <div className="border container p-3 rounded">
              <h5 className="opacity-50"> Periodos</h5>
              <div className="dropdown container">
                <button
                  className="btn btn-transparent dropdown-toggle  w-75 "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                >
                  <BsCalendar2Date style={{ marginRight: "10px" }} />
                  Periodos disponibles
                </button>
                <ul
                  className="dropdown-menu  text-center w-75"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Periodo 1 Enero - Febrero
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Periodo 1 Marzo - Abril
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br />

            {/*  contenedore de datos a visualiazar  */}
            <div className="border container p-3 rounded">
              <h5 className="opacity-50"> Elementos de visualizacion </h5>
              <div className="dropdown container">
                <button
                  className="btn btn-transparent dropdown-toggle  w-75 "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                >
                  <BsCalendar2Date style={{ marginRight: "10px" }} />
                  Mostrar Todo
                </button>
                <ul
                  className="dropdown-menu  text-center w-75"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Departamentos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dimensiones
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            {/* contenedor de filtro de datos */}
            <Filtroresulta />
          </div>
          {/* menu desplazamiento de mostrar desglose  con dimensiones en grafica  */}
          <div>
            {/* metemos el componente del checbox utilizable  */}
            <Checkboxutili />
          </div>
        </div>
        {/* boton para realizar la comparacion */}
        <div className="col-xs-12 text-center mt-5">
          <button
            type="button"
            className="btn btn-primary w-25"
            onClick={handleNavigate}
          >
            Procesar reporte
          </button>
        </div>
        <listapuestos />
      </div>
    </Home>
  );
};

export default Resultados;
