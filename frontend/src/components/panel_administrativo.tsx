import React from "react";
import Home from "./home";

const Panel_Administrativo = () => {
  return (
    <Home>
      <div className="container mt-4">
        <h2 className="text-center">Panel Administrativo</h2>
        <p className="text-center">
          Este panel solo es accesible para el administrador.
        </p>

        {/* División en dos columnas */}
        <div className="row mt-4">
          {/* Panel de Usuarios */}
          <div className="col-md-6 text-center">
            <h3>Panel de Usuarios</h3>
            <p>Aquí se puede administrar los usuarios del sistema.</p>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalAgregarUsuario"
            >
              Agregar Usuario
            </button>

            {/* Modal para agregar usuario */}
            <div
              className="modal fade"
              id="modalAgregarUsuario"
              tabIndex={-1}
              aria-labelledby="modalAgregarUsuarioLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalAgregarUsuarioLabel">
                      Agregar Usuario
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Cerrar"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* Formulario para agregar usuario */}
                    <form>
                      <div className="mb-3">
                        <label htmlFor="nombreUsuario" className="form-label">
                          Nombre del Usuario
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombreUsuario"
                          placeholder="Ingresa el nombre del usuario"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="emailUsuario" className="form-label">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="emailUsuario"
                          placeholder="Ingresa el correo electrónico"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="rolUsuario" className="form-label">
                          Rol
                        </label>
                        <select className="form-select" id="rolUsuario">
                          <option value="admin">Administrador</option>
                          <option value="user">Usuario</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button type="button" className="btn btn-primary">
                      Guardar Usuario
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel de Compañías */}
          <div className="col-md-6">
            <h3>Panel de Compañías</h3>
            <p>Aquí se puede administrar las compañías del sistema.</p>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalAgregarCompania"
            >
              Agregar Compañía
            </button>

            {/* Modal para agregar compañía */}
            <div
              className="modal fade"
              id="modalAgregarCompania"
              tabIndex={-1}
              aria-labelledby="modalAgregarCompaniaLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalAgregarCompaniaLabel">
                      Agregar Compañía
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Cerrar"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* Formulario para agregar compañía */}
                    <form>
                      <div className="mb-3">
                        <label htmlFor="nombreCompania" className="form-label">
                          Nombre de la Compañía
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombreCompania"
                          placeholder="Ingresa el nombre de la compañía"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="direccionCompania" className="form-label">
                          Dirección
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="direccionCompania"
                          placeholder="Ingresa la dirección"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="telefonoCompania" className="form-label">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="telefonoCompania"
                          placeholder="Ingresa el teléfono"
                          required
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button type="button" className="btn btn-primary">
                      Guardar Compañía
                    </button>
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

export default Panel_Administrativo;