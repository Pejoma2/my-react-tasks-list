//import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
export default function Task({tarea, toggleTask}) {

      
  
  return (
    // eslint-disable-next-line react/prop-types
    <li 
        id="tarea"
        className= {tarea.estado ? "tarea-completada" : "tarea"} 
        key={tarea.nombre}
        >
      <input 
        type="checkbox" 
        checked={tarea.estado}
        onChange={() => toggleTask(tarea)} />
      {tarea.nombre}
      <span className='contenedor-botones'>
        <button className='boton-edit'><FaEdit/></button> 
        <button className='boton-borrar'><FaTrash/></button> 
      </span>
    </li>
  );
}
