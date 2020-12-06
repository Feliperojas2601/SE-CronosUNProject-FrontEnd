import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import BarraNavegacion from "./BarraNavegacion.js";
import InicioDeSesion from "./vistas/InicioDeSesion/InicioDeSesion.js";
import Registro from "./vistas/Registro/Registro.js";
import RecuperacionClave from "./vistas/RecuperacionClave/RecuperacionClave.js";
import SeccionInicio from "./vistas/SeccionInicio/SeccionInicio.js";
import SeccionCuentaUsuario from "./vistas/SeccionCuentaUsuario/SeccionCuentaUsuario.js";
import SeccionHorarioAsignaturas from "./vistas/SeccionHorarioAsignaturas/SeccionHorarioAsignaturas.js";
import SeccionHorarioPersonal from "./vistas/SeccionHorarioPersonal/SeccionHorarioPersonal.js";
import SeccionPortafolio from "./vistas/SeccionPortafolio/SeccionPortafolio.js";
import SeccionConsultaPortafolio from "./vistas/SeccionConsultaPortafolio/SeccionConsultaPortafolio.js";
import SeccionInscripcionMaterias from "./vistas/SeccionInscripcionMaterias/SeccionInscripcionMaterias.js";
import SeccionEditor from "./vistas/SeccionEditor/SeccionEditor";
import VisualizacionProyecto from "./vistas/SeccionPortafolio/ComponentesPortafolio/VisualizacionProyecto.js";
import PieDePagina from "./PieDePagina.js";

import "./estilos/app.scss";

import {
   RUTA_INICIO,
   RUTA_INICIO_SESION,
   RUTA_REGISTRO,
   RUTA_REC_CLAVE,
   RUTA_CUENTA_USUARIO,
   RUTA_SEC_HORARIO_ASIG,
   RUTA_SEC_HORARIO_PERSONAL,
   RUTA_SEC_PORTAFOLIO,
   RUTA_SEC_VISUALIZACION_PROYECTO,
   RUTA_SEC_PROYECTOS_PUBLICOS,
   RUTA_SEC_EDITOR,
   RUTA_SEC_INSCRIPCION_MATERIAS,
} from "../utilidad/rutas.js";

function App() {
   const [token, setToken] = useState("");
   const [idUsuario, setIdUsuario] = useState("");
   return (
      <div className="App">
         <BarraNavegacion />
         <Switch>
            <Route exact path={RUTA_INICIO_SESION}>
               <InicioDeSesion auth={setToken} idUsuario={setIdUsuario} />
            </Route>
            <Route exact path={RUTA_REGISTRO}>
               <Registro auth={setToken} idUsuario={setIdUsuario} />
            </Route>
            <Route exact path={RUTA_REC_CLAVE}>
               <RecuperacionClave auth={`Bearer ${token}`} />
            </Route>
            <Route exact path={RUTA_INICIO}>
               <SeccionInicio auth={token} idUsuario={idUsuario} />
            </Route>
            <Route exact path={RUTA_CUENTA_USUARIO}>
               <SeccionCuentaUsuario auth={token} idUsuario={idUsuario} />
            </Route>
            <Route exact path={RUTA_SEC_HORARIO_ASIG}>
               <SeccionHorarioAsignaturas auth={token} idUsuario={idUsuario} />
            </Route>
            <Route exact path={RUTA_SEC_HORARIO_PERSONAL}>
               <SeccionHorarioPersonal auth={token} idUsuario={idUsuario} />
            </Route>
            <Route exact path={RUTA_SEC_PORTAFOLIO}>
               <SeccionPortafolio auth={token} idUsuario={idUsuario} />
            </Route>
            <Route exact path={RUTA_SEC_VISUALIZACION_PROYECTO}>
               <VisualizacionProyecto auth={token} idUsuario={idUsuario} />
            </Route>
            <Route exact path={RUTA_SEC_PROYECTOS_PUBLICOS}>
               <SeccionConsultaPortafolio auth={`Bearer ${token}`} idUsuario={idUsuario} />
            </Route>
            <Route exact path={RUTA_SEC_INSCRIPCION_MATERIAS}>
               <SeccionInscripcionMaterias auth={token} idUsuario={idUsuario} />
            </Route>
            <Route exact path={RUTA_SEC_EDITOR}>
               <SeccionEditor auth={`Bearer ${token}`} idUsuario={idUsuario} />
            </Route>
         </Switch>
         <PieDePagina />
      </div>
   );
}
export default App;
