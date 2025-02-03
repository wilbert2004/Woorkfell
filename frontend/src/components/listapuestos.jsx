import React, { useState } from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { FaHandHolding, FaInfoCircle, FaPlus, FaUserTie } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Listapuestos = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const [jobs, setJobs] = useState([
    { id: 1, title: "Jefe de Contabilidad Fiscal", department: "Contabilidad" },
    { id: 2, title: "Jefe de Soporte IT", department: "Soporte IT" },
  ]);

  const handleEdit = (job) => {
    setSelectedJob(job);
  };

  const [newJob, setNewJob] = useState({title: "", department: ""});

  const handleAddJob = () => {
    if (!newJob.title || !newJob.department) {
      alert("Por favor, llena todos los campos");
      return;
    }
    setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);

    setNewJob({ title: "", department: "" });
    document.querySelector("#addModal .btn-close").click();
  };

  return (
    <Home>
      <div className="container">
        <div className="navbar">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/Listapuestos" className="link-secondary">
                  <FaUserTie style={{ marginRight: "3px" }} />
                </Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ marginTop: "2px" }}
              >
                <Link to="/Listapuestos" className="link-secondary">
                  Puestos
                </Link>
              </li>
            </ol>
          </nav>
        </div>

        <div className="row">
          <div className="col-md-10" style={{ color: "#ACAAAA" }}>
            <p style={{ fontSize: "1.8rem", marginTop: ".93rem" }}>
              Indicaciones: En este módulo podrás agregar los puestos de tu
              empresa.
            </p>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
              <FaHandHolding className="mb-2" style={{ fontSize: "2rem", color: "#0d6efd" }} />
              <FaInfoCircle className="mb-2" style={{ fontSize: "1rem", color: "#0d6efd" }} />
            </div>
            <button className="btn btn-primary mt-auto d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#addModal">
              <FaPlus className="me-2" style={{ fontSize: "1.1rem" }} />
              Nuevo puesto
            </button>
          </div>
        </div>

        {/* Modal de agregar nuevo puesto */}
        
        <div className="modal fade" id="addModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Agregar nuevo puesto</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              {/* Contenido de modal */}
              <div className="modal-body">
                <form>
                  {/* Seccion para el nuevo Puesto */}
                  <div className="mb-3">
                    <label className="form-label">Puesto</label>
                    <input
                      type="text" 
                      className="form-control" 
                      value={newJob.title} 
                      onChange={(e)=> setNewJob ({ ...newJob, title: e.target.value })}
                      placeholder="Ej. Desarrollador Web"
                    />
                  </div>
                  {/* Seccion para el nuevo Departamento */}
                  <div className="mb-3">
                    <label className="form-label">Departamento</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newJob.department}
                      onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                      placeholder="Ej. Desarrollo"
                    />
                  </div>
                </form>
              </div>
              {/* Final del contenido de modal */}

              {/* Botones de cierre y guardar */}
              <div className="modal-footer">
                <button type="button" className="btn btn-seconday" data-bs-dismiss="modal">
                  Deshacer
                </button>
                <button type="button" className="btn btn-primary" onClick={handleAddJob}>
                  Agregar
                </button>
              </div>
              {/* Final de botones de cierre y guardar */}

            </div>
          </div>
        </div>
        {/* Final de modal de agregar nuevo puesto */}

        <div
            className="container border mt-4 mx-20 p-3 d-flex align-items-center justify-content-around"
            style={{
              Width: "auto", // Limitar el ancho máximo
              height: "auto",
              borderRadius: "10px",
            }}
          >
            
              
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Ver todos los departamentos
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Soporte IT</a></li>
                  <li><a class="dropdown-item" href="#">RRHH</a></li>
                  <li><a class="dropdown-item" href="#">Contabilidad</a></li>
                  <li><a class="dropdown-item" href="#">Mantenimiento</a></li>
                  <li><a class="dropdown-item" href="#">Gerencia</a></li>
                </ul>
              </div>

              <div class="input-group d-flex justify-content-around" style={{width:"60%"}} >
                <span class="input-group-text" id="basic-addon1"><CiSearch/></span>
                <input style={{opacity:"60%"}} type="text" class="form-control text-center" placeholder="Buscar por puestos" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div>
                <button style={{width: "8rem"}} className="btn btn-primary ms-2 "><CiSearch style={{marginTop: "-.2rem", marginRight:".2rem"}}/>Buscar</button>  
              </div>
          </div>


        {/* Tabla */}
        <div className="mt-4">
          <table className="table border text-center" style={{ borderColor: "#636363" }}>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Puesto</th>
                <th>Departamento</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.title}</td>
                  <td>{job.department}</td>
                  <td>
                    <div className="btn-group">
                      <button
                      type="button" className="btn" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handleEdit(job)} >
                        <MdEdit className="me-2" />
                        Editar
                      </button>
                      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#deleteModal">
                        <MdDelete className="me-2" />
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal de Edición */}
        <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Puesto</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                {selectedJob ? (
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Puesto</label>
                      <input
                        type="text"
                        className="form-control"
                        value={selectedJob.title}
                        onChange={(e) => setSelectedJob({ ...selectedJob, title: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Departamento</label>
                      <input
                        type="text"
                        className="form-control"
                        value={selectedJob.department}
                        onChange={(e) => setSelectedJob({ ...selectedJob, department: e.target.value })}
                      />
                    </div>
                  </form>
                ) : (
                  <p>No job selected</p>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary">
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Fin de modal de edicion */}

        {/* Modal de Eliminación */}

        {/* Modal de Edición */}
        <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Eliminar Puesto</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                {selectedJob ? (
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Puesto</label>
                      <input
                        type="text"
                        className="form-control"
                        value={selectedJob.title}
                        onChange={(e) => setSelectedJob({ ...selectedJob, title: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Departamento</label>
                      <input
                        type="text"
                        className="form-control"
                        value={selectedJob.department}
                        onChange={(e) => setSelectedJob({ ...selectedJob, department: e.target.value })}
                      />
                    </div>
                  </form>
                ) : (
                  <p>No job selected</p>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary">
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fin de modal de eliminacion */}

      </div>
    </Home>
  );
};

export default Listapuestos;
