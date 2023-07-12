import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Tareas from "./pages/Tareas";
import PageNotFound from "./pages/PageNotFound";
import Menu from "./components/Menu";
import { Box,IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <IconButton
        //ml={"-450px"}
        as={isDark ? FaSun : FaMoon} boxSize={4} size={"1px"}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
      <Box borderRadius="10px" p="10px" w="30vw">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="SobreNosotros" element={<SobreNosotros />} />
            <Route path="Tareas" element={<Tareas />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
