import imgCadeado from "../../img/favicon.ico";

import Menu from "../Menu/Menu";

export default function Cabecalho(){
    return(
        <header>
            <h1>Cabeçalho</h1>
            <img src={imgCadeado} alt="Cadeado" />
            <div>
                <img src="/img/favicon.ico" alt="" />
            </div>

            <Menu/>
        </header>
    )

}