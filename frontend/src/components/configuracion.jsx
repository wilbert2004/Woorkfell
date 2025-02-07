import React from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { RiUserSettingsLine } from "react-icons/ri";
const Configuracion = () => {
  return (
    <Home>
      <div className="container">
        <div className="navbar">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/configuracion" className="link-secondary">
                    <RiUserSettingsLine style={{ marginRight: "3px" }} />
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{ marginTop: "2px" }}
                >
                  <Link to="/configuracion" className="link-secondary">
                    Configuraciones
                  </Link>
                </li>
              </ol>
          </nav>
        </div>

        <div
          className="container border text-center w-100 d-flex flex-column justify-content-evenly align-items-center"
        >
          <div>
            <p className="h2 text-muted">
              Selecciona el periodo
            </p>
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Rango de interpretacion de grupos o variables
            </button>
            <ul className="dropdown-menu">
              {["Soporte IT", "RRHH", "Contabilidad", "Mantenimiento", "Gerencia"].map((dept) => (
                <li key={dept}>
                  <button className="dropdown-item" type="button">
                    {dept}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="container border rounded text-center w-100 d-flex flex-column justify-content-evenly align-items-center p-4">
            <div className="mb-3"> {/* Agrega margen inferior al texto */}
              <p className="h2 text-muted">Selecciona el periodo</p>
            </div>
            
              <div className="dropend">
                <button className="btn btn-secondary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rango de interpretación de grupos o variables
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div className="container border rounded text-center w-100 d-flex flex-column justify-content-center align-items-center mt-3">
              <div className="w-100 d-flex flex-column justify-content-center align-items-center pt-3 p-1">
                <p className="h2 text-muted">Se mostrará el rango de interpretación que se tomarón en rangos de interpretación de grupos o variables </p>
              </div>
              <div className="container border rounded text-center w-75 d-flex flex-column justify-content-center align-items-center pt-3 m-3">
                <table className="table table-bordered border border-dark table-hover">
                  <thead className="table border-dark table-secondary">
                    <tr>
                      <th scope="col">Concepto</th>
                      <th scope="col">Límite inferior</th>
                      <th scope="col">Límite superior</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: "green", color: "white", width: "30%"}}>Opción de acuerdo</td>
                      <td style={{width: "20%"}}><input type="number" className="form-control" defaultValue="3.5" /></td>
                      <td style={{width: "20%"}}><input type="number" className="form-control" defaultValue="5" /></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: "#FFD580", color: "white" }}>Opción indeciso</td>
                      <td><input type="number" className="form-control" defaultValue="2.5" /></td>
                      <td><input type="number" className="form-control" defaultValue="3.49" /></td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: "red", color: "white" }}>Opción desfavorable</td>
                      <td><input type="number" className="form-control" defaultValue="1" /></td>
                      <td><input type="number" className="form-control" defaultValue="2.49" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="d-flex justify-content-center m-4">
              <button type="button" className="btn btn-primary btn-lg">Guardar cambios</button>
            </div>
        </div>
      </div>  
    </Home>
  );
};

export default Configuracion;