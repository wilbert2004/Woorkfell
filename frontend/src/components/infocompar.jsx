import React from "react";
import Home from "./home";
import Cuadrado from "./cuadrado";
import Tableinterpretacion from "./tableinterpretacion";
const Infocompar = () => {
  return (
    <Home>
      <div className="container">
        <div className="m-2 border rounded ">
          <p className="auto p-2 mb-3 bg-dark text-white opacity-50 text-center h5">
            Grafica comparativa (periodo Enero-Febrero / Marzo -Mayo)
          </p>
        </div>

        <div className="m-2 border rounded"></div>

        {/* llamamos nuestra tabla de importaciones */}
        <Tableinterpretacion />
      </div>
    </Home>
  );
};

export default Infocompar;
