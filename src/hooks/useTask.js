import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


export const useTask = () => {

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





    let index = uuidv4();
    

  function createTask(taskname, descripcion) {

    let taskUpperCase = taskname.toUpperCase();

    setItemTarea([...itemTarea, { nombre: taskUpperCase, estado: false, id: index, descripcion: descripcion  }]);
    
  }


  const deleteTask = (taskToDelete) => {
    setItemTarea(itemTarea.filter((t) => t.nombre !== taskToDelete.nombre));
  }

  const deleteAllTask = () => {
    setItemTarea([]);
  }


  const editTask = (editedTask, id) => {
    
    let editedTaskUpperCase = editedTask.toUpperCase();
    setItemTarea(
    itemTarea.map((task) => (task.id === id ? {...task, nombre: editedTaskUpperCase} : task))
    
  )}


  const toggleTask = (task) => {
    setItemTarea(
        itemTarea.map((t) => (t.nombre === task.nombre) ? { ...task, estado : !t.estado} : t)
    );
  };


//console.log(itemTarea);

  // const totalTaskCount = () => {
  //   let counter = itemTarea.length;
  //   return counter

  // }





    return{
        itemTarea,
        createTask,
        deleteTask,
        editTask,
        toggleTask,
        deleteAllTask,
    }
}