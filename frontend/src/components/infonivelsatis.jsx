import React from "react";
import Home from "./home";
import Cuadrado from "./cuadrado";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const Infonivelsatis = () => {
  const data = [
    { name: "Jan", uv: 400 },
    { name: "Feb", uv: 300 },
    { name: "Mar", uv: 200 },
    { name: "Apr", uv: 278 },
    { name: "May", uv: 189 },
    { name: "Jun", uv: 239 },
    { name: "Jul", uv: 349 },
    { name: "Aug", uv: 200 },
  ];
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
        <div className="text-center m-3 border ">
          <h3 className="bg-dark text-white opacity-50">
            Filtro seleccionado (todos)
          </h3>
          <div className="row">
            <div className="col">
              <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
            <div className="col bg-white"></div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Infonivelsatis;
