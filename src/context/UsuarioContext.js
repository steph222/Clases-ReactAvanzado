import { createContext, useState } from "react";

//Crear el contexto --- Caja global de datos
export const UsuarioContext = createContext();

//Crear Provider (envuelve el app y comparte el estado)
export function UsuarioProvider({children}){
    //guardar el valor de estado inicial
    const [usuario, setUsuario] = useState("Steph");

    return(
        //El provider comparte "usuario" y "setUsuario" con todos los componentes hijos
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    )
}