import React,{ useState } from 'react';
import "./estilos/contenedorAsignaturas.scss";

const ContenedorGrupo = (props) => {
    const [botonDeseleccionar,setBotonDeseleccionar] = useState(false);
    const agregarAsignatura = () => {
        props.agregarAsignatura(props.grupo)
        setBotonDeseleccionar(true)
    }
    const desagregarAsignatura = () => {
        props.desagregarAsignatura(props.grupo)
        setBotonDeseleccionar(false)
    }
    return(
        <div className="contenedor-asignaturas-materia-grupo">
            <p>Hora: {props.grupo.hora}</p>
            <p>Profesor: {props.grupo.profesor}</p>
            <p>Días: {props. grupo.dias}</p>
            {botonDeseleccionar==false ? <input type="submit" value="Registrar" onClick={agregarAsignatura}/> : <input type="submit" value="Quitar" onClick={desagregarAsignatura}/>}
        </div>
)
}

export default ContenedorGrupo; 