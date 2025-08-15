import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to = "/produtos">Produtos</Link></li>
                <li><Link to = "/EditarProdutos/1">EditarProduto-1</Link></li>
            </ul>
        </nav>
    )
}