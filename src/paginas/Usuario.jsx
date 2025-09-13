import { useParams } from "react-router-dom";

function Usuario(){
    //useParams obtiene el parámetro dinámico de la URL
    const { id } = useParams();
    return <h2>Perfil del usuario con el ID: {id} </h2>
}

export default Usuario;