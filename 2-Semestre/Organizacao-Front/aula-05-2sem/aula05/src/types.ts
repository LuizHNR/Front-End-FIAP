export type CabecalhoProps = {
    paginaProps:string;
    nrPaginaProps:string | number;
    children:React.ReactNode;
}

//export type Cabecalho2Props = {
  //  statusProps: "deployed" | "loading";
  //  avisoProps:Function;
//}

export interface Cabecalho2Props {
    statusProps: "deployed" | "loading";
    avisoProps:Function;
}