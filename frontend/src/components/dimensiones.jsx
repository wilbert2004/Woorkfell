import React, { useState } from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoFileTrayFullSharp } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
const Dimensiones = () => {
  {/*Esto guarda, rastrea y cambia los valores de las dimensiones
  y el nombre de la dimensión que se está editando.
    */}


  const [dimensiones, setDimensiones] = useState([
    { id: 1, name: "Trabajo en equipo" },
    { id: 2, name: "Ambiente laboral" },
    { id: 3, name: "Desarrollo personal" },
  ]);

  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [editName, setEditName] = useState("");
  const handleEdit = (id, name) => {
    setEditId(id);
    setEditValue(name);
  };
  const handleSave = (id) => {
    setDimensiones(
      dimensiones.map((item) =>
        item.id === id ? { ...item, name: editValue } : item
      )
    );
    setEditId(null);
  };
  // Filtrado por búsqueda o categoría

  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState("Ver todos");
  const filteredDimensiones = dimensiones.filter(
    (item) =>
      (filtro === "Ver todos" || item.name === filtro) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <Home>
      <div className="container-fluid">
        <div className="container">
          <div className="navbar">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dimensiones" className="link-secondary">
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
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 text-center">
                  <p className="text-muted">
                    Indicaciones: En este módulo podrás consultar los resultados
                    de los periodos evaluados. En todo los casos, los resultados
                    mostrados son promedios aritméticos. Podrás seleccionar el
                    filtro de acuerdo a tus necesidades. Primero deberás
                    seleccionar el periodo y después podrás seleccionar los
                    criterios que deseas filtrar.
                  </p>
                </div>
              </div>
            </div>


            <div className="container border w-70 d-flex flex-column justify-content-evenly align-items-center " style={{ height: "150px", padding: "0px", paddingTop: "0px" }}>

              <div className="w-100 bg-secondary text-white text-center py-2">
                <p className="h4 mb-0">Dimensiones o Áreas</p>
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
                    {["Ver todos", "Trabajo en equipo", "Ambiente laboral", "Desarrollo personal"].map(
                      (item) => (
                        <li key={item}>
                          <button
                            className="dropdown-item"
                            onClick={() => setFiltro(item)}
                          >
                            {item}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </div>

              </div>
            </div>


            <div className="container border rounded p-3">
              <div className="d-flex justify-content-between align-items-center bg-secondary text-white px-3 py-2 rounded">
                <span className="fw-bold">Dimensiones o áreas</span>
                <div className="d-flex align-items-center">
                  <span className="me-2">Activo</span>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>

              <table className="table mt-3 mb-0">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th scope="col">Orden</th>
                    <th scope="col">Dimensiones o áreas</th>
                    <th scope="col" className="text-center">
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDimensiones.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        {editId === item.id ? (
                          <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="form-control"
                          />
                        ) : (
                          item.name
                        )}
                      </td>
                      <td className="text-center">
                        {editId === item.id ? (
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleSave(item.id)}
                          >
                            Guardar
                          </button>
                        ) : (
                          <button
                            className="btn btn-link text-success p-0"
                            onClick={() => handleEdit(item.id, item.name)}
                          >
                            <IoEllipsisVertical size={20} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Dimensiones;