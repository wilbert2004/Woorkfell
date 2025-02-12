import React from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { MdHelpOutline } from "react-icons/md";
import { IoFileTrayFullSharp } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
const preguntas = () => {
  return (
    <Home>
      <div className="container-fluid">
        <div className="container">
          <div className="navbar">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/configuracion" className="link-secondary">
                    <MdHelpOutline style={{ marginRight: "3px" }} />
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{ marginTop: "2px" }}
                >
                  {/*Esto me ridirige a un lugar */}
                  <Link to="/dimensiones" className="link-secondary">
                    Preguntas
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
          <div>

            <div className="container">
              <div className="row ">
                <div className="col-md-10 text-center">
                  <p className="text-muted">
                    Inidicaciones : En este módulo podrás agregar, editar y eliminar preguntas de tu encuesta. Además, tendrás la flexibilidad de personalizarla según tus necesidades.                  </p>
                </div>
              </div>
              <div className="col-md-2">

                <button className="btn btn-primary mt-auto d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#addModal">Exportar a excel</button>

              </div>
            </div>

            {/* elemento para ver periodos disponibles  */}



            <div className="container border w-100 d-flex flex-column justify-content-evenly align-items-center " style={{ height: "150px", padding: "0px", paddingTop: "0px" }}>

              <div className="w-100 bg-secondary text-white text-center py-2">
                <p className="h4 mb-0">Filtros por grupo</p>
              </div>

              <div className="dropdown text-center mt-2">
                <button
                  className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center justify-content-center "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IoFileTrayFullSharp className="me-2" /> Ver todos
                </button>
                <ul className="dropdown-menu w-100">
                  {["Trabajo en equipo", "Ambiente laboral", "Desarrollo personal"].map((item) => (
                    <li key={item}>
                      <button className="dropdown-item text-center" type="button">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="container border rounded p-3">

              <div className="d-flex justify-content-between align-items-center bg-secondary text-white px-3 py-2 rounded">
                <span className="fw-bold">Dimensiones o áreas</span>
                <div className="d-flex align-items-center">
                  <input class="form-control justify-content-between" list="datalistOptions" id="exampleDataList" placeholder="Search" ></input>

                </div>
              </div>


              <table className="table mt-3 mb-0">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th scope="col">Preguntas activas</th>
                    <th scope="col">Dimensiones o áreas</th>
                    <th scope="col" className="text-center">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, name: "Trabajo en equipo" },
                    { id: 2, name: "Ambiente laboral" },
                    { id: 3, name: "Desarrollo personal" },
                  ].map((item) => (
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
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </Home>
  );
};

export default preguntas;