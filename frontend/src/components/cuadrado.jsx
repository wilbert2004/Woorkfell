import React from 'react'

const Cuadrado = ({ color, tama }) => {
    return (
        <div
            style={{
                width: tama,       // Tamaño del cuadrado
                height: tama,      // Tamaño del cuadrado (ancho = alto)
                backgroundColor: color,  // Color de fondo del cuadrado
            }}
        ></div>
    )
}

export default Cuadrado
