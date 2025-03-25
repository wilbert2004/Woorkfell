import React, { useState } from "react";
import Home from "./home";
import { CiUser } from "react-icons/ci";
//importamos el Link
import { Link } from "react-router-dom";

const Escala = () => {
  // Estado para manejar los valores de la escala
  const [valor, setValor] = useState([
    {
      id: 1,
      orden: "1",
      descripcion: "Totalmente en desacuerdo",
      valor: "1",
    },
    {
      id: 2,
      orden: "2",
      descripcion: "En desacuerdo ",
      valor: "2",
    },
    {
      id: 3,
      orden: "3",
      descripcion: "Ni de acuerdo ni de desacuerdo ",
      valor: "3",
    },
    {
      id: 4,
      orden: "4",
      descripcion: "De acuerdo",
      valor: "4",
    },
    {
      id: 5,
      orden: "5",
      descripcion: "Totalmente de acuerdo",
      valor: "5",
    },
  ]);

  return (
    <Home>
      <div className="container mx-auto">
        {/* ruta de navegacion */}
        <div className="navbar">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/escala" className="link-secondary">
                  <CiUser style={{ marginRight: "3px" }} />
                </Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ marginTop: "2px" }}
              >
                <Link to="/escala" className="link-secondary">
                  Escala
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        {/* columns */}
        <div className="row">
          <div className="col">
            <p className="text-secondary">
              Indicaciones: En este módulo podrás agregar, editar y eliminar
              elementos de la escala que será utilizada en el proceso de
              evaluación. El valor asignado a cada escala de evaluación es el
              que es considerado para el cálculo de los estadísticos finales.
              Los valores deberán de ser mayor a 0. Todas las preguntas que
              hayan sido seleccionadas con esta opción no serán consideradas en
              los estadísticos.
            </p>
          </div>
          <div className="col col-lg-2">
            <button className="btn btn-primary">Nuevo Criterio</button>
          </div>
        </div>
        {/* agregamos una tabla para nuestra escala */}
        <table className="table rounded">
          <thead>
            <tr>
              <th scope="col" className="bg-dark text-white opacity-50">
                Orden
              </th>
              <th scope="col" className="bg-dark text-white opacity-50">
                Descripción
              </th>
              <th scope="col" className="bg-dark text-white opacity-50">
                Valor
              </th>
              <th scope="col" className="bg-dark text-white opacity-50">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {valor.map((d) => (
              <tr key={d.id}>
                <td scope="row">{d.orden}</td>
                <td>{d.descripcion}</td>
                <td>{d.valor}</td>
                <td>opciones</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h2 className="text-center">Indicaciones :</h2>
          <h5 className="text-secondary text-center">
            Selecciona la opcion que mejor describa su percepcion para cada
            frase{" "}
          </h5>
          <br />

          <div className="border text-center rouded  ">
            <h5 className="text-primary">
              {" "}
              <strong> COMUNICACION EFICAZ </strong>
            </h5>
            <ol>
              <li>
                Estoy informado(a) de las razones por los cuales se hacen
                cambios en las politicas y procedimiento de la organizacion
              </li>
            </ol>
            <br />
            <div className="row m-1">
              <div className="col">
                <label className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="1"
                  />
                  <span className="form-check-label">
                    Totalmente en desacuerdo
                  </span>
                </label>
              </div>
              <div className="col">
                <label className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="2"
                  />
                  <span className="form-check-label">En desacuerdo</span>
                </label>
              </div>
              <div className="col">
                <label className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="3"
                  />
                  <span className="form-check-label">
                    Ni de acuerdo ni de desacuerdo
                  </span>
                </label>
              </div>
              <div className="col">
                <label className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio4"
                    value="4"
                  />
                  <span className="form-check-label">De acuerdo</span>
                </label>
              </div>
              <div className="col">
                <label className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio5"
                    value="5"
                  />
                  <span className="form-check-label">
                    Totalmente de acuerdo
                  </span>
                </label>
              </div>
            </div>

            <button className="btn btn-primary m-3 rounded">
              Obtener el valor
            </button>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Escala;
