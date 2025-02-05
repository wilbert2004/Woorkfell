import React from "react";
import Home from "./home";

const InfoResultado = () => {
  return (
    <Home>
      <div className="container">
        <div className="border text-center  ">
          <h3 className="bg-dark text-white opacity-50">Interpretacion</h3>
          <p className="opacity-50">
            los grados de satisfaccion se divide en tres partes (favorables
            ,indeciso y desaforable). los valores que les corresponde son
            configurados desde el modulo de configuraciones . Los valores
            permitidos son los correpondientes a las escalas desde el modulo{" "}
          </p>

          <div className="row article">
            <div className="col-sm">Rangos por grupos o variables </div>
            <div className="col-sm">Rangos por preguntas </div>
          </div>
          <div className="row article">
            <div className="col-sm">Opinion favorables de (4 a 5) </div>
            <div className="col-sm">Opinion favorables de (4 a 5) </div>
          </div>
          <div className="row article">
            <div className="col-sm">Opinion indecisa (2 a 3.9) </div>
            <div className="col-sm">Opinion indecisa (2 a 3.9) </div>
          </div>
          <div className="row article">
            <div className="col-sm">Opinion Desafavorables (1 a 1.9) </div>
            <div className="col-sm">Opinion Desafavorables (1 a 1.9) </div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default InfoResultado;
