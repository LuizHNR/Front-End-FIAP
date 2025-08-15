import { Link } from "react-router-dom";
import { useState } from "react";
import { TipoProduto } from "../../types";
import { listaProdutos } from "../../listaProdutos";

export default function Produtos(){


//Recepção dos dados que vem do UseState verificando se a lista está completa
//Caso ela não esteja, é setado um array de string vazio
const listaProdutosString = localStorage.getItem('lista') || '[]';
const lista:TipoProduto[] = JSON.parse(listaProdutosString);
  
  const [produtos] = useState<TipoProduto[]>(lista);

    return(
      <div>
        <h1>Produtos Eletrônicos</h1>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Marca</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Foto</th>
              <th>Editar | Excluir</th>
            </tr>
          </thead>
        
        <tbody>
        {produtos.map((prod)=>(
          <tr key={prod.id}>
            <td>{prod.nome}</td>
            <td>{prod.marca}</td>
            <td>{prod.desc}</td>
            <td>{prod.preco}</td>
            <td><img src={prod.foto} alt={prod.nome}/></td>
            <td><Link to={`/editar/produtos/${prod.id}`}>Editar</Link></td>
          </tr>
        ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={6}>
            Total de produtos <span>{listaProdutos.length}</span>  
            </td>
          </tr>
        </tfoot>
      </table>
      </div>
    );
  }
