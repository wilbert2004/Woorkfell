import React, { useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min"; // Asegúrate de que esto está importado

const Navtop = ({ toggleSidebar }) => {

  useEffect(() => {
    // Inicializar los popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popovers = popoverTriggerList.map((popoverTriggerEl) => {
      return new bootstrap.Popover(popoverTriggerEl);
    });

    // Limpiar los popovers al desmontar el componente o cuando cambian las rutas
    return () => {
      popovers.forEach((popover) => {
        popover.dispose();  // Destruye todos los popovers
      });
    };
  }, []); // Se ejecuta solo una vez después de que el componente se haya montado

  return (
    <nav className="navbar border border-secondary navbar-dark text-bg-light position-sticky top-0 w-100">
      <div className="d-flex justify-content-between align-items-center w-100 pe-4">
        <div className="w-25">
          <button className="btn btn-lg btn-light ms-2" onClick={toggleSidebar}>
            <GiHamburgerMenu />
          </button>
          <Link to="/periodo">
            <img className="img-fluid" style={{ width: "60%" }} src="/workfeel-logo.png" alt="Workfeel Logo" />
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
            >
              <FaRegUserCircle style={{ fontSize: "28px" }} />
            </button>
            <span className="ms-2" style={{ fontSize: "16px" }}>
                Crhistopher Gutierrez
              </span>{" "}
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
                  <Link to="/perfil">Perfil</Link>
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  <Link to="/consumo">Consumo</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navtop;
