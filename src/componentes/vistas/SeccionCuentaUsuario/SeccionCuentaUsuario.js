import React from "react";
import ImagenCuentaPorDefecto from "./Default.svg.png";
import "./estilos/seccionCuentaUsuario.scss";

const SeccionCuentaUsuario = (props) => {
  return (
    <div>
      <div className="contenedor">
        <div className="vista-cuenta">
          <img className="vista-cuenta-imagen" src={ImagenCuentaPorDefecto} />
          <p className="vista-cuenta-nombreUsuario">Nombre de Usuario</p>
          <button className="vista-cuenta-boton" type="submit">
            Actualizar Imagen
          </button>
        </div>
        <form className="editar-cuenta">
          <p>
            <label>Nombre</label>
            <input
              type="text"
              name="Nombre"
              className="editar-cuenta-entrada"
            />
          </p>
          <p>
            <label>Apellido</label>
            <input
              type="text"
              name="Apellido"
              className="editar-cuenta-entrada"
            />
          </p>
          <p>
            <label>Nombre de Usuario</label>
            <input
              type="text"
              name="Nombre de Usuario"
              className="editar-cuenta-entrada"
            />
          </p>
          <p>
            <label>Correo</label>
            <input
              type="text"
              name="Correo"
              className="editar-cuenta-entrada"
            />
          </p>
          <p>
            <label>Contraseña</label>
            <input type="text" name="clave" className="editar-cuenta-entrada" />
          </p>
          <p>
            <label>Biografia</label>
            <input
              type="text"
              name="Biografia"
              className="editar-cuenta-entrada"
            />
          </p>
          <p>
            <input
              type="submit"
              value="Guardar"
              className="editar-cuenta-boton-enviar"
            />
          </p>
        </form>
      </div>
      <div className="eliminar-perfil">
        <button className="eliminar-perfil-boton" type="submit">
          Eliminar Perfil
        </button>
      </div>
    </div>
  );
};

export default SeccionCuentaUsuario;
