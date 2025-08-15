import { Link } from "react-router-dom";
import styles from "../../App.module.css";

export default function Menu(){

    return(
        <div className={styles.menu}>
            <nav className="Menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/produtos/editar/0">Editar Produtos</Link></li>
            </nav>
        </div>
    );
}