import React, { useEffect, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

interface NavtopProps {
  toggleSidebar: () => void; // toggleSidebar es una función que no retorna nada
}

const Navtop: React.FC<NavtopProps> = ({ toggleSidebar }) => {

  const [auth] = useState("Administrativo")

  return (
    <nav className="navbar border border-secondary navbar-dark text-bg-light position-sticky top-0 w-100">
      <div className="d-flex justify-content-between align-items-center w-100 pe-4">
        <div className="w-75">
          <button
            className="btn btn-lg btn-light ms-2"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <GiHamburgerMenu />
          </button>
          <Link to="/periodo">
            <img
              className="img-fluid"
              style={{ width: "250px" }}
              src="/workfeel-logo.png"
              alt="Workfeel Logo"
            />
          </Link>
        </div>

        {/* Ícono de notificación, Perfil y nombre */}
        <div className="d-flex align-items-center">
          <button
            type="button"
            className="btn"
            data-bs-toggle="popover"
            title="Notificaciones"
            data-bs-content="No tienes notificaciones por leer."
            style={{
              background: "transparent",
              border: "none",
              marginLeft: "10px",
            }}
            aria-label="Notificaciones"
          >
            <IoIosNotifications style={{ fontSize: "30px" }} />
          </button>

          <div className="dropdown">
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
              aria-label="Opciones de usuario"
            >
              <FaRegUserCircle style={{ fontSize: "28px" }} />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenu2"
            >
              <li>
                <Link to="/Ajustes" className="dropdown-item">
                  Ajustes
                </Link>
              </li>
              <li>
                <Link to="/perfil" className="dropdown-item">
                  Perfil
                </Link>
              </li>
              <li>
                <Link to="/consumo" className="dropdown-item">
                  Consumo
                </Link>
              </li>
              <li>
                <Link to="/logout" className="dropdown-item">
                  Cerrar Sesión
                </Link>
              </li>
              {auth === "Administrativo" &&
                <li>
                  {/* este solo tendra acceso el admin  */}

                  <Link to="/Panel_Administrativo" className="dropdown-item">
                    Panel Administrativo
                  </Link>
                </li>
              }
            </ul>
          </div>
          <span className="ms-2" style={{ fontSize: "16px" }}>
            Crhistopher Gutierrez
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navtop;