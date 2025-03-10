import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar Bootstrap
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const usuarios = [
  { username: "admin", password: "admin123", role: "administrador" },
  { username: "dev", password: "dev123", role: "desarrollador" },
  { username: "buyer", password: "buyer123", role: "comprador" },
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = usuarios.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Redirigir al usuario según el rol
      if (user.role === "administrador") {
        navigate("/periodo");
      } else if (user.role === "desarrollador") {
        navigate("/periodo");
      } else if (user.role === "comprador") {
        navigate("/periodo");
      }
    } else {
      setError("Credenciales incorrectas");
    }
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                type="password"
                id="password"
                placeholder="password"
                className="form-control rounded-end-pill text-center fw-bold dimension"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />

            {error && <div className="text-danger mb-3">{error}</div>}

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
                type="submit"
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
