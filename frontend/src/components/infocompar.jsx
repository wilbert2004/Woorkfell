import React from "react";
import Home from "./home";
import Cuadrado from "./cuadrado";
const Infocompar = () => {
  return (
    <Home>
      <div className="container">
        <div className="m-2 border rounded ">
          <p className="auto p-2 mb-3 bg-dark text-white opacity-50 text-center h5">
            Grafica comparativa (periodo Enero-Febrero / Marzo -Mayo)
          </p>
          <div className="m-2   opacity-100"></div>
        </div>

        {/* tabla de intepretaciones */}
        <div className="border text-center m-3">
          <p className="auto p-2 mb-3 bg-dark text-white opacity-50 text-center h5">
            Interpretacion
          </p>
          <p className="opacity-50">
            los grados de satisfaccion se divide en tres partes (favorables
            ,indeciso y desaforable). los valores que les corresponde son
            configurados desde el modulo de configuraciones . Los valores
            permitidos son los correpondientes a las escalas desde el modulo
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
          {/* termina la tabla de intepretacion */}
        </div>
      </div>
    </Home>
  );
};

export default Infocompar;
