import React from "react";

const Cuadrado = ({ color, width, height, letra }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {letra}
    </div>
  );
};
export default Cuadrado;
