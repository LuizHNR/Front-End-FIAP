import { useEffect, useState } from "react";

export async function Get() {
    
    const [imagens, setImagens] = useState<TipoImage[]>([]);
    useEffect(() => {
        
        const chamadaApi = async () =>{
            const response = await fetch('https://api.nasa.gov/EPIC/api/enhanced/date/2015-10-31?api_key=d0YjRyicfDKlGDixyh8BnNMM0r5isSoyx5zBdXN8');
        }

        chamadaApi();

    }, [])

}
