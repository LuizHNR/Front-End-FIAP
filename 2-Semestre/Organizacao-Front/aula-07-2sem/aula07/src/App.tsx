import { Outlet } from "react-router-dom";
import Cabecalho from "./componenst/Cabecalho/Cabecalho";
import Rodape from "./componenst/Rodape/Rodape";

export default function App() {


  return(
    <div>
      <Cabecalho/>
      {/*--------Aqui vamos adicionar o componente OUTLET do router-dom que recebe a props de RouterProvider-------- */}
      <Outlet/>
      <Rodape/>
    </div>
  );
}