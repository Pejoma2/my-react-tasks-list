//import { useState, useEffect } from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Input } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
export default function Task({ tarea, toggleTask, deleteTask, editTask }) {
  
  
  const handleDeleteTask = () => {
    if (window.confirm("Esta seguro de BORRAR la tarea?")) {
      deleteTask(tarea);
    }
  };

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleEditingDone = (e) => {
    if (e.key == 'Enter') {
      setEditing(false);
    }
  };

  // const handleInputChange = (e) => {
  //   setEditedTask(e.target.value);
  // };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    // eslint-disable-next-line react/prop-types
    <li
      id="tarea"
      className={tarea.estado ? "tarea-completada" : "tarea"}
      key={tarea.nombre}
    >
      {" "}
      <div style={viewMode}>
        <span>
          <input
            type="checkbox"
            checked={tarea.estado}
            onChange={() => toggleTask(tarea)}
          />
          {tarea.nombre}
        </span>
        <span className="contenedor-botones">
          <button className="boton-edit" onClick={() => handleEditing()}>
            <FaEdit />
          </button>
          <button className="boton-borrar" onClick={() => handleDeleteTask()}>
            <FaTrash />
          </button>
        </span>
      </div>
      <input 
            type="text"
            autoFocus
            value={tarea.nombre}
            className="modo-edicion"
            style={editMode}
            onChange={((e) => editTask(e.target.value, tarea.id))}
            onKeyDown={(e) =>handleEditingDone(e)} />
    </li>
  );
}
