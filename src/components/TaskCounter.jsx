import { useState, useEffect } from "react";



// eslint-disable-next-line react/prop-types
export default function TaskCounter({itemTarea}) {
  
  

   const [countPendingTask, setCountPendingTask] = useState(0);
   const [countTask, setCountTask] = useState(0);


   useEffect(() => {
     // eslint-disable-next-line react/prop-types
     const pendingTask = itemTarea.filter((task => !task.estado));
     const totalPendingTasks = pendingTask.length;
     setCountPendingTask(totalPendingTasks)
   }, [itemTarea])

   useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const totalcountTasks = itemTarea.length;
    setCountTask(totalcountTasks)
  }, [itemTarea])
  
  
    

  return (
    <>
  
      <ul>
        <h4>TareApps Incompletas: {countPendingTask}</h4>
        <h4>TOTAL TareApps : {countTask}</h4>

      </ul>
    </>
  );
}


  
  
  
  
  
  
  