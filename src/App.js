import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from './componentes/Inicio/Inicio';
import AcercaDe from './componentes/AcercaDe/AcercaDe';
import Contactos from './componentes/Contactos/Contactos';

import Panel from "./paginas/Panel";
import Estadísticas from "./paginas/Estadisticas";
import Configuracion from "./paginas/Configuracion";

import Usuario from "./paginas/Usuario";

import Leccion from "./paginas/Leccion";

function App() {
  return (
    <Router>
      {/*Menú de Navegacion*/}
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/acercaDe">Acerca de Nosotros</Link> |{" "}
        <Link to="/contactos">Contactenos</Link> |{" "}

        <Link to="/panel">Panel</Link> |{" "}

        <Link to="/usuario/pedro">Usuario 1</Link> |{" "}
        <Link to="/usuario/2">Usuario 2</Link> |{" "}
        <Link to="/usuario/3">Usuario 3</Link> |{" "}
        
        
        <Link to="/curso/react/leccion/1">Curso de React</Link> |{" "}
        <Link to="/curso/python/leccion/5">Curso de Python</Link> |{" "}


      </nav>

      {/*Todas las rutas */}

      <Routes>
        {/*Rutas principales */}
        <Route path="/" element={<Inicio/>}  />
        <Route path="/acercaDe" element={<AcercaDe/>}  />
        <Route path="/contactos" element={<Contactos/>}  />

        {/* Rutas anidadas bajo /panel/estadisticas */}
        <Route path="/panel" element={<Panel/>} >
          <Route path="estadisticas" element={<Estadísticas/>} />
          <Route path="configuracion" element={<Configuracion/>} />
        </Route>

        {/*Rutas dinámicas */}
        <Route path="/usuario/:id" element={<Usuario/>} />
        
        <Route path="/curso/:cursoID/leccion/:leccionID" element={<Leccion/>} />

      </Routes>

    </Router>
  );
}

export default App;
