import React from "react";
//importamos nuestro tipo de letra  en este caso es un archivo css
import "../App.css";
const Consumo = () => {
  //agregamos nuestro planes de suscripcion para simular el pago de nuestro software
  //planes mensuales
  const planes = [
    {
      id: 1,
      nombre: "Plan Mensual Basico",
      precio: "$200",
      duracion: "1 mes",
      creditos: "850",
    },
    {
      id: 2,
      nombre: "Plan Mensual intermedio",
      precio: "$300",
      duracion: "1 mes",
      creditos: "950",
    },
    {
      id: 3,
      nombre: "Plan Mensual Premium",
      precio: "$400",
      duracion: "1 mes",
      creditos: "1000",
    },
  ];

  //planes anuales
  const Planesanuales = [
    {
      id: 1,
      nombre: "Plan Anual Basico",
      precio: "$2000",
      duracion: "1 año",
      creditos: "8500",
    },
    {
      id: 2,
      nombre: "Plan Anual intermedio",
      precio: "$3000",
      duracion: "1 año",
      creditos: "9500",
    },
    {
      id: 3,
      nombre: "Plan Anual Premium",
      precio: "$4000",
      duracion: "1 año",
      creditos: "10000",
    },
  ];
  return (
    <div className="container">
      <p className="h6  text-center opacity-50 m-3 ">
        En este apartado podras consultar de los creditos consumidos por periodo
        que deseas consultar. En este caso cada periodo contestado por los
        empleados es un credito, se mostrara a detalle los consumos. Se
        considera un credito como consumido una vez que se ha iniciado la
        encuesta , aun no haya sido concluido
      </p>
      <br />
      <br />
      <div className="containter text-center">
        <div className="row">
          {/* esta etiqueta se asigno la tabla de creditos consumidos  */}
          <div className="col-4">
            {/* aqui agregamos nuestro credito utilizado que nos va proporcionar el sistemas */}
            <div
              className="border rounded  bg-secondary text-white "
              style={{ height: "150px" }}
            >
              <h4>Credito utilizado</h4>
              <div
                className="border rounded  bg-white text-dark"
                style={{ height: "112px" }}
              >
                <p>800 creditos disponibles </p>
              </div>
            </div>
          </div>
          {/* este etiqueta ira el precio o suscripcion del software que se va usar  */}
          <div className="col-8">
            <div className="border rounded ">
              <p className="border rounded  bg-secondary text-white h3">
                Precio de suscripcion Mensual
              </p>
              {/* agregamos el tabla de nuestro pago del software  */}
              <table className="container table table-striped">
                <thead>
                  <tr className="container border rounded border">
                    <th className="  bg-secondary text-white ">Nombre</th>
                    <th className="  bg-secondary text-white ">precio</th>
                    <th className="  bg-secondary text-white ">Duracion </th>
                    <th className="  bg-secondary text-white ">Creditos</th>
                  </tr>
                </thead>
                <tbody>
                  {planes.map((plan) => (
                    <tr key={plan.id}>
                      <td>{plan.nombre}</td>
                      <td>{plan.precio}</td>
                      <td>{plan.duracion}</td>
                      <td>{plan.creditos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
        {/*  agregamos nuestro datos para el tipo de pago y precios de suscripcion anual  */}
        <div className="row">
          {/* esta etiqueta se asigno la tabla de creditos consumidos  */}
          <div className="col-4">
            {/* aqui agregamos nuestro credito utilizado que nos va proporcionar el sistemas */}
            <div
              className="border rounded  bg-secondary text-white "
              style={{ height: "150px" }}
            >
              <h4>Metodo de pago</h4>
              <div
                className="border rounded  bg-white text-dark"
                style={{ height: "112px" }}
              >
                <p>BBVA</p>
              </div>
            </div>
          </div>
          {/* este etiqueta ira el precio o suscripcion del software que se va usar  */}
          <div className="col-8">
            <div className="border rounded ">
              <p className="border rounded  bg-secondary text-white h3">
                Precio de suscripcion Mensual
              </p>
              {/* agregamos el tabla de nuestro pago del software  */}
              <table className="container table table-striped">
                <thead>
                  <tr className="container border rounded border">
                    <th className="  bg-secondary text-white ">Nombre</th>
                    <th className="  bg-secondary text-white ">precio</th>
                    <th className="  bg-secondary text-white ">Duracion </th>
                    <th className="  bg-secondary text-white ">Creditos</th>
                  </tr>
                </thead>
                <tbody>
                  {Planesanuales.map((plan) => (
                    <tr key={plan.id}>
                      <td>{plan.nombre}</td>
                      <td>{plan.precio}</td>
                      <td>{plan.duracion}</td>
                      <td>{plan.creditos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consumo;
