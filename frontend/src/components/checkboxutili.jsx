import React from "react";

const Checkboxutili = () => {
  return (
    <div>
      <div
        className="container border mt-4 p-3 d-flex flex-column align-items-center justify-content-around rounded text-center"
        style={{
          paddingBottom: "0.9em",
        }}
      >
        <h5 className="opacity-50 p-2">
          Mostrar Desglose con Dimension de grafica{" "}
        </h5>

        <div className="container">
          <div className="row">
            {/* contenedor de generon */}
            <div className="col ">
              <label
                className="border p-2  rounded w-50"
                style={{
                  backgroundColor: "#D9D9D9",
                  color: "#333",
                }}
              >
                <input
                  type="checkbox"
                  id="cbox1"
                  value="first_checkbox"
                  className="w-25"
                />{" "}
                Genero
              </label>
            </div>
            <div className="col">
              <label
                className="border p-2  rounded w-50"
                style={{
                  backgroundColor: "#D9D9D9",
                  color: "#333",
                }}
              >
                <input
                  type="checkbox"
                  id="cbox2"
                  value="second_checkbox"
                  className="w-25"
                />{" "}
                Edad
              </label>
            </div>
            <div className="col">
              <label
                className="border p-2  rounded w-50"
                style={{
                  backgroundColor: "#D9D9D9",
                  color: "#333",
                }}
              >
                <input
                  type="checkbox"
                  id="cbox3"
                  value="third_checkbox"
                  className="w-25"
                />{" "}
                Departamento
              </label>
            </div>
          </div>
          <div className="row p-3">
            <div className="col">
              <label
                className="border p-2  rounded w-50"
                style={{
                  backgroundColor: "#D9D9D9",
                  color: "#333",
                }}
              >
                <input
                  type="checkbox"
                  id="cbox4"
                  value="fourth_checkbox"
                  className="w-25"
                />{" "}
                Puesto
              </label>
            </div>
            <div className="col">
              <label
                className="border p-2  rounded w-75"
                style={{
                  backgroundColor: "#D9D9D9",
                  color: "#333",
                }}
              >
                <input
                  type="checkbox"
                  id="cbox5"
                  value="fifth_checkbox"
                  className=""
                />{" "}
                Centro de trabajo
              </label>
            </div>
            <div className="col">
              <label
                className="border p-2  rounded w-75"
                style={{
                  backgroundColor: "#D9D9D9",
                  color: "#333",
                }}
              >
                <input
                  type="checkbox"
                  id="cbox5"
                  value="fifth_checkbox"
                  className=""
                />{" "}
                Antiguedad
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkboxutili;
