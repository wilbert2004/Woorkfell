import React, { useState } from "react";
import Navtop from "./nav-sidebar/Navtop";
import Sidebar from "./nav-sidebar/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

interface HomeProps {
  children?: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  const [isEncuestasOpen, setIsEncuestasOpen] = useState(true);
  const [isResultadosOpen, setIsResultadosOpen] = useState(true);
  const [isGeneralesOpen, setIsGeneralesOpen] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <div className="position-sticky top-0 w-100" style={{ zIndex: "10" }}>
        <Navtop toggleSidebar={toggleSidebar} />
      </div>

      <div className="container-fluid">
        <div className="row">

          <div
            className="col p-4 d-flex justify-content-center"
            style={{ marginLeft: isSidebarVisible ? "250px" : "0px" }}
          >
            {children || <p>No hay contenido para mostrar</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;