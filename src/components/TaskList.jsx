import { useState,useEffect } from "react";
import TaskCreator from "./TaskCreator";
import Task from "./Task";

export default function TaskList() {
  const [itemTarea, setItemTarea] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("tasks")
     if(data){
        setItemTarea(JSON.parse(data))
     }

  }, [])


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(itemTarea));
  }, [itemTarea])


  const toggleTask = (task) => {
    setItemTarea(
        itemTarea.map((t) => (t.nombre === task.nombre) ? { ...task, estado : !t.estado} : t)
    );
  };



  function createTask(taskname) {

    if(!itemTarea.find((task) => task.nombre === taskname)){
          setItemTarea([...itemTarea, { nombre: taskname, estado: false }]);
    }else{
        alert("TareApp REPETIDA \n \n \nPor favor \nELIGE UN NOMBRE DIFERENTE")
    }
  }

  return (
    <ul>
      <TaskCreator createNewTask={createTask} />

      {
        itemTarea.map((tarea) => (
            <Task  tarea={tarea} key={tarea.nombre} toggleTask={toggleTask}/>
      ))}
    </ul>
  );
}
