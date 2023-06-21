import TaskCreator from "./TaskCreator";
import Task from "./Task";
import { useTask } from "../hooks/useTask";

export default function TaskList() {

  const {itemTarea, createTask, deleteTask, editTask, toggleTask} = useTask();
    

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
                editTask={editTask}/>
      ))}
    </ul>
  );
}
