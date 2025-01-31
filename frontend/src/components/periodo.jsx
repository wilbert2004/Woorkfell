import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./home";
import { Table, Button, Dropdown } from "react-bootstrap";

const Periodo = () => {
  const [periodos, setPeriodos] = useState([]);

  useEffect(() => {
    // Simular una llamada a la API para obtener los periodos
    axios.get("/api/periodos").then((response) => {
      setPeriodos(response.data);
    }).catch((error) => {
      console.error("Error al obtener los periodos:", error);
    });
  }, []);

  const handleNuevoPeriodo = () => {
    // Lógica para agregar un nuevo periodo
  };

  return (
    <Home>
      <h1>Gestión del Periodo</h1>
      <p>
        Indicaciones: en este modulo podras agregar, editar y eliminar periodos de
        evaluacion, solo podras tener un periodo activo a la vez. La fecha de inicio y
        cierre indica el tiempo en que el periodo estará activo. El estado del periodo
        indica si esta activo o se considera un periodo cerrado. Para los casos en que
        no deseas que los encuestados respondan ingresando a la encuesta con un usuario
        y una clave, utiliza el enlace.
      </p>
      <Button style={{ backgroundColor: "#6200EE", color: "white", padding: "10px", borderRadius: "5px" }} onClick={handleNuevoPeriodo}>
        + Nuevo periodo
      </Button>
      <Table striped bordered hover style={{ marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>Periodos</th>
            <th>Estado</th>
            <th>Fecha de inicio</th>
            <th>Fecha de cierre</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {periodos.map((periodo) => (
            <tr key={periodo.id}>
              <td>{periodo.nombre}</td>
              <td>{periodo.estado}</td>
              <td>{periodo.fechaInicio}</td>
              <td>{periodo.fechaCierre}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Opciones
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Editar</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Eliminar</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Home>
  );
};

export default Periodo;

