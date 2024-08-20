import {CabecalhoProps} from "../../types"

function Cabecalho({tituloProps}: CabecalhoProps){

    return(
        <header>
            <h1>{tituloProps}</h1>
        </header>
    )
}


export default Cabecalho;