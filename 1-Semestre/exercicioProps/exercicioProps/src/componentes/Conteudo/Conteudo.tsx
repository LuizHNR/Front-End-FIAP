import { dadosAluno } from "../../types";

function Conteudo({id, nome, rm}: dadosAluno){

    return(
        <div key={id}>O aluno {nome} com id {id} tem o RM {rm}</div>
    )
}

export default Conteudo;