import TaskCreator from "./TaskCreator";
import Task from "./Task";
import { useTask } from "../hooks/useTask";
import TaskCounter from "./TaskCounter";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

export default function TaskList() {

  const {itemTarea, createTask, deleteTask, editTask, toggleTask, deleteAllTask} = useTask();
  
  const { isOpen, onOpen, onClose} = useDisclosure();

  const handleDeleteAllTask = () => {
    
      deleteAllTask();
      onClose();
    
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
      <button className="borrar-todo" onClick={onOpen}>Borrar Todo</button>
      <Modal isOpen = {isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Confirmación de Borrado</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>Estas seguro de BORRAR todas las TareApps?</ModalBody>
            <ModalFooter>
              <Button colorScheme="red" onClick={handleDeleteAllTask}>Borrar</Button>
              <Button style={{ marginLeft: '10px' }} onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
      </Modal>

      <TaskCounter itemTarea={itemTarea}/>
    </ul>
  );
}
