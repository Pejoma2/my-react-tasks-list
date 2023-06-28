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

    if(!itemTarea.find((task) => task.nombre === taskname)){
          setItemTarea([...itemTarea, { nombre: taskname, estado: false, id: index, descripcion: descripcion  }]);
    }else{
        alert("TareApp REPETIDA \n \n \nPor favor \nELIGE UN NOMBRE DIFERENTE")
    }
  }


  const deleteTask = (taskToDelete) => {
    setItemTarea(itemTarea.filter((t) => t.nombre !== taskToDelete.nombre));
  }

  const deleteAllTask = () => {
    setItemTarea([]);
  }


  const editTask = (editedTask, id) => {
    setItemTarea(
    itemTarea.map((task) => (task.id === id ? {...task, nombre: editedTask} : task))
    
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