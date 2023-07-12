import { Card, Icon, CardBody, Box, Flex } from "@chakra-ui/react";
import { FaEdit, FaEye, FaTasks, FaTrashAlt } from "react-icons/fa";

export default function SobreNosotros() {
  return (
    <div>
      <h1 className="sobre-nosotros">Sobre Nosotros</h1>
      <br />
      <h4>
        Con este aplicativo Web podrás llevar registro de tus tareas de una
        manera muy sencilla
      </h4>
      <br />
      <h4>Tendras acceso a estas funcionalidades:</h4>

      <Flex flexWrap="wrap" justify="center">
        <Box m={"10px"}>
          <Card>
            <CardBody>
              <Icon as={FaTasks} boxSize={10} />
              <p>Agregar Tareas, con NOMBRE y DESCRIPCION</p>
            </CardBody>
          </Card>
        </Box>
        <Box m={"10px"}>
          <Card>
            <CardBody>
              <Icon as={FaTrashAlt} boxSize={10} />
              <p>Borrar Tareas</p>
            </CardBody>
          </Card>
        </Box>
        <Box m={"10px"}>
          <Card>
            <CardBody>
              <Icon as={FaEdit} boxSize={10} />
              <p>Editar Tareas</p>
            </CardBody>
          </Card>
        </Box>
        <Box m={"10px"}>
          <Card>
            <CardBody>
              <Icon as={FaEye} boxSize={10} />
              <p>Visualizar cuantas Tareas tienes en tu lista</p>
            </CardBody>
          </Card>
        </Box>
        <Box m={"10px"}>
          <Card>
            <CardBody>
              <Icon as={FaEye} boxSize={10} />
              <p>Visualizar cuantas Tareas Pendientes tienes en tu lista</p>
            </CardBody>
          </Card>
        </Box>
        <Box m={"10px"}>
          <Card>
            <CardBody>
              <Icon as={FaTrashAlt} boxSize={10} />
              <p>Borrar TODAS las Tareas</p>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </div>
  );
}
