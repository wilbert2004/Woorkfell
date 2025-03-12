import React from "react";

const Filtroresulta = () => {
  return (
    <div>
      <div
        className="container border mt-4 p-3 d-flex flex-column align-items-center justify-content-around rounded"
        style={{
          paddingBottom: "0.9em",
          height: "auto",
        }}
      >
        <div className="col-xs-12 text-center container">
          <h4
            className="text text-center"
            style={{
              fontSize: "1.3rem", // Usar unidades relativas para tamaños de texto
              opacity: 0.5,
            }}
          >
            Filtrar opciones por dimensiones
          </h4>
          <div className="row ">
            {/* filtros por genero */}
            <div className="col-6  ">
              <h6 className="">Filtrar genero</h6>
              <div className="form-check">
                <select name="" id="" className="w-75 p-1 rounded text-center">
                  <option value="">Todos</option>
                  <option value="">Hombres</option>
                  <option value="">Mujeres</option>
                </select>
              </div>
            </div>
            {/* filtros por edad  */}
            <div className="col-6">
              <h6>Filtrar edad</h6>
              <div className="form-check">
                <select name="" id="" className="w-75 p-1 rounded text-center">
                  <option value="">Todos</option>
                  <option value="">18-24 años</option>
                  <option value="">25-34 años</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Filtros por departamentos */}
            <div className="col-6">
              <h6>Filtrar departamento</h6>
              <div className="form-check">
                <select name="" id="" className="w-75 p-1 rounded text-center">
                  <option value="">Todos</option>
                  <option value="">Aguascalientes</option>
                  <option value="">Baja California</option>
                </select>
              </div>
            </div>
            {/* filtros por puestos */}
            <div className="col-6">
              <h6>Filtrar Puesto </h6>
              <div className="form-check">
                <select name="" id="" className="w-75 p-1 rounded text-center">
                  <option value="">Todos</option>
                  <option value="">Desarrollador back-end</option>
                  <option value="">Desarrollador front-end</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Filtrar centro de trabajo  */}
            <div className="col-6">
              <h6>Filtrar centro de trabajo</h6>
              <div className="form-check">
                <select name="" id="" className="w-75 p-1 rounded text-center">
                  <option value="">Todos</option>
                  <option value="">Centro de desarrollo</option>
                  <option value="">Centro de soporte</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <h6>Filtrar rango antiguedad</h6>
              <div className="form-check ">
                <select name="" id="" className="w-75 p-1 rounded text-center">
                  <option value="">Todos</option>
                  <option value="">1 a 5 años</option>
                  <option value="">6 a 10 años</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtroresulta;
