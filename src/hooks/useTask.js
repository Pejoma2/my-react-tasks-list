import { useState,useEffect } from "react";


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


    let index = itemTarea.length + 1;

  function createTask(taskname) {

    if(!itemTarea.find((task) => task.nombre === taskname)){
          setItemTarea([...itemTarea, { nombre: taskname, estado: false, id: index }]);
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





    return{
        itemTarea,
        createTask,
        deleteTask,
        editTask,
        toggleTask,
        deleteAllTask
    }
}