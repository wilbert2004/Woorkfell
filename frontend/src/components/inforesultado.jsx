import React from "react";
import Home from "./home";
import Cuadrado from "./cuadrado";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { CiSearch } from "react-icons/ci";
import Tableinterpretacion from "./tableinterpretacion";

const InfoResultado = () => {
  return (
    <Home>
      <div className="container">
        <div>
          {/* llamamos el componente de tabla de intepretacion */}
          <Tableinterpretacion />
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
          <div className="border text-center ">
            <h3 className="b-darck text-white">Filtro Seleccionado</h3>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default InfoResultado;
