import React, { useState } from "react";

import PanelOpcionesDiario from "./PanelOpcionesDiario.js";
import ContenedorDiario from "./ContenedorDiario.js";
import ContenedorBotonesResultado from "../ContenedorBotonesResultado.js";

const SubseccionDiario = (props) => {
   return (
      <div className="subseccion-diario">
         <h5 className="subseccion-diario-nombre">Tu Diario</h5>
         <div className="subseccion-diario-principal">
            <PanelOpcionesDiario />
            <ContenedorDiario />
            <ContenedorBotonesResultado />
         </div>
      </div>
   );
};

export default SubseccionDiario;
