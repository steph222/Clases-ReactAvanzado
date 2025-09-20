import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function Navbar(){
    const {usuario, tema, toggleTema}= useContext(AppContext)

    return(
        <nav style={{
            backgroundColor: tema === "claro" ? "#f5f5f5" : "#333",
            color: tema === "claro" ? "#000" : "#fff",
            padding: "10px"
        }}>
            <span> Bienvenido, {usuario}</span>
            <button onClick={toggleTema}>Cambiar Tema</button>
        </nav>
    )
}

export default Navbar;