import { AppProvider } from "../context/AppContext";
import Navbar from "../componentes/Navbar/Navbar";
import PerfilEjemplo2 from "../componentes/Perfil/PerfilEjemplo2";

function App(){
    return(
        //Provider
        <AppProvider>
            <Navbar></Navbar>
            <PerfilEjemplo2></PerfilEjemplo2>
        </AppProvider>
    )
}

export default App;