import React from "react";
import Home from "./home";
import { BsReceipt } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsCalendar2Date } from "react-icons/bs";

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

          <div
            className="container border mt-4 p-3 d-flex flex-column align-items-center justify-content-around rounded"
            style={{
              paddingBottom: "0.9em",
              height: "auto",
            }}
          >
            <div className="col-xs-12 text-center container">
              <h4
                className="text text-center"
                style={{
                  fontSize: "1.3rem", // Usar unidades relativas para tamaños de texto
                  opacity: 0.5,
                }}
              >
                Filtrar opciones por dimensiones
              </h4>
              <div className="row ">
                {/* filtros por genero */}
                <div className="col-6  ">
                  <h6 className="">Filtrar genero</h6>
                  <div className="form-check">
                    <select
                      name=""
                      id=""
                      className="w-75 p-1 rounded text-center"
                    >
                      <option value="">Todos</option>
                      <option value="">Hombres</option>
                      <option value="">Mujeres</option>
                    </select>
                  </div>
                </div>
                {/* filtros por edad  */}
                <div className="col-6">
                  <h6>Filtrar edad</h6>
                  <div className="form-check">
                    <select
                      name=""
                      id=""
                      className="w-75 p-1 rounded text-center"
                    >
                      <option value="">Todos</option>
                      <option value="">18-24 años</option>
                      <option value="">25-34 años</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Filtros por departamentos */}
                <div className="col-6">
                  <h6>Filtrar departamento</h6>
                  <div className="form-check">
                    <select
                      name=""
                      id=""
                      className="w-75 p-1 rounded text-center"
                    >
                      <option value="">Todos</option>
                      <option value="">Aguascalientes</option>
                      <option value="">Baja California</option>
                    </select>
                  </div>
                </div>
                {/* filtros por puestos */}
                <div className="col-6">
                  <h6>Filtrar Puesto </h6>
                  <div className="form-check">
                    <select
                      name=""
                      id=""
                      className="w-75 p-1 rounded text-center"
                    >
                      <option value="">Todos</option>
                      <option value="">Desarrollador back-end</option>
                      <option value="">Desarrollador front-end</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Filtrar centro de trabajo  */}
                <div className="col-6">
                  <h6>Filtrar centro de trabajo</h6>
                  <div className="form-check">
                    <select
                      name=""
                      id=""
                      className="w-75 p-1 rounded text-center"
                    >
                      <option value="">Todos</option>
                      <option value="">Centro de desarrollo</option>
                      <option value="">Centro de soporte</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <h6>Filtrar rango antiguedad</h6>
                  <div className="form-check ">
                    <select
                      name=""
                      id=""
                      className="w-75 p-1 rounded text-center"
                    >
                      <option value="">Todos</option>
                      <option value="">1 a 5 años</option>
                      <option value="">6 a 10 años</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* menu desplazamiento de mostrar desglose  con dimensiones en grafica  */}
          <div
            className="container border mt-4 p-3 d-flex flex-column align-items-center justify-content-around rounded text-center"
            style={{
              paddingBottom: "0.9em",
            }}
          >
            <h5 className="opacity-50 p-2">
              Mostrar Desglose con Dimension de grafica{" "}
            </h5>

            <div className="container">
              <div className="row">
                {/* contenedor de generon */}
                <div className="col ">
                  <label
                    className="border p-2  rounded w-50"
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "#333",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="cbox1"
                      value="first_checkbox"
                      className="w-25"
                    />{" "}
                    Genero
                  </label>
                </div>
                <div className="col">
                  <label
                    className="border p-2  rounded w-50"
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "#333",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="cbox2"
                      value="second_checkbox"
                      className="w-25"
                    />{" "}
                    Edad
                  </label>
                </div>
                <div className="col">
                  <label
                    className="border p-2  rounded w-50"
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "#333",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="cbox3"
                      value="third_checkbox"
                      className="w-25"
                    />{" "}
                    Departamento
                  </label>
                </div>
              </div>
              <div className="row p-3">
                <div className="col">
                  <label
                    className="border p-2  rounded w-50"
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "#333",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="cbox4"
                      value="fourth_checkbox"
                      className="w-25"
                    />{" "}
                    Puesto
                  </label>
                </div>
                <div className="col">
                  <label
                    className="border p-2  rounded w-75"
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "#333",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="cbox5"
                      value="fifth_checkbox"
                      className=""
                    />{" "}
                    Centro de trabajo
                  </label>
                </div>
                <div className="col">
                  <label
                    className="border p-2  rounded w-75"
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "#333",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="cbox5"
                      value="fifth_checkbox"
                      className=""
                    />{" "}
                    Antiguedad
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container  mt-4 p-3 d-flex flex-column align-items-center justify-content-around rounded text-center"
          style={{
            paddingBottom: "0.9em",
          }}
        >
          <div className="row p-5 w-100">
            <div className="col"></div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary rouded text-center"
                onClick={handleNavigate}
              >
                Procesar reporte
              </button>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Nivelsatisfaccion