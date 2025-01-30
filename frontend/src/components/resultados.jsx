import React, { useState } from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

import {
  BsCalendar2WeekFill,
  BsCalendar2Date,
  BsReceipt,
  BsQuestionDiamond,
  BsBarChart,
  BsGear,
} from "react-icons/bs";
const Resultados = () => {
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
          {/* elemento para ver periodos disponibles  */}
          <div
            className="container border mt-3 mx-auto m-2"
            style={{
              width: "90%",
              maxWidth: "800px", // Limitar el ancho máximo
              height: "auto",
              borderRadius: "10px",
            }}
          >
            <h5
              className="text-center mt-3"
              style={{
                opacity: 0.5,
                fontSize: "1.2rem", // Usar unidades relativas para tamaños de texto
              }}
            >
              Periodos
            </h5>
            <div
              className="border d-flex justify-content-between align-items-center p-3"
              style={{
                height: "50%", // Adaptable al contenido
                flexWrap: "wrap", // Permite que los elementos se acomoden en pantallas pequeñas
              }}
            >
              <span className="d-flex justify-content-center align-items-center">
                <BsCalendar2WeekFill
                  style={{
                    width: "2rem", // Usar unidades relativas
                    height: "2rem",
                    opacity: 0.5,
                  }}
                />
              </span>
              <span
                className="text-center"
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#000",
                  flex: "1", // Permite que ocupe más espacio
                  margin: "0 10px",
                }}
              >
                Periodo 1 Enero - Febrero{" "}
              </span>
              <span className="dropdown">
                <button
                  type="button"
                  className="btn btn-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                ></button>
              </span>
            </div>
          </div>
          {/*  elemento para ver elemento a visualizar */}
          <div
            className="container border mt-3 mx-auto m-4"
            style={{
              width: "90%",
              maxWidth: "800px", // Limitar el ancho máximo
              height: "auto",
              borderRadius: "10px",
            }}
          >
            <h5
              className="text-center mt-3"
              style={{
                opacity: 0.5,
                fontSize: "1.2rem", // Usar unidades relativas para tamaños de texto
              }}
            >
              Elementos de visualizacion
            </h5>
            <div
              className="border d-flex justify-content-between align-items-center p-3"
              style={{
                height: "50%", // Adaptable al contenido
                flexWrap: "wrap", // Permite que los elementos se acomoden en pantallas pequeñas
              }}
            >
              <span className="d-flex justify-content-center align-items-center">
                <BsCalendar2WeekFill
                  style={{
                    width: "2rem", // Usar unidades relativas
                    height: "2rem",
                    opacity: 0.5,
                  }}
                />
              </span>
              <span
                className="text-center"
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#000",
                  flex: "1", // Permite que ocupe más espacio
                  margin: "0 10px",
                }}
              >
                Mostrar todo
              </span>
              <span className="dropdown">
                <button
                  type="button"
                  className="btn btn-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                ></button>
              </span>
            </div>
          </div>

          <div
            className="container border  "
            style={{
              width: "90%",
              maxWidth: "800px", // Limitar el ancho máximo
              height: "auto",
            }}
          >
            <div className="col-xs-12 text-center">
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
                    <select name="" id="" className="w-75 p-1 rounded">
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
                    <select name="" id="" className="w-75 p-1 rounded">
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
                    <select name="" id="" className="w-75 p-1 rounded">
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
                    <select name="" id="" className="w-75 p-1 rounded">
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
                    <select name="" id="" className="w-75 p-1 rounded">
                      <option value="">Todos</option>
                      <option value="">Centro de desarrollo</option>
                      <option value="">Centro de soporte</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <h6>Filtrar rango antiguedad</h6>
                  <div className="form-check">
                    <select name="" id="" className="w-75 p-1 rounded">
                      <option value="">Todos</option>
                      <option value="">1 a 5 años</option>
                      <option value="">6 a 10 años</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Resultados;
