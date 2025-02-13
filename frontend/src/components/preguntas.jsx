import React, { useState } from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { MdHelpOutline } from "react-icons/md";
import { IoFileTrayFullSharp, IoEllipsisVertical } from "react-icons/io5";

const Preguntas = () => {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState("Ver todos");

  const data = [
    { id: 1, name: "Trabajo en equipo" },
    { id: 2, name: "Ambiente laboral" },
    { id: 3, name: "Desarrollo personal" },
  ];

  // Filtrado por búsqueda o categoría
  const filteredData = data.filter(
    (item) =>
      (filtro === "Ver todos" || item.name === filtro) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Home>
      <div className="container">
        {/* Navegación */}
        <div className="navbar">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dimensiones" className="link-secondary">
                  <MdHelpOutline style={{ marginRight: "3px" }} />
                </Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ marginTop: "2px" }}
              >
                <Link to="/preguntas" className="link-secondary">
                  Preguntas
                </Link>
              </li>
            </ol>
          </nav>
        </div>

        {/* Instrucciones */}
        <div className="container text-center mb-3">
          <p className="text-muted">
            Indicaciones: En este módulo podrás agregar, editar y eliminar
            preguntas de tu encuesta. Además, tendrás la flexibilidad de
            personalizarla según tus necesidades.
          </p>
        </div>

        {/* Botones de Exportar */}
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-primary me-2">Exportar a Excel</button>
        </div>

        {/* Filtros y Buscador */}
        <div
          className="container border w-70 d-flex flex-column justify-content-evenly align-items-center "
          style={{ height: "150px", padding: "0px", paddingTop: "0px" }}
        >
          <div className="w-100 bg-secondary text-white text-center py-2">
            <p className="h4 mb-0">Filtrar por grupo</p>
          </div>

          <div className="dropdown text-center mt-2">
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle w-100"
                type="button"
                data-bs-toggle="dropdown"
              >
                <IoFileTrayFullSharp className="me-2" />
                {filtro}
              </button>
              <ul className="dropdown-menu w-100">
                {[
                  "Ver todos",
                  "Trabajo en equipo",
                  "Ambiente laboral",
                  "Desarrollo personal",
                ].map((item) => (
                  <li key={item}>
                    <button
                      className="dropdown-item"
                      onClick={() => setFiltro(item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="mt-4">
          <div className="d-flex justify-content-between align-items-center bg-secondary text-white px-3 py-2 rounded">
            <span className="fw-bold">Preguntas Activas</span>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar preguntas..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <table
            className="table table-striped border table-responsive text-center"
            style={{ tableLayout: "fixed" }}
          >
            <thead class="table-light">
              <tr className="table-dark">
                <th scope="col" style={{ width: "5%" }}>
                  #
                </th>
                <th scope="col" style={{ width: "25%" }}>
                  Dimensiones
                </th>
                <th scope="col" style={{ width: "25%" }}>
                  Pregunta
                </th>
                <th scope="col" style={{ width: "25%" }}>
                  Configuracion de pregunta
                </th>
                <th scope="col" style={{ width: "25%" }}>
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td className="text-center">
                    <button className="btn btn-link text-success p-0">
                      <IoEllipsisVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* VERSION ANTERIORS
        <div className="container border rounded p-3">
          <div className="d-flex justify-content-between align-items-center bg-secondary text-white px-3 py-2 rounded">
            <span className="fw-bold">Preguntas Activas</span>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar preguntas..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <table className="table mt-4">
            <thead className="bg-secondary text-white">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Dimensiones o áreas</th>
                <th scope="col" className="text-center">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td className="text-center">
                    <button className="btn btn-link text-success p-0">
                      <IoEllipsisVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center text-muted">
                    No hay resultados para mostrar
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      */}
      </div>
    </Home>
  );
};

export default Preguntas;
