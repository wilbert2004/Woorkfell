import { useState } from "react";
import { FaCalendarAlt, FaPoll, FaChartBar, FaCogs, FaChevronDown, FaChevronRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isVisible, isEncuestasOpen, setIsEncuestasOpen, isResultadosOpen, setIsResultadosOpen, isGeneralesOpen, setIsGeneralesOpen }) => {

  const toggleSection = (section) => {
    if(section==="Encuestas"){
      setIsEncuestasOpen((prev) => !prev)
    }
    else if (section==="Resultados") {
      setIsResultadosOpen((prev) => !prev)
    }
    else if (section==="Generales"){
      setIsGeneralesOpen((prev) => !prev)
    }
  };

  return (
    <div 
    className={`sidebar flex-column vh-100 bg-dark text-light p-3 ${isVisible ? "d-flex" : "d-none"}`}
        style={{width: "250px", transition: "transform 0.3s ease"}}>
      <h5 className="text-uppercase fw-bold mb-3">Módulos</h5>

      {/* Periodo */}
      <div className="mb-2">
        <Link to="/periodo" className="text-decoration-none text-white">
            <button className="btn btn-secondary w-100 text-start d-flex align-items-center">
            <FaCalendarAlt className="me-2" />
            Período
            </button>
        </Link>
      </div>

      {/* Encuestas */}
      <div className="mb-2">
        <button className="btn btn-dark w-100 text-start d-flex align-items-center" onClick={() => toggleSection("Encuestas")}>
          <FaPoll className="me-2" />
          Encuestas
          {isEncuestasOpen ? <FaChevronDown className="ms-auto" /> : <FaChevronRight className="ms-auto" />}
        </button>
        {isEncuestasOpen && (
          <div className="ms-4 mt-2">
            <Link to="/dimensiones" className="text-white text-decoration-none"><p className="mb-3">• Dimensiones</p></Link>
            <Link to="/preguntas" className="text-white text-decoration-none"><p className="mb-3">• Preguntas</p></Link>
            <Link to="/escalas" className="text-white text-decoration-none"><p className="mb-3">• Escalas</p></Link>
          </div>
        )}
      </div>

      {/* Resultados */}
      <div className="mb-2">
        <button className="btn btn-dark w-100 text-start d-flex align-items-center" onClick={() => toggleSection("Resultados")}>
          <FaChartBar className="me-2" />
          Resultados
          { isResultadosOpen ? <FaChevronDown className="ms-auto" /> : <FaChevronRight className="ms-auto" />}
        </button>
        { isResultadosOpen && (
          <div className="ms-4 mt-2">
            <Link to="/Resultados" className="text-white text-decoration-none"><p className="mb-3">• Resultado</p></Link>
            <Link to="/Nivelsatisfaccion" className="text-white text-decoration-none"><p className="mb-3">• Niveles de satisfacción</p></Link>
            <Link to="/Comparacion" className="text-white text-decoration-none"><p className="mb-3">• Comparar períodos</p></Link>
          </div>
        )}
      </div>

      {/* Generales */}
      <div>
        <button className="btn btn-dark w-100 text-start d-flex align-items-center" onClick={() => toggleSection("Generales")}>
          <FaCogs className="me-2" />
          Generales
          {isGeneralesOpen ? <FaChevronDown className="ms-auto" /> : <FaChevronRight className="ms-auto" />}
        </button>
        {isGeneralesOpen && (
          <div className="ms-4 mt-2">
            <Link to="/Listapuestos" className="text-white text-decoration-none"><p className="mb-3">• Lista de puestos</p></Link>
            <Link to="/Planaccion" className="text-white text-decoration-none"><p className="mb-3">• Plan de acción</p></Link>
            <Link to="/Configuracion" className="text-white text-decoration-none"><p className="mb-3">• Configuraciones</p></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
