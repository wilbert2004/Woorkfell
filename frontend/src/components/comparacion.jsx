import React from "react";
import Home from "./home";
import { BsReceipt } from "react-icons/bs";
import Checkboxutili from "./checkboxutili";
import Filtroresulta from "./filtroresulta";
import { Link, useNavigate } from "react-router-dom";

const Comparacion = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/infocompar");
  };
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
                  Comparacion
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="row justify-content-center col-md-10  text-muted h-100 d-inline-block">
          <p>
            Indicaciones: En este modulo podras comparar los resultados entre
            dos periodos de manera elegidos , podras mostrar las variables
            <br />
            -grupos o las preguntas o ambas cosas en elemento de visualizacion y
            filtrar
          </p>
        </div>
        {/* este primer div sirve para comprarar el filtro de nuestro modulo */}
        <div
          className="col-xs-12 border rouded text-center"
          style={{
            height: "150px",
          }}
        >
          <p className="h4 m-1">Selecciona tu periodo a comparar </p>
          <div className="dropdown ">
            <button
              type="button"
              className="btn  dropdown-toggle m-1  w-75"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Selecciona tu primer periodo
            </button>
            <ul className="dropdown-menu col-xs-12 text-center w-75">
              {["Periodo 1 Enero - Febrero", "Periodo 2 Marzo  - Mayo "].map(
                (item) => (
                  <li key={item}>
                    <button className="dropdown-item" type="button">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <br />
        {/* este div sirve para el segundo comparacion de nuestro modulo  */}
        <div
          className="col-xs-12 border rouded text-center"
          style={{
            height: "150px",
          }}
        >
          <p className="h4 m-1">Selecciona tu periodo a comparar </p>
          <div className="dropdown ">
            <button
              type="button"
              className="btn  dropdown-toggle m-1  w-75"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Selecciona tu segundo periodo a comparar
            </button>
            <ul className="dropdown-menu col-xs-12 text-center w-75">
              {["Periodo 1 Enero - Febrero", "Periodo 2 Marzo  - Mayo "].map(
                (item) => (
                  <li key={item}>
                    <button className="dropdown-item" type="button">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <br />
        {/* tercer div para visualizar lo que queremos mostrar */}
        <div
          className="col-xs12 border rounded text-center"
          style={{
            height: "150px",
          }}
        >
          <p className="h4 m-1">Elemento de visualizacion </p>
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle m-1  w-75"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Comparar todo
            </button>
            <ul className="dropdown-menu col-xs-12 text-center w-75">
              {["Resultados por grupo", "Resultados por pregunta"].map(
                (item) => (
                  <li key={item}>
                    <button className="dropdown-item" type="button">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        {/* componente reutilizables de filtros  */}
        <div>
          {/* contenedor de filtro de datos */}
          <Filtroresulta />
        </div>
        {/* menu desplazamiento de mostrar desglose  con dimensiones en grafica  */}
        <div>
          {/* metemos el componente del checbox utilizable  */}
          <Checkboxutili />
        </div>
        {/* boton para realizar la comparacion */}
        <div className="col-xs-12 text-center mt-5">
          <button
            type="button"
            className="btn btn-primary w-25"
            onClick={handleNavigate}
          >
            Realizar Comparación
          </button>
        </div>
      </div>
    </Home>
  );
};

export default Comparacion;
