import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditarProdutos(){
  
    const navigate = useNavigate()

    const{id} = useParams();

    const [openModal, setOpenModal] = useState(true);

    const isModal = ()=>{
      setOpenModal(false);
      if(!openModal){
          navigate("/produtos");
        }
    }

    return(
      <div>

        
        <dialog open={openModal} className="produto-modal">
          <h1>Editar Produto</h1>
          <h2>{id}</h2>

        </dialog>
        <button onClick={()=> isModal()}>{openModal ? "CLOSE-MODAL" : "OPEN-MODAL"}</button>
      </div>
    );
  }