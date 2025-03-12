import React from "react";
import Cuadrado from "./cuadrado";

const Tableinterpretacion = () => {
  return (
    <div className="container">
      <div className="border text-center m-3">
        <h3 className="bg-dark text-white opacity-50">Interpretacion</h3>
        <p className="opacity-50">
          Los grados de satisfaccion se divide en tres partes (favorables
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
    </div>
  );
};

export default Tableinterpretacion;
