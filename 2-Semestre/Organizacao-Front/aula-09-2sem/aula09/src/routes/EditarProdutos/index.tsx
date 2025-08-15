import { useParams } from "react-router-dom";

export default function EditarProdutos(){

    const{id} = useParams();

    return(
      <div>

          <h1>Editar Produto</h1>

          <h2>{id}</h2>


      </div>
    );
  }