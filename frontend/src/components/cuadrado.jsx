import React from "react";

const Cuadrado = ({ color, tama }) => {
  const estiloCuadrado = {
    width: tama, // Ancho del cuadrado
    height: tama, // Alto del cuadrado
    backgroundColor: color, // Color de fondo
  };

  return <div style={estiloCuadrado}></div>;
};

export default Cuadrado;
