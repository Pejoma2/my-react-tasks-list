import TaskCreator from "./TaskCreator";
import Task from "./Task";
import { useTask } from "../hooks/useTask";

export default function TaskList() {

  const {itemTarea, createTask, deleteTask, editTask, toggleTask, deleteAllTask} = useTask();
  

  const handleDeleteAllTask = () => {
    if (window.confirm("Esta seguro de BORRAR TODAS las tareas?")) {
      deleteAllTask();
    }
  };

  return (
    <ul>
      <TaskCreator createNewTask={createTask} />

      {
        itemTarea.map((tarea) => (
            <Task  
                tarea={tarea} 
                key={tarea.id} 
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                editTask={editTask}
                />
      ))}
      <button className="borrar-todo" onClick={handleDeleteAllTask}>Borrar Todo</button>
    </ul>
  );
}
