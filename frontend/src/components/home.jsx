import React from "react";
import { Link } from "react-router-dom";
import { BsCalendar2WeekFill } from "react-icons/bs";

const Home = () => {
  return (
    <div>
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
                <span
                  className="fs-5 d-none d-sm-inline letracolor"
                  style={{
                    color: "white",
                    listStyle: "none",
                  }}
                >
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
                <span
                  className="fs-5 d-none d-sm-inline"
                  style={{
                    color: "white",
                    listStyle: "none",
                  }}
                >
                  Periodo
                </span>
              </Link>
            </li>
            {/* modulo de encuesta*/}
            <li>
              <Link className="text-while text-decoration-none me-me-auto pb-3 align-items-center d-flex dropdown-toggle">
                <span
                  className="fs-5 d-none d-sm-inline"
                  style={{
                    color: "white",
                  }}
                >
                  Encuestas
                </span>
              </Link>
              <ul className="w-100 ">
                <li className="collapse show nav flex-column ms-1 ">
                  <Link
                    to="/dimensiones"
                    style={{
                      color: "white",
                    }}
                  >
                    {" "}
                    Dimensiones
                  </Link>
                </li>
              </ul>
              <ul className="w-100">
                <li className="collapse show nav flex-column ms-1">
                  <Link
                    to="/preguntas"
                    className="letracolor"
                    style={{
                      color: "white",
                    }}
                  >
                    Preguntas{" "}
                  </Link>
                </li>
              </ul>
              <ul className="w-100">
                <li className="collapse show nav flex-column ms-1">
                  <Link
                    to="/escalas"
                    style={{
                      color: "white",
                    }}
                  >
                    Escalas
                  </Link>
                </li>
              </ul>
            </li>
            {/* modulo de Resultados */}
            <li></li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
