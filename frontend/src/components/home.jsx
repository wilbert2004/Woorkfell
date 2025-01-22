import React from "react";
import { Link } from "react-router-dom";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { FaUsersGear } from "react-icons/fa6";
import { BsQuestion } from "react-icons/bs";
import { BsReceipt } from "react-icons/bs";
import { BsQuestionDiamond } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { BiCog } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light ">
        <div className="profile-section">
          <FaRegUserCircle className="circle" />
          <h3 className="font-inter-bold">WILBERT OLIVER CHAN</h3>
        </div>
      </nav>
      <div className="container-fluid ">
        <div className=" row flex-nowrap ">
          <div
            className="col-auto col-md-3 col-xl-2 px-sm-5 px-0 "
            style={{
              backgroundColor: "#636363",
            }}
          >
            <li>
              <Link
                to="/home"
                className="text-while text-decoration-none me-me-auto pb-3 align-items-center d-flex "
              >
                <span className="fs-5 d-none d-sm-inline letracolor">
                  Workfeel
                </span>
              </Link>
            </li>
            {/* modulo de periodo con sus rutas */}
            <li
              style={{
                //quitar los puntitos
                listStyle: "none",
              }}
            >
              <Link
                to="/periodo"
                className="text-white text-decoration-none me-auto pb-3 align-items-center d-flex"
              >
                <span style={{ color: "white", marginRight: "10px" }}>
                  <BsCalendar2WeekFill />
                </span>
                <span className="fs-5 d-none d-sm-inline letracolor">
                  Periodo
                </span>
              </Link>
            </li>
            {/* modulo de encuesta*/}
            <li>
              <Link className="text-while text-decoration-none me-me-auto pb-3 align-items-center d-flex dropdown-toggle">
                <span style={{ color: "white", marginRight: "10px" }}>
                  <BsCalendar2Date />
                </span>
                <span className="fs-5 d-none d-sm-inline letracolor">
                  Encuestas
                </span>
              </Link>
              <ul className="w-100 ">
                <li className="collapse show nav flex-column ms-1 ">
                  <Link to="/dimensiones" className="letracolor">
                    <span style={{ color: "white", marginRight: "10px" }}>
                      <FaUsersGear />
                    </span>{" "}
                    Dimensiones
                  </Link>
                </li>
              </ul>
              <ul className="w-100">
                <li className="collapse show nav flex-column ms-1">
                  <Link to="/preguntas" className="letracolor">
                    <span style={{ color: "white", marginRight: "10px" }}>
                      <BsQuestion />
                    </span>{" "}
                    Preguntas{" "}
                  </Link>
                </li>
              </ul>
              <ul className="w-100">
                <li className="collapse show nav flex-column ms-1">
                  <Link to="/escalas" className="letracolor">
                    <span style={{ color: "white", marginRight: "10px" }}>
                      <FaUsersGear />
                    </span>{" "}
                    Escalas
                  </Link>
                </li>
              </ul>
            </li>
            {/* modulo de Resultados */}
            <li>
              <Link className="text-while text-decoration-none me-me-auto pb-3 align-items-center d-flex dropdown-toggle">
                <span style={{ color: "white", marginRight: "10px" }}>
                  <BsReceipt />
                </span>
                <span className="fs-5 d-none d-sm-inline letracolor">
                  Resultados
                </span>
              </Link>
              {/* submodulo de resultados  */}
              <ul className="w-100 ">
                <li className="collapse show nav flex-column ms-1 ">
                  <Link to="/Resultados" className="letracolor">
                    <span style={{ color: "white", marginRight: "10px" }}>
                      <BsQuestionDiamond />
                    </span>{" "}
                    Resultado
                  </Link>
                </li>
              </ul>
              <ul className="w-100 ">
                <li className="collapse show nav flex-column ms-1 ">
                  <Link to="/Nivelsatisfaccion" className="letracolor">
                    <span style={{ color: "white", marginRight: "10px" }}>
                      <BsBarChart />
                    </span>{" "}
                    Niveles de satifaccion
                  </Link>
                </li>
              </ul>
              <ul className="w-100 ">
                <li className="collapse show nav flex-column ms-1 ">
                  <Link to="/Comparacion" className="letracolor">
                    <span style={{ color: "white", marginRight: "10px" }}>
                      <FaUsers />
                    </span>{" "}
                    Comparar Periodo
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="text-while text-decoration-none me-me-auto pb-3 align-items-center d-flex dropdown-toggle">
                <span style={{ color: "white", marginRight: "10px" }}>
                  <BsGear />
                </span>
                <span className="fs-5 d-none d-sm-inline letracolor">
                  Generales
                </span>
              </Link>
              <ul className="w-100 ">
                <li className="collapse show nav flex-column ms-1 ">
                  <Link to="/Listapuestos" className="letracolor">
                    <span style={{ color: "white", marginRight: "10px" }}>
                      <CiViewList />
                    </span>{" "}
                    Lista de puesto
                  </Link>
                </li>
              </ul>
              <ul className="w-100 ">
                <li className="collapse show nav flex-column ms-1 ">
                  <Link to="/Planaccion" className="letracolor">
                    <span style={{ color: "white", marginRight: "10px" }}>
                      <CiViewList />
                    </span>{" "}
                    Plan de accion
                  </Link>
                </li>
              </ul>
              <ul className="w-100">
                <li className="collapse show nav flex-column ms-1">
                  <Link to="/Planaccion" className="letracolor">
                    <span style={{ color: "white", marginRight: "10px" }}>
                      <BiCog />
                    </span>
                    {""}
                    Configuraciones
                  </Link>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
