import { CabecalhoProps, Cabecalho2Props } from "../../types";


function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps,children}: CabecalhoProps & Cabecalho2Props) {


    // if(typeof nrPaginaProps === "number"){
    //     document.title = statusProps+" - "+nrPaginaProps;
    // }else{
    //     nrPaginaProps = "..??..";
    //     document.title = statusProps+" - "+nrPaginaProps;
    // }

    document.title = statusProps+ " - " +nrPaginaProps;

    return(
        <header>
            <h1>{paginaProps+"\n- "+nrPaginaProps}</h1>
            <button onClick={()=> avisoProps()}>Aviso</button>
            <div>
                {children}
            </div>
        </header>
    );
}

export default Cabecalho;