import { UsuarioProvider } from "../context/UsuarioContext";
import Perfil from "../componentes/Perfil/Perfil";

function EjemploContextApi(){
    return(
        //Envolver el componente del Provider
        <UsuarioProvider>
            <Perfil></Perfil>
            
        </UsuarioProvider>
    )
}

export default EjemploContextApi