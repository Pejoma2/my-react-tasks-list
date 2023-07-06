import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    
    <Flex
    //direction="column"
    alignItems="center"
    justify="center"
    h="100%"
    //p={["0 10%", null, "0 20%"]}
  >
    <Stack
    direction={{ xl: "column",  }}>

      <nav className="navbar">
        <ul>
          <li>
            <Heading textTransform="uppercase">
              <NavLink to="/">Home</NavLink>
            </Heading>
          </li>
          <li>
            <Heading textTransform="uppercase">
              <NavLink to="/SobreNosotros">Sobre Nosotros</NavLink>
            </Heading>
          </li>
          <li>
            <Heading>
              <NavLink to="/Tareas">Lista Tareas</NavLink>
            </Heading>
          </li>
        </ul>
      </nav>
    </Stack>
    </Flex>
    
  );
}
