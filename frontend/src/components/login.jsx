import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar Bootstrap
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [goHome, setGoHome] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Cambiar el estado
    setGoHome(true);

    // Redirigir al usuario
    navigate("/home");
  };

  return (
    <div className="container mt-5">
      {/* Contenedor central para el formulario */}
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          {/* Título principal */}
          <h3 className="alkatra-custom fw-bold mb-1 letra">Bienvenido a</h3>
          <h1
            className="amaranth-bold text-black-50 fw-bold mb-4  letra1"
            style={{
              letterSpacing: "15px",
            }}
          >
            Workfeel
          </h1>
          <br />

          {/* Formulario */}
          <form onSubmit={handleSubmit}>
            <h4 className="fw-semibold mb- 1">Username</h4>
            <div className="input-group w-75 mx-auto mb-3">
              {/* Ícono dentro del input */}
              <span className="input-group-text bg-light rounded-start-pill">
                <FaRegUserCircle />
              </span>
              <input
                type="text"
                id="username"
                placeholder="Ingresa tu nombre"
                className="form-control rounded-end-pill text-center fw-bold  dimension"
              />
            </div>
            <br />
            <h4 className="fw-semibold mb-1">Password</h4>
            <div className="input-group w-75 mx-auto">
              {/* Ícono dentro del input */}
              <span className="input-group-text bg-light rounded-start-pill">
                <RiLockPasswordFill />
              </span>
              <input
                type="text"
                id="username"
                placeholder="password"
                className="form-control rounded-end-pill text-center fw-bold dimension"
              />
            </div>

            <div className="text-center mb-3">
              <button
                className="btn btn-link text-danger"
                style={{
                  textDecoration: "none", // Elimina el subrayado
                }}
              >
                Olvidaste tu contraseña?
              </button>
            </div>

            <div>
              <button
                className="btn btn-primary mb-1 w-20 p-3 "
                style={{
                  borderRadius: "15px",
                }}
                onClick={handleSubmit}
              >
                INICIAR SESION
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
