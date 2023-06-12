import { useState } from "react";

//Funcion creadora de Tareas a partir de un input

// eslint-disable-next-line react/prop-types
export default function TaskCreator({ createNewTask }) {
  const [nuevaTareApp, setNuevaTareApp] = useState("");

  
  //console.log(propiedades.createNewTask)
  //funcion que -maneja el envío del formulario -almacena el valor ingresado en el campo de entrada en el almacenamiento local -borra el contenido del campo de entrada.
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(nuevaTareApp);
    //localStorage.setItem("task", nuevaTareApp);
    setNuevaTareApp("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="nueva-tareapp"
        className="nueva-tarea"
        type="text"
        placeholder="Ingresa nueva TareApp"
        value={nuevaTareApp}
        onChange={(e) => setNuevaTareApp(e.target.value)}
      />
      <button className="button-agregar">+</button>
    </form>
  );
}
