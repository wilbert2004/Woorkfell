import React from "react";


interface Props{
  color: string;
  width: string;
  height: string;
  letra: string;

}
const cuadrado:React.FC<Props> = ({ color,width,height,letra}) => {
  return (
    <div>
      <div style={{
        width: width,
        height: height,
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "calc(0.5 * " + width + ")"
      }}>
        {letra}
      </div>
    </div>
  )
}

export default cuadrado


