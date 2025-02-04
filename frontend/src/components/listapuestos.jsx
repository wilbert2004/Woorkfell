import React, { useState } from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { FaHandHolding, FaInfoCircle, FaPlus, FaUserTie } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BiShow } from "react-icons/bi";

const Listapuestos = () => {
  const [notification, setNotification] = useState(""); // Para manejar el mensaje de la notificación
  const [notificationVisible, setNotificationVisible] = useState(false); // Para controlar la visibilidad de la notificación


  const [selectedJob, setSelectedJob] = useState(null);
  const [filterDepartment, setFilterDepartment] = useState("Seleccionar departamento");

  const handleFilterDepartment = (department) => {
    setFilterDepartment(department);
  };
  const [jobs, setJobs] = useState([
    { id: 1, title: "Jefe de Contabilidad Fiscal", department: "Contabilidad" },
    { id: 2, title: "Jefe de Soporte IT", department: "Soporte IT" },
  ]);

  const handleEdit = (job) => {
    setSelectedJob(job);
  };

  const [jobToDelete, setJobToDelete] = useState(null);
  
  const handleDeleteJob = () => {
    if (jobToDelete) {
      setJobs(jobs.filter((job) => job.id !== jobToDelete.id));
      setJobToDelete(null);
      document.querySelector("#deleteModal .btn-close").click();
      showNotification("¡Puesto eliminado correctamente!");

    }
  };

  const handleSaveEditJob = () => {
    if (!selectedJob.title || !selectedJob.department) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    setJobs(jobs.map((job) => (job.id === selectedJob.id ? selectedJob : job)));
    setSelectedJob(null);
    setSelectedDepartment("Seleccionar departamento"); // Reiniciar selección
    document.querySelector("#editModal .btn-close").click();
    showNotification("¡Puesto editado correctamente!");

  };
  


  const [selectedDepartment, setSelectedDepartment] = useState("Seleccionar departamento");

  const handleSelectDepartment = (department) => {
    setSelectedDepartment(department);
  
    if (selectedJob) {
      setSelectedJob({ ...selectedJob, department });
    } else {
      setNewJob({ ...newJob, department });
    }
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
    handleSelectDepartment("Seleccionar departamento");
    setNewJob({ title: "", department: "" });
    showNotification("¡Puesto agregado correctamente!");

  };
  {/* Funciones para el buscador de puestos */}
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda
  
  const handleJobSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value.toLowerCase()); // Este es el valor que se usará para el filtrado
    setFilterDepartment("Seleccionar departamento"); // Reiniciar el filtro de departamento
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearchTerm = job.title.toLowerCase().includes(searchTerm) || job.department.toLowerCase().includes(searchTerm);
    const matchesDepartment = filterDepartment === "Seleccionar departamento" || job.department === filterDepartment;
    return matchesSearchTerm && matchesDepartment;
  });
  

  const handleShowAllJobs = () => {
    setSearchTerm(""); // Resetea el término de búsqueda
    setFilterDepartment("Seleccionar departamento"); // Reinicia también el filtro de departamento
  };

  const showNotification = (message) => {
    setNotification(message);
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 5000); // La notificación se oculta después de 5 segundos
  };
  
  {/* Fin de funciones para el buscador de puestos */}
  

  {/* Funciones para la notificación */}


  const closeNotification = () => {
    setNotificationVisible(false); // Para cerrar la notificación manualmente
  };



  {/* Fin de funciones para la notificación */}

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
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          {selectedDepartment}
                        </button>
                        <ul className="dropdown-menu">
                          {["Soporte IT", "RRHH", "Contabilidad", "Mantenimiento", "Gerencia"].map((dept) => (
                            <li key={dept}>
                              <button className="dropdown-item" type="button" onClick={() => handleSelectDepartment(dept)}>
                                {dept}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                </form>
              </div>
              {/* Final del contenido de modal */}

              {/* Botones de cierre y guardar */}
              <div className="modal-footer">
                <button type="button" className="btn btn-seconday" data-bs-dismiss="modal">
                  Cancelar
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
        

        {/* Buscador de puestos y filtrador por departamentos */}	
        <div
            className="container border mt-4 mx-20 p-3 d-flex align-items-center justify-content-around"
            style={{
              Width: "auto", // Limitar el ancho máximo
              height: "auto",
              borderRadius: "10px",
            }}
          >
            
              
            <div className="dropdown">
              <button style={{width: "14rem"}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {filterDepartment}
              </button>
              <ul className="dropdown-menu">
                {["Soporte IT", "RRHH", "Contabilidad", "Mantenimiento", "Gerencia"].map((dept) => (
                  <li key={dept}>
                    <button className="dropdown-item" type="button" onClick={() => handleFilterDepartment(dept)}>
                      {dept}
                    </button>
                  </li>
                ))}
              </ul>
            </div>


              <div class="input-group d-flex justify-content-around" style={{width:"50%"}} >
                <span class="input-group-text" id="basic-addon1"><CiSearch/></span>
                <input style={{opacity:"60%"}} type="text" class="form-control text-center" placeholder="Buscar por puestos" value ={searchTerm} aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleJobSearch(e)}/>
              </div>

              <div>
                <button style={{width: "15rem"}} className="btn btn-primary ms-2 " onClick={handleShowAllJobs}><BiShow style={{marginTop: "-.2rem", marginRight:".2rem"}}/>Mostrar todos los puestos</button>  
              </div>
          </div>
        {/* Fin de buscador de puestos y filtrador por departamentos */}	


        {/* Tabla */}
        <div className="mt-4">
        <table className="table table-striped border table-responsive text-center" style={{ tableLayout: 'fixed' }}>
          <thead className="table-dark">
            <tr>
            <th scope="col" style={{ width: '5%' }}>#</th>
            <th scope="col" style={{ width: '50%' }}>Puesto</th>
            <th scope="col" style={{ width: '30%' }}>Departamento</th>
            <th scope="col" style={{ width: '15%' }}>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.title}</td>
                <td>{job.department}</td>
                <td>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      onClick={() => handleEdit(job)}
                    >
                      <MdEdit className="me-2" />
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      onClick={() => setJobToDelete(job)}
                    >
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
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          {selectedDepartment}
                        </button>
                        <ul className="dropdown-menu">
                          {["Soporte IT", "RRHH", "Contabilidad", "Mantenimiento", "Gerencia"].map((dept) => (
                            <li key={dept}>
                              <button className="dropdown-item" type="button" onClick={() => handleSelectDepartment(dept)}>
                                {dept}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
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
                <button type="button" className="btn btn-primary" onClick={handleSaveEditJob}>
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Fin de modal de edicion */}

        {/* Modal de Eliminación */}

        {/* Modal de Edición */}
        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Eliminar Puesto</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                {jobToDelete ? (
                  <p>¿Desea eliminar <strong>{jobToDelete.title}</strong> de {jobToDelete.department}?</p>
                ) : (
                  <p>No se ha seleccionado ningún puesto.</p>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancelar
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteJob}>
                  Eliminar
                </button>
            </div>
          </div>
        </div>
      </div>
        {/* Fin de modal de eliminacion */}
      
      {/* Alerta en la esquina inferior derecha */}
      {notificationVisible && (
        <div
          className="alert alert-success position-fixed bottom-0 end-0 mb-3 me-3"
          style={{ zIndex: 1050, cursor: 'pointer' }}
          onClick={closeNotification}
        >
          {notification}
          <button
            type="button"
            className="btn-close ms-2"
            aria-label="Close"
            onClick={closeNotification}
          ></button>
        </div>
      )}
      {/* Fin de alerta en la esquina inferior derecha */}

      </div>
    </Home>
  );
};
export default Listapuestos;