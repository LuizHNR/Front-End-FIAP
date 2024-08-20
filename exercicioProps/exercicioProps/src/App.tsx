import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Conteudo from "./componentes/Conteudo/Conteudo";
import Rodape from "./componentes/Rodape/Rodape";
import types from "./types"

function App() {

  const titulo: string = "Alunos";
  const texto: string = "";

  const alunos: dadosAluno[] = [
    {id:"111", nome:"Luiz", rm:"556864", avatar:"./image" },
    {id:"222", nome:"LuizE", rm:"556861", avatar:"./image" },
    {id:"333", nome:"Gustavo", rm:"556865", avatar:"./image" },
    {id:"444", nome:"Samuel", rm:"556866", avatar:"./image" },
    {id:"555", nome:"Rafael", rm:"556863", avatar:"./image" },
    {id:"666", nome:"Vicenzo", rm:"556869", avatar:"./image" },
    {id:"777", nome:"Erick", rm:"556862", avatar:"./image" },
    {id:"888", nome:"Romanholi", rm:"556867", avatar:"./image" },
    {id:"999", nome:"Falanga", rm:"556868", avatar:"./image" },
    {id:"101", nome:"Mateusão", rm:"556870", avatar:"./image" }

  ];

  return (
    <div>
      <h1>Componentes App</h1>
      <Cabecalho tituloProps = {titulo} />
      {
        alunos.map((aluno,id)=> ( <Conteudo id={id} nome={aluno.nome} rm={aluno.rm} />))
      }
      <Rodape textoProps = {texto} />
    </div>
  )
}

export default App
