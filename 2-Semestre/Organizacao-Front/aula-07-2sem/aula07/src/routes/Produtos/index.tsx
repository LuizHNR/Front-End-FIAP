import { listaProdutos } from "../../listaProdutos";

export default function Produtos() {


    return (
        <div>
            <h1>Componente Produtos</h1>
            {listaProdutos.map((produto) =>(
                <div key={produto.id}>
                    <h2><span>{produto.id}</span> - {produto.nome}</h2>
                    <p>{produto.preco}</p>
                </div>
            ))}
        </div>
    );
}