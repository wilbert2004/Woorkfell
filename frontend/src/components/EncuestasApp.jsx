import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./EncuestasAPP.css";

function EncuestasApp() {
    const navigate = useNavigate();

    const [dimensiones, setDimensiones] = useState([
        { id: 1, nombre: "Recursos Humanos" },
        { id: 2, nombre: "Producción y manufactura" },
        { id: 3, nombre: "Administración y finanzas" },
    ]);

    const [activo, setActivo] = useState(true);
    const [editando, setEditando] = useState(null);
    const [nombreEditado, setNombreEditado] = useState("");

    const handleGoToHome = () => {
        navigate("/");
    };

    const eliminarDimension = (id) => {
        setDimensiones(dimensiones.filter((dimension) => dimension.id !== id));
    };

    const editarDimension = (id, nombre) => {
        setEditando(id);
        setNombreEditado(nombre);
    };

    const guardarEdicion = () => {
        setDimensiones(
            dimensiones.map((dimension) =>
                dimension.id === editando ? { ...dimension, nombre: nombreEditado } : dimension
            )
        );
        setEditando(null);
        setNombreEditado("");
    };

    return (
        <div className="container-fluid encuestas-app">
            <div className="row vh-100">
                {/* Menú lateral */}
                <div className="col-2 bg-sidebar p-3">
                    <h5 className="fw-bold text-white">MÓDULOS</h5>
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <a href="#" className="text-decoration-none text-white">
                                <i className="bi bi-calendar3 me-2"></i>Periodos
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none text-white">
                                <i className="bi bi-ui-checks-grid me-2"></i>Encuestas
                            </a>
                            <ul className="list-unstyled ms-3 mt-2">
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-white">Dimensiones</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-white">Preguntas</a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none text-white">Escala</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Contenido principal */}
                <div className="col-10 p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="fw-bold text-header">Dimensiones de las encuestas</h2>
                        <button className="btn btn-secondary" onClick={handleGoToHome}>
                            Ir a Inicio
                        </button>
                    </div>

                    <div className="card p-3 mb-4 shadow-sm">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h5 className="fw-bold">Dimensiones o áreas</h5>
                                <select className="form-select mt-2">
                                    <option>Género</option>
                                    <option>Edad</option>
                                    <option>Departamento</option>
                                </select>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        const nuevaDimension = {
                                            id: dimensiones.length + 1,
                                            nombre: "Nueva dimensión",
                                        };
                                        setDimensiones([...dimensiones, nuevaDimension]);
                                    }}
                                >
                                    + Nuevo
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-bold">Dimensiones Activas</h5>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="activoSwitch"
                                checked={activo}
                                onChange={() => setActivo(!activo)}
                            />
                            <label className="form-check-label ms-2" htmlFor="activoSwitch">
                                {activo ? "Activo" : "Inactivo"}
                            </label>
                        </div>
                    </div>

                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>Orden</th>
                                <th>Dimensiones o áreas</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dimensiones.map((dimension, index) => (
                                <tr key={dimension.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {editando === dimension.id ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={nombreEditado}
                                                onChange={(e) => setNombreEditado(e.target.value)}
                                            />
                                        ) : (
                                            dimension.nombre
                                        )}
                                    </td>
                                    <td>
                                        {editando === dimension.id ? (
                                            <button
                                                className="btn btn-primary btn-sm me-2"
                                                onClick={guardarEdicion}
                                            >
                                                Guardar
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-success btn-sm me-2"
                                                onClick={() =>
                                                    editarDimension(dimension.id, dimension.nombre)
                                                }
                                            >
                                                Editar
                                            </button>
                                        )}
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => eliminarDimension(dimension.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EncuestasApp;
