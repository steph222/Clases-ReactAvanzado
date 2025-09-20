import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

function Perfil(){
    //useContext obtiene el valor compartido desde UsuarioContext
    //le dice al componente "quiero usar lo que esta guardado en este contexto"
    const {usuario, setUsuario} = useContext(UsuarioContext);

    return(
        <div>
            {/* Usar el valor del contexto */}
            <h2>Usuario actual: {usuario}</h2>

            {/* Modificar el valor desde cualquier componente */}
            <button onClick={()=> setUsuario("Ana")}>Cambiar Usuario</button>
        </div>
    )
}

export default Perfil
