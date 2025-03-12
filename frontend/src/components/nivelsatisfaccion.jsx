import React from "react";
import Home from "./home";
import { BsReceipt } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsCalendar2Date } from "react-icons/bs";
import Checkboxutili from "./checkboxutili";
import Filtroresulta from "./filtroresulta";

const Nivelsatisfaccion = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/infonivelsatis");
  };
  return (
    <Home>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="Resultado">
                <BsReceipt style={{ marginRight: "10px" }} />
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/Nivelsatisfaccion">Nivel Satisfaccion</Link>
            </li>
          </ol>
        </nav>
        <div className="row ">
          <div
            className="col-md-10 "
            style={{
              //agregar este color a las letras ACAAAA
              color: "#ACAAAA",
            }}
          >
            <p className="">
              Indicacionces: En este modulo podras consultar el nivel de
              satisfaccion en general de todo y de igual forma podras consultar
              por grupo o variables de las encuetas dependiendo si es en general
              de todo
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

export default Nivelsatisfaccion;
