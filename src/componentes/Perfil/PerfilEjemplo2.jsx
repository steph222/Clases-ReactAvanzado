import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function PerfilEjemplo2(){
    const {usuario,setUsuario,tema } = useContext(AppContext)

    return (
        <div style={{
            backgroundColor: tema === "claro" ? "#fff" : "#222",
            color: tema === "claro" ? "#000" : "#fff",
            padding: "20px",
            marginTop: "20px"
        }}>
            <h2>Perfil de Usuario</h2>
            <p>Usuario actual: {usuario}</p>
            <button onClick={()=>setUsuario('Ana')}>Cambiar Usuario</button>
        </div>
    )
    
}

export default PerfilEjemplo2;