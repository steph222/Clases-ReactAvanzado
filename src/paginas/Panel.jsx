import { Link, Outlet } from "react-router-dom";

function Panel(){
    return(
        <div>
            <h2>Panel de Control</h2>
            <nav>
                <Link to="estadisticas">Estadísticas</Link> |{" "}
                <Link to="configuracion">Configuración</Link> |{" "}
            </nav>
            {/*Aquí se mostrarán las subrutas */}
            <Outlet/>

        </div>
    )
}

export default Panel;