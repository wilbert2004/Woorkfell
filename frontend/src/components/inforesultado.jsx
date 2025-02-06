import React from "react";
import Home from "./home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cuadrado from "./cuadrado";

const InfoResultado = () => {
  return (
    <Home>
      <div className="container">
        <div className="border text-center m-3">
          <h3 className="bg-dark text-white opacity-50">Interpretacion</h3>
          <p className="opacity-50">
            los grados de satisfaccion se divide en tres partes (favorables
            ,indeciso y desaforable). los valores que les corresponde son
            configurados desde el modulo de configuraciones . Los valores
            permitidos son los correpondientes a las escalas desde el modulo{" "}
          </p>

          <div
            className="row "
            style={{
              marginLeft: "5px",
            }}
          >
            <div className="col-sm ">
              <span>Rangos por grupos o variables </span>
            </div>
            <div className="col-sm">Rangos por preguntas </div>
          </div>
          {/* intervalo color verder */}
          <div
            className="row article text-center "
            style={{
              marginLeft: "50px",
            }}
          >
            <div className="col-sm ">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <Cuadrado color="green" tama="30px" /> {/* Cuadrado verde */}
                </div>
                <div className="p-2">Opinion favorables (4 a 5)</div>
              </div>
            </div>
            <div className="col-sm">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <Cuadrado color="green" tama="30px" /> {/* Cuadrado verde */}
                </div>
                <div className="p-2">Opinion favorables (4 a 5)</div>
              </div>
            </div>
          </div>
          {/* intervalo de amarillo */}
          <div
            className="row article text-center "
            style={{
              marginLeft: "50px",
            }}
          >
            <div className="col-sm">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <Cuadrado color="yellow" tama="30px" />{" "}
                  {/* Cuadrado amarillo */}
                </div>
                <div className="p-2">Opinion favorables (2 a 3.9)</div>
              </div>
            </div>
            <div className="col-sm">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <Cuadrado color="yellow" tama="30px" />{" "}
                  {/* Cuadrado amarillo */}
                </div>
                <div className="p-2">Opinion favorables (2 a 3.9)</div>
              </div>
            </div>
          </div>
          {/* intervalo de rojo */}
          <div
            className="row article text-center  "
            style={{
              marginLeft: "50px",
            }}
          >
            <div className="col-sm">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <Cuadrado color="red" tama="30px" /> {/* Cuadrado rosa */}
                </div>
                <div className="p-2">Opinion Desafavorables (1 a 1.9)</div>
              </div>
            </div>

            <div className="col-sm">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <Cuadrado color="red" tama="30px" /> {/* Cuadrado rosa */}
                </div>
                <div className="p-2">Opinion Desafavorables (1 a 1.9)</div>
              </div>
            </div>
          </div>
        </div>

        {/*  nuestro primer filtro empieza aqui */}
        <div className="border text-center m-3">
          <h3 className="bg-dark text-white opacity-50">Filtro Seleccionado</h3>
          <h4>Promedio por grupos o variable (todos)</h4>
          {/* Tabla */}
          <div className="mt-4">
            <table
              className="table table-striped border table-responsive text-center"
              style={{ tableLayout: "fixed" }}
            >
              <thead className="table-dark">
                <tr
                  style={{
                    backgroundColor: "#636363",
                  }}
                >
                  <th
                    scope="col"
                    style={{ width: "35%", backgroundColor: "#636363" }}
                  >
                    Grupo o variable
                  </th>
                  <th
                    scope="col"
                    style={{ width: "35%", backgroundColor: "#636363" }}
                  >
                    Promedio
                  </th>
                  <th
                    scope="col"
                    style={{ width: "35%", backgroundColor: "#636363" }}
                  >
                    Ver pregunta
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Satisfaccion de trabajo </th>
                  <td>ss</td>
                  <td>sss</td>
                </tr>
                <tr>
                  <td>ss</td>
                  <td>ss</td>
                  <td>ss</td>
                </tr>
                <tr>
                  <td>ddd</td>
                  <td>sss</td>
                  <td>aaa</td>
                </tr>
                <tr>
                  <td>ddd</td>
                  <td>sss</td>
                  <td>aaa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* nuestro tercer contenedor  */}
        <div className="border text-center m-3">
          <h3 className="bg-dark text-white opacity-50">Filtro Seleccionado</h3>
          <h4>Promedio por rangos de comentarios (todos) </h4>
          <div className="mt-4">
            <table
              className="table table-striped border table-responsive text-center"
              style={{ tableLayout: "fixed" }}
            >
              <thead className="table-dark">
                <tr
                  style={{
                    backgroundColor: "#636363",
                  }}
                >
                  <th
                    scope="col"
                    style={{ width: "35%", backgroundColor: "#636363" }}
                  >
                    Dimension
                  </th>
                  <th
                    scope="col"
                    style={{ width: "35%", backgroundColor: "#636363" }}
                  >
                    Preguntas
                  </th>
                  <th
                    scope="col"
                    style={{ width: "35%", backgroundColor: "#636363" }}
                  >
                    Promedio
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Satisfaccion de trabajo </th>
                  <td>ss</td>
                  <td>sss</td>
                </tr>
                <tr>
                  <td>ss</td>
                  <td>ss</td>
                  <td>ss</td>
                </tr>
                <tr>
                  <td>ss</td>
                  <td>ss</td>
                  <td>ss</td>
                </tr>
                <tr>
                  <td>ss</td>
                  <td>ss</td>
                  <td>ss</td>
                </tr>
                <tr>
                  <td>ddd</td>
                  <td>sss</td>
                  <td>aaa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* nuestro tercer contenedor  */}
        <div className="border text-center m-3">
          <h3 className="bg-dark text-white opacity-50">Filtro Seleccionado</h3>
          <h4>Promedio por rangos de comentarios (todos) </h4>
          <div className="mt-4">
            <table
              className="table table-striped border table-responsive text-center"
              style={{ tableLayout: "fixed" }}
            >
              <thead className="table-dark">
                <tr
                  style={{
                    backgroundColor: "#636363",
                  }}
                >
                  <th
                    scope="col"
                    style={{ width: "35%", backgroundColor: "#636363" }}
                  >
                    Grupo o variable
                  </th>
                  <th
                    scope="col"
                    style={{ width: "35%", backgroundColor: "#636363" }}
                  >
                    Preguntas
                  </th>
                  <th
                    scope="col"
                    style={{ width: "35%", backgroundColor: "#636363" }}
                  >
                    comentarios
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Satisfaccion de trabajo </th>
                  <td>ss</td>
                  <td>sss</td>
                </tr>
                <tr>
                  <td>ss</td>
                  <td>ss</td>
                  <td>ss</td>
                </tr>
                <tr>
                  <td>ddd</td>
                  <td>sss</td>
                  <td>aaa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default InfoResultado;
