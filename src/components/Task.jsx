//import { useState, useEffect } from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export default function Task({ tarea, toggleTask, deleteTask, editTask }) {
  const [flipped, setFlipped] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDoubleClick = () => {
    setFlipped(!flipped);
  };

  const handleDeleteTask = () => {
    deleteTask(tarea);
  };

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleEditingDone = (e) => {
    if (e.key == "Enter") {
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
      style={{ height: "fit-content" }}
      onDoubleClick={handleDoubleClick}
    >
      {" "}
      <div style={viewMode}>
        <span
          style={
            flipped ? { fontSize: "30px", color: "rgb(100, 100, 153)" } : {}
          }
        >
          <input
            type="checkbox"
            checked={tarea.estado}
            onChange={() => toggleTask(tarea)}
          />
          {flipped ? (
            <div>
              <p>Descripcion:</p>
              <br />
              {tarea.descripcion.toLowerCase()}
            </div>
          ) : (
            tarea.nombre
          )}
        </span>

        {!flipped && (
          <span className="contenedor-botones">
            <button className="boton-edit" onClick={() => handleEditing()}>
              <FaEdit size="1.6em" style={{ opacity: 0.7 }} />
            </button>
            <button className="boton-borrar" onClick={() => onOpen()}>
              <FaTrash size="1.6em" style={{ opacity: 0.7 }} />
            </button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Confirmación de Borrado</ModalHeader>
                <ModalCloseButton />
                <ModalBody>Estas seguro de BORRAR esta TareApp?</ModalBody>
                <ModalFooter>
                  <Button colorScheme="red" onClick={handleDeleteTask}>
                    Borrar
                  </Button>
                  <Button style={{ marginLeft: "10px" }} onClick={onClose}>
                    Cancelar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </span>
        )}
      </div>
      <input
        type="text"
        autoFocus
        value={tarea.nombre}
        className="modo-edicion"
        style={editMode}
        onChange={(e) => editTask(e.target.value, tarea.id)}
        onKeyDown={(e) => handleEditingDone(e)}
      />
    </li>
  );
}
