import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Tareas from "./pages/Tareas";
import PageNotFound from "./pages/PageNotFound";
import Menu from "./components/Menu";

function App() {

  


  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="SobreNosotros" element={<SobreNosotros/>}/>
          <Route path="Tareas" element={<Tareas/>}/>
          <Route path="*" element={<PageNotFound/>}/>



        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
