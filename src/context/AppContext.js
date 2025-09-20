import { createContext, useState, useEffect } from "react";

//Crear contexto
export const AppContext = createContext();

// Crear el Provider(estado global)
export function AppProvider({children}){

    //Estado global del usuario
    const [usuario, setUsuario]= useState("Steph");

    //Estado global del tema
    const [tema, setTema] = useState(()=>{
        return localStorage.getItem("tema") || "claro"
    });

    //Cada vez que el tema cambie. lo guardamos 
    useEffect(()=>{
        localStorage.setItem("tema",tema)
    },[tema]);

    //Función para alternar el tema
    const toggleTema = () =>{
        setTema((prev)=>(prev === "claro" ? "oscuro" : "claro"))
    }

    return(
        <AppContext.Provider value={{usuario, setUsuario, tema, toggleTema}}>
            {children}
        </AppContext.Provider>
    )


}