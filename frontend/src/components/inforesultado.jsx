import React from "react";
import Home from "./home";
import Cuadrado from "./cuadrado";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { CiSearch } from "react-icons/ci";

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
                  <Cuadrado color="green" width="30px" height="30px" />
                </div>
                <div className="p-2">Opinion favorables (4 a 5)</div>
              </div>
            </div>
            <div className="col-sm">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <Cuadrado color="green" width="30px" height="30px" />{" "}
                  {/* Cuadrado verde */}
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
                  <Cuadrado color="yellow" width="30px" height="30px" />{" "}
                  {/* Cuadrado amarillo */}
                </div>
                <div className="p-2">Opinion indecisa (2 a 3.9)</div>
              </div>
            </div>
            <div className="col-sm">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <Cuadrado color="yellow" width="30px" height="30px" />{" "}
                  {/* Cuadrado amarillo */}
                </div>
                <div className="p-2">Opinion indecisa (2 a 3.9)</div>
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
                  <Cuadrado color="red" width="30px" height="30px" />{" "}
                  {/* Cuadrado rosa */}
                </div>
                <div className="p-2">Opinion Desafavorables (1 a 1.9)</div>
              </div>
            </div>

            <div className="col-sm">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <Cuadrado color="red" width="30px" height="30px" />{" "}
                  {/* Cuadrado rosa */}
                </div>
                <div className="p-2">Opinion Desafavorables (1 a 1.9)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border text-center m-3">
          <h4 className="bg-dark text-white opacity-50">Filtro Seleccionado</h4>
          <h5>Promedio por grupos o variable (todos)</h5>
          <table className="table ">
            <thead>
              <tr>
                <th className="bg-dark text-white opacity-50">
                  {" "}
                  Grupo o variable
                </th>
                <th scope="col" className="bg-dark text-white opacity-50">
                  Promedio{" "}
                </th>
                <th scope="col" className="bg-dark text-white opacity-50">
                  Ver pregunta
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  style={{
                    paddingRight: "100px",
                  }}
                >
                  Satisfaccion de trabajo
                </th>
                <th>
                  <Cuadrado
                    color="yellow"
                    width="100px"
                    height="30px"
                    letra="3.5"
                  />
                </th>
                <th>
                  <CiSearch />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Home>
  );
};

export default InfoResultado;
