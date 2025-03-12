import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BsCalendar2WeekFill,
  BsCalendar2Date,
  BsReceipt,
  BsGear,
} from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { IoIosNotifications } from "react-icons/io";

const Home = ({ children }) => {
  // Estado para controlar la visibilidad de los submódulos
  const [isEncuestasOpen, setIsEncuestasOpen] = useState(true);
  const [isResultadosOpen, setIsResultadosOpen] = useState(true);
  const [isGeneralesOpen, setIsGeneralesOpen] = useState(true);

  const location = useLocation();
  const username = location.state?.username || "Usuario";

  return (
    <div>
      <div
        className="dropdown position-sticky top-0 w-100"
        style={{
          backgroundColor: "white", // Fondo blanco sólido
          zIndex: "10",
        }}
      >
        <nav
          className="navbar navbar-light bg-light"
          style={{
            borderBottom: "1px solid black", // Línea negra debajo del navbar
            padding: "0", // Eliminar margen y relleno
            // Asegura que el navbar esté encima de otros elementos
          }}
        >
          <div
            className="profile-section d-flex justify-content-between align-items-center w-100"
            style={{
              background: "white",
              width: "100%",
              height: "60px",
              padding: "0 20px",
            }}
          >
            {/* Nombre casi centrado */}
            <h3
              style={{
                flex: 1,
                textAlign: "left", // Alineado a la izquierda pero más cercano al centro
                marginLeft: "20%", // Ajuste para acercarlo al centro
              }}
            >
              Bienvenido {username}
            </h3>

            {/* Ícono de notificación solo visible */}
            <button
              style={{
                background: "transparent",
                border: "none",
                marginLeft: "10px",
              }}
            >
              <IoIosNotifications style={{ fontSize: "24px" }} />
            </button>

            {/* Perfil y nombre */}
            <div className="d-flex align-items-center">
              <button
                className="btn btn-light bg-transparent dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  borderRadius: "50%", // Perfil en círculo
                  backgroundColor: "white",
                  padding: "5px",
                  marginLeft: "10px",
                }}
              >
                <FaRegUserCircle style={{ fontSize: "28px" }} />
              </button>
              <span className="ms-2" style={{ fontSize: "16px" }}>
                {username}
              </span>{" "}
              {/* Nombre al lado del perfil */}
              {/* Menú desplegable */}
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <button className="dropdown-item" type="button">
                    <Link to="/Ajustes">Ajustes</Link>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    <Link to="/Perfil">Perfil</Link>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item " type="button ">
                    {/* agregamos nuestros link de ruta paara consumo */}
                    <Link to="/Consumo"> consumo</Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container-fluid ">
        <div className="row flex-nowrap">
          <div
            className="col-auto col-md-3 col-xl-2 px-sm-5 px-0 position-fixed top-10 start-0"
            style={{
              backgroundColor: "#636363",
              minHeight: "100vh",
              overflowY: "auto",
              paddingTop: "20px",
            }}
          >
            <h6
              style={{
                color: "white",
                fontSize: "12px",
              }}
            >
              Modulos
            </h6>

            <ul style={{ listStyleType: "none", padding: 0 }}>
              {/* Modulo de Periodo */}
              <li className="nav-item" style={{ marginBottom: "20px" }}>
                <Link
                  to="/periodo"
                  className="btn btn-dark text-white w-100 text-left d-flex align-items-center"
                  style={{
                    backgroundColor: "#343a40",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  <BsCalendar2WeekFill style={{ marginRight: "10px" }} />
                  <span className="fs-6">Periodo</span>
                </Link>
              </li>

              {/* Modulo de Encuestas */}
              <li className="nav-item" style={{ marginBottom: "20px" }}>
                <button
                  className="btn btn-dark text-white w-100 text-left"
                  type="button"
                  onClick={() => setIsEncuestasOpen(!isEncuestasOpen)}
                  style={{
                    backgroundColor: "#343a40",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  <BsCalendar2Date style={{ marginRight: "10px" }} />
                  Encuestas
                </button>
                <ul className={`collapse ${isEncuestasOpen ? "show" : ""}`}>
                  <li>
                    <Link
                      to="/dimensiones"
                      className="text-white text-decoration-none d-flex align-items-center ps-4 py-2"
                      style={{ fontSize: "14px" }}
                    >
                      Dimensiones
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/preguntas"
                      className="text-white text-decoration-none d-flex align-items-center ps-4 py-2"
                      style={{ fontSize: "14px" }}
                    >
                      Preguntas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/escalas"
                      className="text-white text-decoration-none d-flex align-items-center ps-4 py-2"
                      style={{ fontSize: "14px" }}
                    >
                      Escalas
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Modulo de Resultados */}
              <li className="nav-item" style={{ marginBottom: "20px" }}>
                <button
                  className="btn btn-dark text-white w-100 text-left"
                  type="button"
                  onClick={() => setIsResultadosOpen(!isResultadosOpen)}
                  style={{
                    backgroundColor: "#343a40",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  <BsReceipt style={{ marginRight: "10px" }} />
                  Resultados
                </button>
                <ul className={`collapse ${isResultadosOpen ? "show" : ""}`}>
                  <li>
                    <Link
                      to="/Resultados"
                      className="text-white text-decoration-none d-flex align-items-center ps-4 py-2"
                      style={{ fontSize: "14px" }}
                    >
                      Resultado
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Nivelsatisfaccion"
                      className="text-white text-decoration-none d-flex align-items-center ps-4 py-2"
                      style={{ fontSize: "14px" }}
                    >
                      Niveles de Satisfacción
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Comparacion"
                      className="text-white text-decoration-none d-flex align-items-center ps-4 py-2"
                      style={{ fontSize: "14px" }}
                    >
                      Comparar Periodo
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Modulo de Generales */}
              <li className="nav-item" style={{ marginBottom: "20px" }}>
                <button
                  className="btn btn-dark text-white w-100 text-left"
                  type="button"
                  onClick={() => setIsGeneralesOpen(!isGeneralesOpen)}
                  style={{
                    backgroundColor: "#343a40",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  <BsGear style={{ marginRight: "10px" }} />
                  Generales
                </button>
                <ul className={`collapse ${isGeneralesOpen ? "show" : ""}`}>
                  <li>
                    <Link
                      to="/Listapuestos"
                      className="text-white text-decoration-none d-flex align-items-center ps-4 py-2"
                      style={{ fontSize: "14px" }}
                    >
                      Lista de Puestos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Planaccion"
                      className="text-white text-decoration-none d-flex align-items-center ps-4 py-2"
                      style={{ fontSize: "14px" }}
                    >
                      Plan de Acción
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Configuracion"
                      className="text-white text-decoration-none d-flex align-items-center ps-4 py-2"
                      style={{ fontSize: "14px" }}
                    >
                      Configuraciones
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Contenido principal */}
          <div className="col p-4" style={{ marginLeft: "250px" }}>
            {children}

            {/* Puedes agregar más contenido aquí */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
