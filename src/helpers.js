import { useEffect, useRef, useState } from "react";

export function useSearch() {

    const [inputQuery, setInputQuery] = useState("");
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true);


    useEffect(() => {


        if(isFirstInput.current){
            isFirstInput.current = inputQuery === "";
            return
        }

        if (inputQuery === "") {
            setError("No se puede buscar pelicula vacia");
            return
        }
        if (inputQuery.match(/^\d+$/)) {
            setError("No se puede buscar una pelicula con un numero");
            return
        }
        if (inputQuery.length < 3) {
            setError("La búsqueda debe tener al menos 3 caracteres.");
            return
        }

        setError(null)
    }, [inputQuery])

    return [error, inputQuery, setInputQuery];
}