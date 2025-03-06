import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";
const Formulario = () => {
  return (
    <div className="container ">
      <div className="d-flex justify-content-center align-items-center flex-column flex-md-row text-center text-md-start m-3">
        <div className="mb-3 mb-md-0 me-md-3">
          <BsExclamationTriangle size={35} />
        </div>
        <div>
          <h4 className="text-primary">Lee cuidadosamente</h4>
        </div>
      </div>
      <div className="w-100 border">
        <div className="text-center">
          <h3 className="m-3">Indicaciones generales</h3>
        </div>
        <p className="m-3 text-secondary">
          Medicion de Clima Laboral <br />
          El proposito de esta encuestas es garantizar que todos los
          colaboradores de la organizacion se beneficien con las opiniones ,
          aportes y sugerencias que se obtengan a traves de este instrumento.{" "}
          <br />
          Los resultados obtenidos seran utiliaacion para: <br />
          <li>
            <ul>Identificar fortalezas y oportunidades de la operacion</ul>
            <ul>Generar planes de accion</ul>
            <ul>Implementar acciones de cambios</ul>
          </li>
          <br />
          Los resultados seran revisados y tabulados por worfeel y lainformacion
          recopilada sera manejada con total confidencialidad , objetividad y
          cuidado el anonimato de cada persona. A la vez los resultados
          obtenidos seran entregados a Recursos Humanos
          <br />
          Funcionamiento del sistema :
          <li>
            <ul>
              Se mostrara un formulario el cual debera de llenar, seleccionando
              los valores que definan su rol de centro de la organizacion
            </ul>
          </li>
        </p>
      </div>
      {/*  boton de de siguiente */}
      <div className="d-flex justify-content-center align-items-center m-3">
        <button type="button" className="btn btn-primary">
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Formulario;
