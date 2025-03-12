import React, { useState } from "react";
import Navtop from "./nav-sidebar/Navtop";
import Sidebar from './nav-sidebar/Sidebar'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = ({ children }) => {
  // Estado para controlar la visibilidad de los submódulos
  const [isEncuestasOpen, setIsEncuestasOpen] = useState(true);
  const [isResultadosOpen, setIsResultadosOpen] = useState(true);
  const [isGeneralesOpen, setIsGeneralesOpen] = useState(true);

  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <div>
      <div className="position-sticky top-0 w-100" style={{zIndex: "10"}}>
        <Navtop toggleSidebar={toggleSidebar}/>
      </div>

      <div className="container-fluid">
        <div className="row">
        <Sidebar
            isEncuestasOpen={isEncuestasOpen}
            setIsEncuestasOpen={setIsEncuestasOpen}
            isResultadosOpen={isResultadosOpen}
            setisResultadosOpen={setIsResultadosOpen}
            isGeneralesOpen={isGeneralesOpen}
            setIsGeneralesOpen={setIsGeneralesOpen}
            isVisible={isSidebarVisible}
          />

          {/* Contenido principal */}
          <div className="col p-4 d-flex justify-content-center"
            style={{ marginLeft: isSidebarVisible ? "250px" : "0px" }}
          >
            {children}

            {/* Puedes agregar más contenido aquí */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
