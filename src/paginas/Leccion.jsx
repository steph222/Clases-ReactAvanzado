import { useParams } from "react-router-dom";

function Leccion(){
    const { cursoID, leccionID } = useParams()
    return(
        <h2>
            Curso: {cursoID} | Lección: {leccionID}
        </h2>
    )
}

export default Leccion;