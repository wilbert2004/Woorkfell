import React, { useState, useEffect } from "react";
import Navtop from "./nav-sidebar/Navtop";
import Sidebar from './nav-sidebar/Sidebar';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = ({ children }) => {
  // Recuperar el estado guardado desde localStorage o usar valores predeterminados
  const getInitialState = () => {
    const savedState = localStorage.getItem("sidebarState");
    return savedState
      ? JSON.parse(savedState)
      : {
          isEncuestasOpen: true,
          isResultadosOpen: true,
          isGeneralesOpen: true,
        };
  };

  // Estado para controlar la visibilidad de los submódulos
  const [sidebarState, setSidebarState] = useState(getInitialState);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Actualizar localStorage cada vez que cambie el estado
  useEffect(() => {
    localStorage.setItem("sidebarState", JSON.stringify(sidebarState));
  }, [sidebarState]);

  // Función para alternar el estado de una sección
  const toggleSection = (section) => {
    setSidebarState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Función para mostrar/ocultar la barra lateral
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {/* Navbar Fija */}
      <div className="position-sticky top-0 w-100" style={{ zIndex: "10" }}>
        <Navtop toggleSidebar={toggleSidebar} />
      </div>

      {/* Contenido principal */}
      <div className="container-fluid">
        <div className="row">
          <Sidebar
            isEncuestasOpen={sidebarState.isEncuestasOpen}
            setIsEncuestasOpen={() => toggleSection("isEncuestasOpen")}
            isResultadosOpen={sidebarState.isResultadosOpen}
            setIsResultadosOpen={() => toggleSection("isResultadosOpen")}
            isGeneralesOpen={sidebarState.isGeneralesOpen}
            setIsGeneralesOpen={() => toggleSection("isGeneralesOpen")}
            isVisible={isSidebarVisible}
          />

          {/* Contenido principal */}
          <div
            className="col p-4 d-flex justify-content-center"
            style={{ marginLeft: isSidebarVisible ? "250px" : "0px" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
