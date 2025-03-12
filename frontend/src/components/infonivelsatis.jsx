import React from "react";
import Home from "./home";
import Cuadrado from "./cuadrado";
import Tableinterpretacion from "./tableinterpretacion";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Infonivelsatis = () => {
  return (
    <Home>
      <div className="container">
        <div>
          {/* llamamos los otros componentes de tabla de intepretacion */}
          <Tableinterpretacion />
        </div>
      </div>
    </Home>
  );
};

export default Infonivelsatis;
