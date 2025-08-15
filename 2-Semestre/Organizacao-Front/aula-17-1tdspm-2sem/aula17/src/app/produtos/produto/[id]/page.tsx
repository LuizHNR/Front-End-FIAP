export default function Produto({params}:{params:{id:number}}) {

  // Exercício
  //Receba o id como parâmetro passado pela lista de produtos:
  //A partir desse ID utilize o endpoint GetById e recupere o objeto relativo a ele e apresente nesta página.


  return (
    <div>
        <h1>Produto</h1>
        <div>
          <h2>Produto {params.id}</h2>
        </div>
    </div>
  )
}
