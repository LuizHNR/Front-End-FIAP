import { dadosAluno } from "../../types";
import { chave } from "../../types";

function Conteudo({id, nome, rm}: dadosAluno & chave){

    return(
        <div key={id}>O aluno {nome} com id {id} tem o RM {rm}</div>
    )
}

export default Conteudo;