import React, { useState } from "react";
import Home from "./home";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import { BsExclamationTriangle } from "react-icons/bs";

const Periodo = () => {


  return (
    <Home>
      <div className="container text-center">
        {/* Breadcrumb */}
        <div className="navbar">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/Periodo" className="link-secondary">
                  <LuCalendarDays style={{ marginRight: "10px" }} />
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/Periodo" className="link-secondary">
                  Periodo
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        {/* Indicaciones */}
        <div className="row m-3">
          <div className="col-md-10" style={{ color: "#ACAAAA" }}>
            <p>
              Indicaciones: en este módulo podrás agregar, editar y eliminar
              periodos de evaluación. Solo podrás tener un periodo activo a la
              vez. La fecha de inicio y cierre indica el tiempo en que el
              periodo estará activo. El estado del periodo indica si está activo
              o se considera un periodo cerrado.
            </p>
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#nuevoPeriodoModal"
            >
              Nuevo Periodo
            </button>
          </div>
        </div>
        {/* Buscador */}
        <div className="border rounded m-3 text-center">
          <div className="d-flex justify-content-end m-3">
            <div
              className="input-group search-container"
              style={{ maxWidth: "250px", width: "100%" }}
            >
              <label htmlFor="search" style={{ marginRight: "10px" }}>
                Buscar:
              </label>
              <input
                type="text"
                id="search"
                className="form-control form-control-sm"
                placeholder="Buscar..."
                aria-label="Buscar"
              />
            </div>
          </div>
          {/* Tabla */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="bg-dark text-white opacity-50">
                  Periodos
                </th>
                <th scope="col" className="bg-dark text-white opacity-50">
                  Estado
                </th>
                <th scope="col" className="bg-dark text-white opacity-50">
                  Fecha de inicio
                </th>
                <th scope="col" className="bg-dark text-white opacity-50">
                  Fecha de cierre
                </th>
                <th scope="col" className="bg-dark text-white opacity-50">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>

        {/* Modal de editar periodo */}
        <div
          className="modal fade"
          id="editModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div
                className="modal-header bg-dark text-white opacity-50 "
                style={{}}
              >
                <h4 className="modal-title ">Editar Periodo</h4>
              </div>

              {/* Modal body */}
              <div className="modal-body text-start h5 ">
                <label htmlFor="editar" className="m-3 opacity-50">
                  Nombre del periodo
                </label>
                <br />
                <input
                  type="text"
                  id="edita"
                  placeholder="Periodo 1"
                  className="border rounded text-center w-75 h-100 h6"
                />
                <div className="row">
                  <div className="col m-3 h6">
                    <label htmlFor="editar" className="opacity-50">
                      Fecha de inicio
                    </label>
                    <input
                      type="date"
                      id="editar"
                      className="border rounded text-center w-100 h6"
                      
                    />
                  </div>
                  <div className="col m-3 h6">
                    <label htmlFor="editar" className="opacity-50">
                      Fecha de cierre
                    </label>
                    <input
                      type="date"
                      id="editar"
                      className="border rounded text-center w-100 h6"
                    
                    />
                  </div>
                  <label htmlFor="estado " className="opacity-50 h6 m-1">
                    Estado:
                  </label>
                  <select
                    id="estado"
                    className="border rounded text-center w-75 m-3 opacity-50 h6"
                    
                  >
                    <option value="Cerrado">Cerrado</option>
                    <option value="Activo">Activo</option>
                  </select>
                </div>
              </div>

              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Guardar cambios
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de eliminar periodo */}
        <div
          className="modal fade"
          id="deleteModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div
                className="modal-header bg-dark text-white opacity-50 "
                style={{}}
              >
                <h4 className="modal-title ">Eliminar Periodo</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              {/* Modal body */}
              <div className="modal-body text-start">
                <div className="d-flex align-items-center h-100">
                  <div className="flex-shrink-0 me-3">
                    <BsExclamationTriangle size={24} className="text-warning" />
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0">
                      Este periodo será eliminado permanentemente. ¿Está seguro
                      que desea eliminarlo?
                    </p>
                  </div>
                </div>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal para agregar periodo */}
        <div
          className="modal fade"
          id="nuevoPeriodoModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              {/* Modal Header */}
              <div
                className="modal-header bg-dark text-white opacity-50 "
                style={{}}
              >
                <h4 className="modal-title ">Agregar periodo</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              {/* Modal body */}
              <div className="modal-body text-start h5 ">
                <label htmlFor="nombre" className="m-3 opacity-50">
                  Nombre del periodo
                </label>
                <br />
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="border rounded text-center w-75 h-100 h6"
                 
                />

                <div className="row">
                  <div className="col m-3 h6">
                    <label htmlFor="inicio" className="opacity-50">
                      Fecha de inicio
                    </label>
                    <input
                      type="date"
                      id="inicio"
                      name="inicio"
                      className="border rounded text-center w-100 h6"
                      
                    />
                  </div>
                  <div className="col m-3 h6">
                    <label htmlFor="cierre" className="opacity-50">
                      Fecha de cierre
                    </label>
                    <input
                      type="date"
                      id="cierre"
                      name="cierre"
                      className="border rounded text-center w-100 h6"
                     
                    />
                  </div>
                  <label htmlFor="estado " className="opacity-50 h6 m-1">
                    Estado:
                  </label>
                  <select
                    id="estado"
                    name="estado"
                    className="border rounded text-center w-75 m-3 opacity-50 h6"
                    
                  >
                    <option value="Cerrado">Cerrado</option>
                    <option value="Activo">Activo</option>
                  </select>
                </div>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  
                >
                  Guardar cambios
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Periodo;
